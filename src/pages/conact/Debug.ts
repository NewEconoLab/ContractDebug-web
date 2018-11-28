import * as CodeMirror from 'codemirror'
import 'codemirror/mode/clike/clike'
import 'codemirror/addon/hint/show-hint'
import 'codemirror/addon/hint/sql-hint'
import Component from "vue-class-component";
import Vue from "vue";
import { tools } from "../../tools/importpack";
import { LoginInfo } from "../../tools/entity";
import { TreeView, TreeViewItems } from '../TreeViewItem';
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
    result: string = "";
    conactHash: string = "";
    avmhex: Uint8Array;
    cscode: string = "";
    CalcStack = {};
    AltStack = {};
    //需要使用simVM来模拟执行一下，得到详细的情报
    simVM: ThinNeo.Debug.SimVM;//
    stackarr:
        {
            script: ThinNeo.SmartContract.Debug.LogScript, op: ThinNeo.SmartContract.Debug.LogOp
        }[] = [];
    mounted()
    {
        this.result = "";
        this.conactHash = "";
        const host = document.getElementById("csharp-code") as HTMLTextAreaElement;
        const avm = document.getElementById("avm-code") as HTMLTextAreaElement;
        const option: CodeMirror.EditorConfiguration = {}
        option.lineNumbers = true;
        option.mode = "text/x-csharp";
        option.dragDrop = true;
        option.theme = "monokai";
        this.cEditor = CodeMirror.fromTextArea(host, option);
        this.fulllogEditor = CodeMirror.fromTextArea(avm, option);
        this.initHashList();

        let div = document.getElementById("valuetool") as HTMLDivElement;
        let tree = new TreeViewItems(div)
        let view = new TreeView("test")
        let view1 = new TreeView("test1")
        let view2 = new TreeView("test2")
        let view3 = new TreeView("test3")
        view.addChildren(view1)
        view1.addChildren(view2)
        view.addChildren(view3);
        tree.showTree(tree.ul, view);
    }

    async initHashList()
    {
        let result = await tools.wwwtool.getTxCallContract(LoginInfo.getCurrentAddress());
        this.txlist = result;
    }

    async initDebugInfo()
    {
        const result = await tools.wwwtool.getDumpInfoByTxid(this.txid);
        this.dumpinfo = result[ 'dimpInfo' ];
        let lzma: nid.LZMA = new nid.LZMA();
        console.log("new LZMA");
        var srcbytes = this.dumpinfo.hexToBytes();
        var unpackjsonstr: string = "";
        var unpackjson: {} = null;
        try
        {
            var destbytes = lzma.decode(srcbytes);
            console.log("decode got: srcsize=" + srcbytes.length + " destsize=" + destbytes.length);
            unpackjsonstr = ThinNeo.Helper.Bytes2String(destbytes);
            console.log("jsonstr =" + unpackjsonstr);
            unpackjson = JSON.parse(unpackjsonstr);
            console.log("convert to json . log to console");

        }
        catch (e)
        {
            console.log("decode error." + e);
            return;
        }

        if (unpackjson != null)
        {
            let fulllog = ThinNeo.SmartContract.Debug.DumpInfo.FromJson(unpackjson);
            this.simVM = new ThinNeo.Debug.SimVM();
            this.simVM.Execute(fulllog);
            console.log("read fulllog struct.");
            console.log("run state:" + fulllog.states);
            for (var i = 0; i < fulllog.states.length; i++)
            {
                console.log("--->" + ThinNeo.SmartContract.Debug.VMState[ fulllog.states[ i ] ]);
            }
            this.dumpstr = "";
            this.dumpScript(fulllog.script, 1);

            this.fulllogEditor.on("cursorActivity", (res) =>
            {
                this.debug()
            })
        }
    }

    async debug()
    {
        let codeline = this.fulllogEditor.getCursor().line
        if (this.stackarr[ codeline ])
        {
            let script = this.stackarr[ codeline ].script;
            let op = this.stackarr[ codeline ].op;
            this.showStack(op);
            await this.initCode(script.hash);
            if (this.addr)
            {
                var line = this.addr.GetLineBack(op.addr);//尽量倒着取到对应的代码
                this.cEditor.setCursor(line);
                this.cEditor.addLineClass(line, "background", "cursor-line-highight");
            }
        }
    }
    showStack(op: ThinNeo.SmartContract.Debug.LogOp)
    {
        let stateid = this.simVM.mapState[ op.guid ];
        let state = this.simVM.stateClone[ stateid ];
        this.CalcStack = state.CalcStack[ 'list' ];
        this.AltStack = state.AltStack[ 'list' ];
        console.log(this.CalcStack);
        console.log(this.AltStack);
    }

    calcStackShow(obj)
    {
        if (obj[ "type" ] === "Array")
        {

        }
        else
        {
            this.CalcStack[ obj[ "type" ] ] = obj[ "strvalue" ]
        }
    }

    async initCode(hash: string): Promise<void>
    {
        try
        {
            const coderesult = await tools.wwwtool.getContractCodeByHash(hash, LoginInfo.getCurrentAddress());
            if (coderesult)
            {
                this.oplist = ThinNeo.Compiler.Avm2Asm.Trans(coderesult.avm.hexToBytes());
                this.addr = ThinNeo.Debug.Helper.AddrMap.FromJson(JSON.parse(coderesult.map));
                this.cscode = coderesult.cs;
                this.cEditor.setValue(coderesult.cs);
            }
        } catch (error)
        {
            this.addr = undefined;
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
                console.log("----------------------------" + script.ops[ i ].GetHeader())
                console.log(script.ops[ i ]);
                console.log(script.ops[ i ].param);
                console.log(script.ops[ i ].param.toHexString());
                let arr = [];
                //预先获得所有需要加载的 avm等信息
                console.log(script.ops[ i ].subScript.GetAllScriptName(arr));
                console.log(arr);
            }
            this.stackarr.push({ script: script, op: script.ops[ i ] });
            if (script.ops[ i ].subScript != null)
                this.dumpScript(script.ops[ i ].subScript, level + 1);
        }
        if (level === 1)
        {
            this.fulllogEditor.setValue(this.dumpstr);
        }
    }
}