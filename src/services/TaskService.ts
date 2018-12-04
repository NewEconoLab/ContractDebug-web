import { store } from "../store/index";
import { Task, TaskState, ConfirmType, TaskType, TaskView } from "../entity/TaskEntitys";
import { tools } from "../tools/importpack";

export class TaskService
{
    public addTask(type: TaskType, confirm: ConfirmType, txid: string, message?: any)
    {
        let task = new Task(type, confirm, txid, message)
        store.taskStore.pushTask(task);
    }

    public async update()
    {
        let list = store.taskStore.getTaskList();
        let ress = await this.getResult(list); //得到所有的watting返回的查询结果
        let tasklist = this.forConfirm(list, (task: Task) =>
        {
            let result = ress[ task.txid ]; //获取通知数组
            if (result.issucces)
            {
                task.state = TaskState.success;
            }
            task.confirm++;
            return task;
        });
        store.taskStore.setTasklist(tasklist);
    }

    public showTaskList()
    {
        let tasklist = store.taskStore.getTaskList();
        let viewlist: TaskView[] = []
        for (const task of tasklist)
        {
            viewlist.push(new TaskView(task));
        }
        let list = viewlist.sort((a, b) =>
        {
            return a.startTime > b.startTime ? -1 : 1;
        });
        return list;
    }

    /**
     * 循环得到任务返回的结果
     * @param {Task} tasks 任务类
     */
    async getResult(tasks: Task[])
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

    /**
     * 类似 js 数组的 map方法
     * @param tasks Task数组
     * @param call 回调方法
     */
    public forConfirm(tasks: Task[], call)
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
}