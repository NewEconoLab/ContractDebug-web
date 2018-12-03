import Component from "vue-class-component";
import Vue from "vue";
import { tools } from '../../tools/importpack';
import { LoginInfo } from '../../tools/entity';
import { ContractResult } from '../../entity/ContractEntitys';
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
        this.editor.on("change", function (Editor, change)
        {
            // 事件触发后执行事件
            sessionStorage.setItem("invoke-json-code", Editor.getValue())
        });
        this.editor.setSize("auto", "245px");
        option.readOnly = true;
        this.resultEditor = CodeMirror.fromTextArea(host2, option);
        this.resultEditor.setSize("auto", "219.5px");
        this.opneToast = this.$refs[ "toast" ][ "isShow" ];
    }
    async initContractList()
    {
        this.contractList = await tools.wwwtool.getContractRemarkByAddress(LoginInfo.getCurrentAddress())
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
            this.currentContract = { name: "", scripthash: this.inputContract };
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
        let appcall = Neo.Uint160.parse("0x17f26389efc8fe0d9f2116f8ea474202b8d78280");
        sb.EmitAppCall(appcall);
        return sb.ToArray();
    }
}