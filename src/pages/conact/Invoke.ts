import 'codemirror/mode/clike/clike'
import 'codemirror/addon/hint/show-hint'
import 'codemirror/addon/hint/sql-hint'
import Component from "vue-class-component";
import Vue from "vue";
import { tools } from '../../tools/importpack';
import { LoginInfo } from '../../tools/entity';
@Component({
    components: {}
})
export default class Invoke extends Vue
{
    currentContract: { name: string, scripthash: string } = { name: "", scripthash: "" };
    inputContract: string = "";
    contractList: { name: string, scripthash: string }[] = [];
    openSelect: boolean = false;
    mounted()
    {
        this.initContractList();
    }
    async initContractList()
    {
        this.contractList = await tools.wwwtool.getContractRemarkByAddress(LoginInfo.getCurrentAddress())
    }

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
}