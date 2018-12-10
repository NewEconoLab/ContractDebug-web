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
    hashList: { name: string, scripthash: string }[] = [];
    hashListShow: boolean = false;
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
            this.selectedHash(hashstore);
        }
    }
    initCodeEditor()
    {
        let codestore = sessionStorage.getItem("neo-contract-code");
        const host = document.getElementById("csharp-code") as HTMLTextAreaElement;
        const option: CodeMirror.EditorConfiguration = {}
        option.lineNumbers = true;
        option.mode = "text/x-csharp";
        option.dragDrop = true;
        option.theme = "monokai";
        option.lineWrapping = true;
        // option.readOnly = true;
        this.cEditor = CodeMirror.fromTextArea(host, option);
        this.loadHashList();
        this.cEditor.setValue(codestore ? codestore : "");
        this.cEditor.setSize("auto", "100%");
        this.cEditor.on("change", function (Editor, change)
        {
            // 事件触发后执行事件
            sessionStorage.setItem("neo-contract-code", Editor.getValue())
        });
    }

    async compile()
    {
        this.description = "";
        this.email = "";
        this.author = "";
        this.version = "";
        this.name = "";

        const code = this.cEditor.getValue();
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
        sessionStorage.setItem("neo-contract-hash", this.conactHash);
    }

    /**
     * 发布合约
     */
    async deploy()
    {
        if (!this.name)
        {
            this.opneToast('error', "合约名称为必填部署项", 4000);
            return false;
        }
        const amount = (this.isCall ? 500 : 0) + (this.isStore ? 400 : 0) + 90;
        const num =
            (this.isStore ? 1 : 0) | (this.isCall ? 2 : 0) | (this.feePay ? 4 : 0);
        const res = await tools.wwwtool.getContractDeployInfoByHash(this.conactHash);
        if (res)
        {
            this.opneToast('success', "此合约已部属，无法重复部署", 4000);
        } else
        {
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
                this.opneToast('success', "合约发布成功", 4000);
            } else
            {
                this.opneToast('error', "合约发布失败", 4000);
            }
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
        this.hashList = this.hashList.map(hash =>
        {
            hash.name = hash.name.length > 20 ? hash.name.substr(0, 20) + "..." : hash.name;
            return hash;
        })
    }

    async initHashContract()
    {
        const coderesult = await tools.wwwtool.getContractCodeByHash(this.conactHash, LoginInfo.getCurrentAddress());
        const conactinfo: ContractDeployInfo = await tools.wwwtool.getContractDeployInfoByHash(this.conactHash);
        if (coderesult)
        {
            const avm: string = coderesult.avm;
            this.avmhex = avm.hexToBytes();
            var blob = new Blob([ avm.hexToBytes() ]);
            this.download_href = URL.createObjectURL(blob);
            this.download_name = this.conactHash + ".avm";
            this.cEditor.setValue(coderesult.cs);
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
            sessionStorage.setItem("neo-contract-hash", this.conactHash);
        }
        else
        {
            this.opneToast('error', "为找到该hash对应的合约", 4000);
        }
    }

    async selectedHash(scripthash: string)
    {
        if (scripthash === 'new')
        {
            this.cEditor.setValue("");
            this.conactHash = "";
            sessionStorage.setItem("neo-contract-hash", "")
            this.hashListShow = false;
            return;
        }
        if (this.inputLoadHash || this.inputhash)
        {
            this.inputLoadHash = false;
            this.inputhash = "";
        }
        this.conactHash = scripthash;
        try
        {
            if (/^[0-9a-fA-F]{40,40}$/.test(this.conactHash.replace("0x", "")))
            {
                this.opneToast('error', "请输入正确格式的hash", 4000);
                return;
            }
            const coderesult = await tools.wwwtool.getContractCodeByHash(this.conactHash, "");
            const conactinfo: ContractDeployInfo = await tools.wwwtool.getContractDeployInfoByHash(this.conactHash);
            if (coderesult.abi)
            {
                const avm: string = coderesult.avm;
                this.avmhex = avm.hexToBytes();
                var blob = new Blob([ avm.hexToBytes() ]);
                this.download_href = URL.createObjectURL(blob);
                this.download_name = this.conactHash + ".avm";
                this.cEditor.setValue(coderesult.cs);
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

                sessionStorage.setItem("neo-contract-hash", this.conactHash);
            }
            else
            {
                this.opneToast('error', "为找到该hash对应的合约", 4000);
            }

        } catch (error)
        {
            this.opneToast('error', "为找到该hash对应的合约", 4000);
        }
        this.hashListShow = false;
    }

}