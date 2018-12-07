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
    cEditor: CodeMirror.EditorFromTextArea;
    fulllogEditor: CodeMirror.EditorFromTextArea;
    addr: ThinNeo.Debug.Helper.AddrMap;
    oplist: ThinNeo.Compiler.Op[] = [];
    CalcStack = {};
    AltStack = {};
    contractFiles: { [ hash: string ]: { cs: string, avm: string, map: string } } = {};
    //需要使用simVM来模拟执行一下，得到详细的情报
    simVM: ThinNeo.Debug.SimVM;//
    stackarr:
        {
            script: ThinNeo.SmartContract.Debug.LogScript, op: ThinNeo.SmartContract.Debug.LogOp
        }[] = [];
    mounted()
    {
        const host = document.getElementById("csharp-code") as HTMLTextAreaElement;
        const avm = document.getElementById("avm-code") as HTMLTextAreaElement;
        const option: CodeMirror.EditorConfiguration = {}
        option.lineNumbers = true;
        option.mode = "text/x-csharp";
        option.dragDrop = true;
        option.readOnly = true;
        option.theme = "monokai";
        this.cEditor = CodeMirror.fromTextArea(host, option);
        this.fulllogEditor = CodeMirror.fromTextArea(avm, option);
        this.fulllogEditor.setSize("auto", "100%")
        this.cEditor.setSize("auto", "100%")
        this.initHashList();
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
    }

    async initDebugInfo()
    {
        const result = await tools.wwwtool.getDumpInfoByTxid(this.txid);
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
            // console.log("read fulllog struct.");
            // console.log("run state:" + dumpinfo.states);
            for (var i = 0; i < dumpinfo.states.length; i++)
            {
                // console.log("--->" + ThinNeo.SmartContract.Debug.VMState[ dumpinfo.states[ i ] ]);
            }
            this.dumpstr = "";

            let arr = [];
            //预先获得所有需要加载的 avm等信息
            // console.log(dumpinfo.script.GetAllScriptName(arr));

            // console.log(arr);
            this.dumpScript(this.simVM.regenScript, 1);

            this.fulllogEditor.on("cursorActivity", (res) =>
            {
                this.debug()
            })
        }
    }

    debug()
    {
        let codeline = this.fulllogEditor.getCursor().line
        if (this.stackarr[ codeline ])
        {
            let script = this.stackarr[ codeline ].script;
            let op = this.stackarr[ codeline ].op;
            this.showCode(script.hash);
            this.showStack(op);
            // console.log("script hash : " + script.hash);

            if (this.contractFiles[ script.hash ] && this.addr)
            {
                var line = this.addr.GetLineBack(op.addr);//尽量倒着取到对应的代码
                this.cEditor.setCursor(line);
                this.cEditor.addLineClass(line, "background", "cursor-line-highight");
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
            else
            {
                let view = new TreeView(obj[ "type" ], obj[ "strvalue" ])
                tree.addChildren(view);
            }
        }
    }

    showCode(hash: string)
    {
        try
        {
            const coderesult = this.contractFiles[ hash ];
            if (coderesult)
            {
                this.oplist = ThinNeo.Compiler.Avm2Asm.Trans(coderesult.avm.hexToBytes());
                this.addr = ThinNeo.Debug.Helper.AddrMap.FromJson(JSON.parse(coderesult.map));
                this.cEditor.setValue(coderesult.cs);
            }
            else
            {
                this.cEditor.setValue("");
            }
        } catch (error)
        {
            this.addr = undefined;
        }
    }

    async initCode(hasharr: string[])
    {
        for (const hash of hasharr)
        {
            const cs = await tools.wwwtool.readOssFile(hash, "cs", false);
            const avm = await tools.wwwtool.readOssFile(hash, "avm", false);
            const map = await tools.wwwtool.readOssFile(hash, "map.json", false);
            this.contractFiles[ hash ] = {
                cs, avm, map
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
                console.log(script.ops[ i ].subScript.GetAllScriptName(arr));
                console.log(arr);
                this.initCode(arr);
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