/// <reference path="../../tools/editor.api.d.ts"/>
import * as CodeMirror from 'codemirror'
import 'codemirror/mode/clike/clike'
import 'codemirror/addon/hint/show-hint'
import 'codemirror/addon/hint/sql-hint'
import Component from "vue-class-component";
import Vue from "vue";
import { tools } from "../../tools/importpack";
import { LoginInfo } from "../../tools/entity";
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
    avmhex: Uint8Array;
    isCall = false;
    isStore = false;
    feePay = false;
    amount: number;
    mounted()
    {
        this.result = "";
        this.conactHash = "";
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
        // this.cEditor.setValue("test(){\n log()}ddddd\t\t\tdddddddddddddd");
        // this.cEditor.setSize("auto", height);
        // this.cEditor.on("change", function() {
        //事件触发后执行事件
        //   alert("change");
        // });
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
        this.result = "执行成功";
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
                this.isCall ? 1 : 0
            )
        }
        console.log(result);
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

    async test()
    {
        let appcall = Neo.Uint160.parse(this.conactHash);
        let data = tools.contract.buildScript_random(appcall, "test", []);
        let res = await tools.contract.contractInvokeTrans_attributes(data);

        console.log(res);

    }
}