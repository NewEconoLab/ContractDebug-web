import { sessionStoreTool } from "./storagetool";
import { Task, TaskType, TaskState, TaskFunction, ConfirmType, LoginInfo } from "./entity";
import { tools } from "./importpack";
import Store from "./StorageMap";
/**
 * 任务管理器
 */
export class TaskManager
{
    static taskStore: sessionStoreTool = new sessionStoreTool("task-manager");
    static refresh: sessionStoreTool = new sessionStoreTool("refresh_auction");
    static oldBlock: sessionStoreTool = new sessionStoreTool("block");
    static functionList: Function[] = [];
    constructor()
    {
    }

    static getBlockHeight()
    {
        let height = this.oldBlock.select('height');
        return height;
    }

    /**
     * 更新方法
     */
    static async update()
    {
        let taskList = (this.taskStore.getList() as Object);
        for (const txid in taskList)
        {
            if (taskList.hasOwnProperty(txid))
            {
                const task = taskList[ txid ] as Task;
            }
        }

        /**
         * 放在任务状态更新后面执行刷新操作，以防数据未变化就刷新操作
         */
        if (TaskFunction.taskHistory)
        {
            TaskFunction.taskHistory();
        }

        // await services.auction.updateAuctionList(LoginInfo.getCurrentAddress());
        for (const index in this.functionList)
        {
            if (this.functionList.hasOwnProperty(index))
            {
                let element = this.functionList[ index ];
                element();
            }
        }
    }

    /**
     * 类似 js 数组的 map方法
     * @param tasks Task数组
     * @param call 回调方法
     */
    static forConfirm(tasks: Task[], call)
    {
        let taskarr: Task[] = [];
        for (let index = 0; index < tasks.length; index++)
        {
            let tasknew: Task;
            const task = tasks[ index ];
            if (task.state == TaskState.watting)
            {
                tasknew = call(task);
            } else
            {
                tasknew = task;
            }
            taskarr.push(tasknew);
        }
        return taskarr;
    }

    /**
     * 循环得到任务返回的结果
     * @param tasks 任务类
     */
    static async getResult(tasks: Task[])
    {
        let ress = {};
        for (let index = 0; index < tasks.length; index++)
        {
            const element = tasks[ index ];
            if (element.state == TaskState.watting) //判断如果状态是 watting 则查找对应的返回值
            {
                switch (element.type)
                {
                    case ConfirmType.tranfer:
                        ress[ element.txid ] = await tools.wwwtool.hastx(element.txid);
                        break;
                    case ConfirmType.contract:
                        ress[ element.txid ] = await tools.wwwtool.hascontract(element.txid);
                        break;
                    case ConfirmType.recharge:
                        ress[ element.txid ] = await tools.wwwtool.getrechargeandtransfer(element.txid);
                        break;
                    default:
                        ress[ element.txid ] = await tools.wwwtool.hastx(element.txid);
                        break;
                }
            } else  //如果状态是 成功或者失败就没必要调用api查询返回结果了
            {
                ress[ element.txid ] = undefined;
            }
        }
        return ress;
    }

    static addTask(task: Task)
    {
        this.taskStore.push(task.txid, task);
        TaskFunction.newTaskNumber();
    }

    /**
     * 交易确认
     * @param tasks 
     */
    static async confirm_claimGas(tasks: Task[])
    {
        let ress = await this.getResult(tasks); //得到所有的watting返回的查询结果
        //遍历管理类数组，在回调中处理后返回新的对象并用数组接收
        let taskarr = this.forConfirm(tasks, (task: Task) =>
        {
            if (task.confirm > 3)   //交易确认的次数超过三次，等同于三个块也没有查询到对应的数据 默认失败;
            {
                task.state = TaskState.fail;
                TaskFunction.claimState(0);
            } else
            {
                let result = ress[ task.txid ]; //获取通知数组
                if (result.issucces) //检测是否有对应的通知 changeOwnerInfo
                {
                    task.state = TaskState.success;
                    TaskFunction.claimState(1);
                }
            }
            task.confirm++;
            return task;
        });
        this.taskStore.put(TaskType.ClaimGas.toString(), taskarr); //保存修改的状态
    }

}