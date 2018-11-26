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
        this.cEditor = CodeMirror.fromTextArea(host, option);
    }
}