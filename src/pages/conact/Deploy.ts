/// <reference path="../../tools/editor.api.d.ts"/>
import Component from "vue-class-component";
import Vue from "vue";
import { tools } from "../../tools/importpack";
import { LoginInfo } from "../../tools/entity";
import { ContractDeployInfo } from 'entity/ContractEntitys';
import { services } from "../../services/index";
import { TaskType, ConfirmType } from "../../entity/TaskEntitys";
@Component({
    components: {}
})
export default class Deploy extends Vue
{
    description: string = "";
    email: string = "";
    author: string = "";
    version: string = "";
    name: string = "";
    checked: any[] = [];
    cEditor: CodeMirror.EditorFromTextArea;
    result: string = "";
    conactHash: string = "";
    download_name: string = "";
    download_href: string = "";
    hashList: string[] = [];
    avmhex: Uint8Array;
    isCall = false;
    isStore = false;
    feePay = false;
    amount: number;
    inputhash = "";
    inputLoadHash = false;
    opneToast: Function;
    mounted()
    {
        this.initConactInfo();
        this.initCodeEditor();
        this.opneToast = this.$refs[ "toast" ][ "isShow" ];
    }

    initConactInfo()
    {
        let hashstore = sessionStorage.getItem("neo-contract-hash");
        if (hashstore)
        {
            // this.conactHash=hashstore;
            this.selectedHash(hashstore);
        }
    }

    initCodeEditor()
    {
        let codestore = sessionStorage.getItem("neo-contract-code");
        var codeContent = document.getElementById("code-content") as HTMLDivElement;
        var width = codeContent.offsetWidth;
        var height = codeContent.offsetHeight;
        const host = document.getElementById("csharp-code") as HTMLTextAreaElement;
        const option: CodeMirror.EditorConfiguration = {}
        option.lineNumbers = true;
        option.mode = "text/x-csharp";
        option.dragDrop = true;
        option.theme = "monokai";
        // option.readOnly = true;
        this.cEditor = CodeMirror.fromTextArea(host, option);
        this.loadHashList();
        this.cEditor.setValue(codestore ? codestore : "");
        this.cEditor.setSize("auto", height);
        this.cEditor.on("change", function (Editor, change)
        {
            // 事件触发后执行事件
            sessionStorage.setItem("neo-contract-code", Editor.getValue())
        });
    }

    async compile()
    {
        console.log("进入了 compile 方法");

        const code = this.cEditor.getValue();
        console.log(code);

        const result = await tools.wwwtool.compileContractFile(
            LoginInfo.getCurrentAddress(),
            code
        );
        this.result = result.message;
        this.conactHash = result.hash;

        const coderesult = await tools.wwwtool.getContractCodeByHash(this.conactHash, LoginInfo.getCurrentAddress());
        const avm: string = coderesult.avm;
        this.avmhex = avm.hexToBytes();
        var blob = new Blob([ avm.hexToBytes() ]);
        this.download_href = URL.createObjectURL(blob);
        this.download_name = this.conactHash + ".avm";
    }

    /**
     * 发布合约
     */
    async deploy()
    {
        const amount = (this.isCall ? 500 : 0) + (this.isStore ? 400 : 0) + 90;
        const num =
            (this.isStore ? 1 : 0) | (this.isCall ? 2 : 0) | (this.feePay ? 4 : 0);
        console.log(num);

        const result = await tools.contract.deployContract(
            this.description,
            this.email,
            this.author,
            this.version,
            this.name,
            new Neo.BigInteger(num),
            this.avmhex,
            amount
        );
        services.taskManager.addTask(TaskType.deploy, ConfirmType.tranfer, result.txid, { contract: this.conactHash });
        if (result.sendrawtransactionresult)
        {
            const res = await tools.wwwtool.storageContractFile(
                LoginInfo.getCurrentAddress(),
                this.conactHash,
                this.name,
                this.version,
                this.author,
                this.email,
                this.description,
                this.feePay ? 1 : 0,
                this.isStore ? 1 : 0,
                this.isCall ? 1 : 0,
                result.txid
            )
            console.log(res);
            this.opneToast('success', "合约发布成功", 4000);
        } else
        {
            this.opneToast('error', "合约发布失败", 4000);
        }
    }

    /**
     * 复制hash
     */
    copyHash()
    {
        // 复制剪切板
        var target = document.getElementById("hash-input") as HTMLInputElement;
        target.select();
        document.execCommand("copy");
        console.log();
    }

    async loadHashList()
    {
        this.hashList = await tools.wwwtool.getContractRemarkByAddress(LoginInfo.getCurrentAddress())
    }

    async selectedHash(scripthash: string)
    {
        if (scripthash === 'new')
        {
            this.cEditor.setValue("");
            this.conactHash = "";
            sessionStorage.setItem("neo-contract-hash", "")
            return;
        }
        if (this.inputLoadHash || this.inputhash)
        {
            this.inputLoadHash = false;
            this.inputhash = "";
        }
        this.conactHash = scripthash;
        const coderesult = await tools.wwwtool.getContractCodeByHash(this.conactHash, "");
        const conactinfo: ContractDeployInfo = await tools.wwwtool.getContractDeployInfoByHash(this.conactHash);
        if (coderesult)
        {
            const avm: string = coderesult.avm;
            this.avmhex = avm.hexToBytes();
            var blob = new Blob([ avm.hexToBytes() ]);
            this.download_href = URL.createObjectURL(blob);
            this.download_name = this.conactHash + ".avm";
            this.cEditor.setValue(coderesult.cs);
        }

        if (conactinfo)
        {
            this.name = conactinfo.name;
            this.description = conactinfo.desc
            this.author = conactinfo.author;
            this.email = conactinfo.email;
            this.version = conactinfo.version;
            this.isCall = conactinfo.dynamicCall == 0 ? false : true;
            this.isStore = conactinfo.createStorage == 0 ? false : true;
            this.feePay = conactinfo.acceptablePayment == 0 ? false : true;

        }


        // this.cEditor= 
    }

}