/// <reference path="../../tools/codemirror.d.ts" />
import Component from "vue-class-component";
import Vue from "vue";
import { tools } from "../../tools/importpack";
import { LoginInfo } from "../../tools/entity";
import { TreeView, TreeViewItems } from '../TreeViewItem';
import { services } from "../../services/index";
@Component({
    components: {}
})
export default class Debug extends Vue
{

    txlist: { txid: string, createTime: number }[] = [];
    txid: string = "";
    dumpinfo: string = "";
    dumpstr: string = "";
    active: number = 0;
    cEditor: CodeMirror.EditorFromTextArea;
    notify: CodeMirror.EditorFromTextArea;
    fulllogEditor: CodeMirror.EditorFromTextArea;
    addr: ThinNeo.Debug.Helper.AddrMap;
    oplist: ThinNeo.Compiler.Op[] = [];
    CalcStack = {};
    AltStack = {};
    currentCodeHash: string = "";
    currentHighlightLine: number = 0;
    currentHighlightLine_avm: number = 0;
    contractFiles: { [ hash: string ]: { cs: string, avm: string, map: string } } = {};
    opneToast: Function;
    //需要使用simVM来模拟执行一下，得到详细的情报
    simVM: ThinNeo.Debug.SimVM;//
    stackarr:
        {
            script: ThinNeo.SmartContract.Debug.LogScript, op: ThinNeo.SmartContract.Debug.LogOp
        }[] = [];
    mounted()
    {
        this.opneToast = this.$refs[ "toast" ][ "isShow" ];
        const host = document.getElementById("csharp-code") as HTMLTextAreaElement;
        const avm = document.getElementById("avm-code") as HTMLTextAreaElement;
        const option: CodeMirror.EditorConfiguration = {}
        option.lineNumbers = true;
        option.mode = "text/x-csharp";
        option.dragDrop = true;
        option.readOnly = true;
        option.theme = "monokai";
        this.fulllogEditor = CodeMirror.fromTextArea(avm, option);
        this.fulllogEditor.setSize("auto", "100%")
        option.lineWrapping = true;
        this.cEditor = CodeMirror.fromTextArea(host, option);
        this.cEditor.setSize("auto", "100%")
        this.initHashList();
        // option.lineWrapping = true;
        option.lineWrapping = false;
        option.mode = "application/ld+json";
        this.notify = CodeMirror.fromTextArea(document.getElementById("notify-code") as HTMLTextAreaElement, option)
        this.notify.setSize("auto", "100%")

        if (services.routerParam[ "debug" ])
        {
            this.txid = services.routerParam[ "debug" ].txid;
            this.initDebugInfo();
            services.routerParam.debug = null;
        }
    }

    async initHashList()
    {
        let result = await tools.wwwtool.getTxCallContract(LoginInfo.getCurrentAddress());
        this.txlist = result;
        this.txlist = this.txlist.map(tx =>
        {
            tx[ "txidstr" ] = [
                tx.txid.substring(0, 4),
                tx.txid.substring(tx.txid.length - 4)
            ].join("...");
            return tx;
        })
        this.txlist = this.txlist.sort((a, b) =>
        {
            return b.createTime - a.createTime;
        })
    }

    timeShow(time: number)
    {
        return tools.timetool.getTime(time)
    }

    async initDebugInfo()
    {
        const result = await tools.wwwtool.getDumpInfoByTxid(this.txid);
        if (!result)
        {
            this.opneToast('error', "交易未收录", 4000);
            return false;
        }
        // await this.showNotify();
        this.dumpinfo = result[ 'dimpInfo' ];
        var lzma: nid.LZMA = new nid.LZMA();
        nid.utils.MEMORY.reset();
        var srcbytes = this.dumpinfo.hexToBytes();
        var unpackjsonstr: string = "";
        var unpackjson: {} = null;
        try
        {
            var destbytes = lzma.decode(srcbytes);
            // console.log("decode got: srcsize=" + srcbytes.length + " destsize=" + destbytes.length);
            unpackjsonstr = ThinNeo.Helper.Bytes2String(destbytes);
            // console.log("jsonstr =" + unpackjsonstr);
            unpackjson = JSON.parse(unpackjsonstr);
            // console.log("convert to json . log to console");
        }
        catch (e)
        {
            console.log("decode error." + e);
            return;
        }

        if (unpackjson != null)
        {
            let dumpinfo = ThinNeo.SmartContract.Debug.DumpInfo.FromJson(unpackjson);
            this.simVM = new ThinNeo.Debug.SimVM();
            this.simVM.Execute(dumpinfo);
            this.dumpstr = "";
            //预先获得所有需要加载的 avm等信息
            this.showCareInfo(this.simVM.careinfo)
            // this.careInfo.setValue(careInfoStr)
            this.stackarr = [];
            this.dumpScript(this.simVM.regenScript, 1);

            this.fulllogEditor.on("cursorActivity", (res) =>
            {
                this.debug()
            })
        }
    }

    async showNotify()
    {
        this.active = 2;
        let result = await tools.wwwtool.getNotify(this.txid)
        this.notify.setValue(JSON.stringify(result));
        var totalLines = this.notify.lineCount();
        this.notify.autoFormatRange({ line: 0, ch: 0 }, { line: totalLines });
    }

    showCareInfo(careArray: Array<ThinNeo.Debug.CareItem>)
    {
        let div = document.getElementById("careInfo-msg") as HTMLDivElement;
        let div2 = document.getElementById("valuetool") as HTMLDivElement;
        while (div.hasChildNodes())
        {
            div.removeChild(div.firstChild);
        }
        let tree = new TreeView("");
        for (const careInfo of careArray)
        {
            let careview = new TreeView(careInfo.name)
            tree.addChildren(careview);
            if (!careInfo.item)
            {
                careview.title = careInfo.name + "()";
            }
            else if (careInfo.item.type == "Array")
            {
                this.calcStackShow(careInfo.item.subItems, careview);
            } else
            {
                let chird = new TreeView(careInfo.item.type, careInfo.item.strvalue)
                tree.addChildren(chird);
            }
        }
        let view = new TreeViewItems(div);
        view.showTree(view.ul, tree, div2);
    }

    debug()
    {
        let codeline = this.fulllogEditor.getCursor().line;
        this.fulllogEditor.removeLineClass(this.currentHighlightLine_avm, "background", "cursor-line-highight")
        this.fulllogEditor.addLineClass(codeline, "background", "cursor-line-highight");
        this.currentHighlightLine_avm = codeline;
        if (this.stackarr[ codeline ])
        {
            let script = this.stackarr[ codeline ].script;
            let op = this.stackarr[ codeline ].op;
            this.showCode(script.hash);
            this.showStack(op);
            // console.log("script hash : " + script.hash);
            this.cEditor.removeLineClass(this.currentHighlightLine, "background", "cursor-line-highight")
            if (this.contractFiles[ script.hash ] && this.addr)
            {
                // console.log("op");
                // console.log(op);

                // console.log("addr----------" + op.addr);
                var line = this.addr.GetLineBack(op.addr);//尽量倒着取到对应的代码 codemirro 塞入的时候多往下了
                // console.log("line==============" + line);
                // console.log(line);
                if (line >= 0)
                {
                    this.currentHighlightLine = line - 1;
                    this.cEditor.setCursor(this.currentHighlightLine);
                    this.cEditor.addLineClass(this.currentHighlightLine, "background", "cursor-line-highight");
                }
            }
        }
    }
    showStack(op: ThinNeo.SmartContract.Debug.LogOp)
    {
        let div = document.getElementById("calcstack-content") as HTMLDivElement;
        let div1 = document.getElementById("altstack-content") as HTMLDivElement;
        let div2 = document.getElementById("valuetool") as HTMLDivElement;
        while (div.hasChildNodes()) //当div下还存在子节点时 循环继续
        {
            div.removeChild(div.firstChild);
        }
        while (div1.hasChildNodes())
        {
            div1.removeChild(div1.firstChild);
        }
        let stateid = this.simVM.mapState[ op.guid ];
        let state = this.simVM.stateClone[ stateid ];
        if (state)
        {
            this.CalcStack = state.CalcStack[ 'list' ];
            this.AltStack = state.AltStack[ 'list' ];
            let tree = new TreeView("");
            let tree1 = new TreeView("");

            let view = new TreeViewItems(div)
            let view1 = new TreeViewItems(div1)

            this.calcStackShow(state.CalcStack[ 'list' ], tree);
            this.calcStackShow(state.AltStack[ "list" ], tree1)
            view.showTree(view.ul, tree, div2);
            view1.showTree(view1.ul, tree1, div2);

        } else
        {
            // console.log("state is undefined");
        }
    }

    calcStackShow(item, tree: TreeView)
    {
        if (item)
        {
            for (const obj of item)
            {

                if (obj[ "type" ] === "Array")
                {
                    let view = new TreeView("Array");
                    tree.addChildren(view);
                    if (obj[ "subItems" ].length > 0)
                    {
                        this.calcStackShow(obj[ "subItems" ], view)
                    } else
                    {
                        view.value = "[]"
                    }
                }
                else if (obj[ "type" ])
                {
                    let view = new TreeView(obj[ "type" ], obj[ "strvalue" ])
                    tree.addChildren(view);
                }
            }
        }
    }

    showCode(hash: string)
    {
        try
        {
            let code = this.cEditor.getValue();
            if (this.currentCodeHash != hash || !code || !this.addr)
            {
                const coderesult = this.contractFiles[ hash ];
                if (coderesult)
                {
                    this.oplist = ThinNeo.Compiler.Avm2Asm.Trans(coderesult.avm.hexToBytes());
                    // console.log(JSON.parse(coderesult.map));

                    this.addr = ThinNeo.Debug.Helper.AddrMap.FromJson(JSON.parse(coderesult.map));
                    this.cEditor.setValue(coderesult.cs);
                    this.currentCodeHash = hash;
                }
                else
                {
                    this.cEditor.setValue("");
                    this.currentCodeHash = "";
                }

            }
        }
        catch (error)
        {
            this.cEditor.setValue("");
            this.addr = undefined;
        }
    }

    async initCode(hasharr: string[])
    {
        this.cEditor.setValue("");
        for (const hash of hasharr)
        {
            try
            {
                const cs = await tools.wwwtool.readOssFile(hash, "cs", false);
                const avm = await tools.wwwtool.readOssFile(hash, "avm", false);
                const map = await tools.wwwtool.readOssFile(hash, "map.json", false);
                this.contractFiles[ hash ] = {
                    cs, avm, map
                }
            } catch (error)
            {
                console.log(error);

            }
        }

    }

    addAvmStr(str: string)
    {
        if (this.dumpstr)
        {
            this.dumpstr += "\n" + str;
        } else
        {
            this.dumpstr += str;
        }
    }
    dumpScript(script: ThinNeo.SmartContract.Debug.LogScript, level: number)
    {
        var space = "";
        for (var i = 0; i < level; i++)
            space += "\t";
        if (level > 1)
            this.addAvmStr(space + "hash : " + script.hash);
        else
            this.addAvmStr("hash : " + script.hash);
        this.stackarr.push(undefined);

        for (var i = 0; i < script.ops.length; i++)
        {
            this.addAvmStr(space + "op : " + script.ops[ i ].GetHeader());
            if (script.ops[ i ].GetHeader().includes("APPCALL"))
            {
                let arr = [];
                //预先获得所有需要加载的 avm等信息
                if (script.ops[ i ].subScript)
                {
                    script.ops[ i ].subScript.GetAllScriptName(arr)
                    this.initCode(arr);
                }
            }

            if (script.ops[ i ].subScript != null)
            {
                this.dumpScript(script.ops[ i ].subScript, level + 1);
            }
            this.stackarr.push({ script: script, op: script.ops[ i ] });
        }
        if (level === 1)
        {
            this.fulllogEditor.setValue(this.dumpstr);
        }
    }
}