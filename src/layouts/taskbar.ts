
import Vue from "vue";
import Component from "vue-class-component";
import { LoginInfo } from "../tools/entity";
import Store from "../tools/StorageMap";
import { tools } from "../tools/importpack";
import { TaskView } from "../entity/TaskEntitys";
import { services } from "../services/index";
@Component({
    components: {}
})
export default class TaskBar extends Vue
{
    currentAddress: string;
    showaddr: string;
    href: string;
    blockheight: number;
    showHistory: boolean;
    taskList: TaskView[];
    taskNumber: number;
    balance: Neo.Fixed8;
    claimState: string;
    constructor()
    {
        super();
        this.balance = Neo.Fixed8.Zero;
        this.blockheight = 0;
        this.showHistory = false;
        this.claimState = "3010";
        this.currentAddress = LoginInfo.getCurrentAddress();
        this.showaddr = [
            this.currentAddress.substring(0, 4),
            this.currentAddress.substring(this.currentAddress.length - 4)
        ].join("...");
        this.href = "https://scan.nel.group/test/address/" + this.currentAddress;
        this.taskList = [];
        this.taskNumber = sessionStorage.getItem("newTaskNumber")
            ? parseInt(sessionStorage.getItem("newTaskNumber"))
            : 0;
        services.taskManager.calcStack.push(this.taskHistory);
        services.taskManager.calcStack.push(this.getHeight);
        services.taskManager.calcStack.push(this.getBalance);
        services.taskManager.calcStack.push(this.initClaimState);
    }
    mounted()
    {
        this.getHeight();
        // TaskFunction.heightRefresh = this.getHeight;
        this.getBalance();
        this.initClaimState();
        this.taskList = services.taskManager.showTaskList();
    }

    getHeight()
    {
        this.blockheight = Store.blockheight.select("height");
    }

    async getBalance()
    {
        const balance = await tools.wwwtool.getUtxoBalance(
            this.currentAddress,
            tools.coinTool.id_GAS
        );
        this.balance = Neo.Fixed8.fromNumber(balance);
    }

    async claimGas()
    {
        console.log(this.claimState);

        if (this.claimState == "3010")
        {
            console.log(this.claimState);
            let openToast = this.$refs[ "toast" ][ "isShow" ];
            try
            {
                const result = await tools.wwwtool.claimGas(this.currentAddress, 500);
                if (result ? result[ 0 ] : false)
                {
                    this.claimState = result[ 0 ][ "code" ];
                    openToast("success", "请求发送成功", 4000);
                } else
                {
                    openToast("error", "gas不足领取失败，请在论坛留言索取。", 4000);
                }
            } catch (error)
            {
                openToast("error", "gas不足领取失败，请在论坛留言索取。", 4000);
                console.log(error);
            }
        }
    }

    async initClaimState()
    {
        try
        {
            const result = await tools.wwwtool.hasClaimGas(this.currentAddress);
            this.claimState = result[ "code" ];
        } catch (error)
        {
            console.log(error);
        }
    }

    taskHistory()
    {
        // this.clearTimer();
        this.taskList = services.taskManager.showTaskList();
    }

    skipPage(key: string, value: string)
    {
        if (key)
        {
            services.routerParam[ key ] = value;
            this.$router.push(key);
            this.showHistory = false;
        }
    }
}
