import { tools } from "../tools/importpack";


export class TaskFunction
{
    constructor() { }
    static heightRefresh: Function; //高度刷新
    static taskHistory: Function;  //操作记录显示
    static exchange: Function;
    static tranfer: Function;// 交易确认 需要签名的任务，涉及资产变动
    static openAuction: Function;//开标
    static addPrice: Function;// 资产更新 在tx交易成功后添加资产更新任务，资产更新立即执行
    static topup: Function;//充值
    static withdraw: Function;//退款
    static getGasTest: Function;//测试网领取gas
    static claimGas: Function;//提取Gas
    static claimState: Function;//提取状态
    static domainMapping: Function;//域名映射
    static domainResovle: Function;//域名合约地址
    static domainRenewal: Function;//续约显示
    static domainTransfer: Function;
    static auctionStateUpdate: Function;
    static newTaskNumber: Function;//更新阅读数
}

export class Task
{
    taskType: TaskType;
    height: number;
    confirm: number;
    type: ConfirmType;
    txid: string;
    message: any;
    state: TaskState;
    startTime: number;
    constructor(
        taskType: TaskType,
        type: ConfirmType,
        txid: string,
        messgae?
    )
    {
        let oldBlock = new tools.sessionstoretool("block");
        this.height = oldBlock.select('height');
        this.type = type;
        this.taskType = taskType;
        this.confirm = 0;
        this.txid = txid;
        this.state = TaskState.watting;
        this.message = messgae;
        this.startTime = new Date().getTime();
    }
    toString()
    {
        return JSON.stringify(this);
    }
}

export class TaskView extends Task
{
    txidhref: string;
    simpleTxid: string;
    constructor(task: Task)
    {
        let href = "https://scan.nel.group/test/";
        super(task.taskType, task.type, task.txid, task.message);
        this.state = task.state;
        this.txidhref = href + "transaction/" + task.txid;
        this.simpleTxid =
            [ task.txid.substring(0, 6),
            task.txid.substring(task.txid.length - 6) ]
                .join("...");
    }
}

/**
 * 任务状态
 */
export enum TaskState
{
    watting,
    success,
    fail,
}

/**
 * 任务类型
 */
export enum TaskType
{
    tranfer,// 交易确认 需要签名的任务，涉及资产变动
    invoke,
    deploy
}

/**
 * 确认的操作类型
 */
export enum ConfirmType
{
    tranfer,    // 确认交易是否成功
    contract,   // 确认合约是否成功，等待notify
    recharge,   // 双交易的发送 类型
}
