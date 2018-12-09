import Component from "vue-class-component";
import Vue from "vue";
import { tools } from '../../tools/importpack';
import { LoginInfo } from '../../tools/entity';
import { ContractResult } from '../../entity/ContractEntitys';
import { services } from "../../services/index";
import { TaskType, ConfirmType } from "../../entity/TaskEntitys";
@Component({
    components: {}
})
export default class Invoke extends Vue
{
    currentContract: { name: string, scripthash: string } = { name: "", scripthash: "" };
    inputContract: string = "";
    contractList: { name: string, scripthash: string }[] = [];
    openSelect: boolean = false;
    editor: CodeMirror.EditorFromTextArea;
    resultEditor: CodeMirror.EditorFromTextArea;
    invokeResult: ContractResult = new ContractResult();
    opneToast: Function;
    mounted()
    {
        this.initContractList();
        const host = document.getElementById("invoke-json-code") as HTMLTextAreaElement;
        const host2 = document.getElementById("invoke-result-code") as HTMLTextAreaElement;
        const option: CodeMirror.EditorConfiguration = {}
        option.lineNumbers = true;
        option.mode = "application/ld+json";
        option.dragDrop = true;
        option.theme = "monokai";
        option.matchBrackets = true;
        option.autoCloseBrackets = true;
        option.lineWrapping = true;
        // option.readOnly = true;
        let codestore = sessionStorage.getItem("invoke-json-code");
        this.editor = CodeMirror.fromTextArea(host, option);
        this.editor.setValue(codestore ? codestore : "");
        // this.editor.setSize("auto", height);
        // this.editor.on("change", function (Editor, change)
        // {
        //     // 事件触发后执行事件
        //     sessionStorage.setItem("invoke-json-code", Editor.getValue())
        // });
        this.editor.setSize("auto", "245px");
        option.readOnly = true;
        this.resultEditor = CodeMirror.fromTextArea(host2, option);
        this.resultEditor.setSize("auto", "219.5px");
        this.opneToast = this.$refs[ "toast" ][ "isShow" ];
    }
    async initContractList()
    {
        this.contractList = await tools.wwwtool.getContractRemarkByAddress(LoginInfo.getCurrentAddress())
        if (services.routerParam[ "invoke" ])
        {
            this.currentContract.scripthash = services.routerParam[ "invoke" ][ "contract" ];
            this.currentContract.name = this.contractList[ this.currentContract.scripthash ];
            services.routerParam.invoke = null;
        }
    }

    /**
     * 切换合约
     */
    changeContract()
    {
        for (const con of this.contractList)
        {
            if (con.scripthash == this.inputContract)
            {
                this.currentContract = con;
            }
        }
        if (this.currentContract.scripthash != this.inputContract)
        {
            if (/^[0-9a-fA-F]{1,40}$/.test(this.inputContract.replace("0x", "")))
            {
                this.currentContract = { name: "", scripthash: this.inputContract };
            }
            else
            {
                this.opneToast('error', "非法合约hash，请重新检查。", 4000);
                return;
            }
        }
        this.openSelect = false;
        this.inputContract = "";
    }

    async testRun()
    {
        try
        {
            let data = this.paresInvokeJson();
            let result: ContractResult = await tools.wwwtool.rpc_getInvokescript(data);
            if (result)
            {
                this.invokeResult = result;
                this.resultEditor.setValue(JSON.stringify(result));
                var totalLines = this.resultEditor.lineCount();
                this.resultEditor.autoFormatRange({ line: 0, ch: 0 }, { line: totalLines });
            }
        } catch (error)
        {
            this.opneToast('error', "请检查Json的格式", 4000);
        }
    }

    async invoking()
    {
        let script = this.paresInvokeJson()
        let data = await tools.contract.buildInvokeTransData(script);
        let result = await tools.wwwtool.setTxCallContract(LoginInfo.getCurrentAddress(), data.data.toHexString());
        if (result)  
        {
            this.opneToast("succes", "invoke 交易发送成功，等待区块确认", 4000)
            services.taskManager.addTask(TaskType.invoke, ConfirmType.tranfer, result.txid, { txid: result.txid })
            // this.resultEditor.setValue(JSON.stringify(result));
        }

    }

    paresInvokeJson()
    {

        let json = this.editor.getValue();
        let arr = JSON.parse(json) as any[];
        var sb = new ThinNeo.ScriptBuilder();
        for (var i = arr.length - 1; i >= 0; i--)
        {
            sb.EmitParamJson(arr[ i ]);
        }
        let appcall = Neo.Uint160.parse(this.currentContract.scripthash);
        // let appcall = this.currentContract.scripthash.hexToBytes();
        sb.EmitAppCall(appcall);
        return sb.ToArray();
    }


    async test()
    {
        // let appcall = Neo.Uint160.parse(this.conactHash);
        let appCall = Neo.Uint160.parse("0x17f26389efc8fe0d9f2116f8ea474202b8d78280");
        let sb = new ThinNeo.ScriptBuilder()
        sb.EmitParamJson([
            '(str)test',
            []
        ])
        sb.EmitAppCall(appCall);
        let data = tools.contract.buildScript_random(appCall, "test", []);
        let txhex = await tools.contract.buildInvokeTransData_attributes(data);
        // let txhex = await tools.contract.buildInvokeTransData_attributes(sb.ToArray());
        console.log(txhex);

        let result = await tools.wwwtool.setTxCallContract(LoginInfo.getCurrentAddress(), txhex.toHexString());
        console.log(result);

    }
}