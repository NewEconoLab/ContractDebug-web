import Vue from "vue";
import Component from "vue-class-component";
import MainLayout from "./Main.vue";
import TaskbarLayout from "./taskbar.vue";
import VLink from "../components/VLink.vue";
@Component({
    components: {
        VLink,
        MainLayout,
        TaskbarLayout
    }
})
export default class FeatureComponent extends Vue
{
    blockheight: number;
    showHistory: boolean;
    taskList: any;
    taskNumber: number;
    constructor()
    {
        super();
        this.blockheight = 0;
        this.showHistory = false;
        this.taskList = [];
        this.taskNumber = sessionStorage.getItem("newTaskNumber") ? parseInt(sessionStorage.getItem("newTaskNumber")) : 0;
    }

    mounted()
    {
        if (this.$router.currentRoute.fullPath.length <= 1)
        {
            this.$router.push("login");
        }
        let arr = sessionStorage.getItem("login-info-arr");
        if (!arr || arr.length == 0)
        {
            this.$router.push("login");
        }
    }

    isActive(page: string)
    {
        return this.$router.currentRoute.fullPath.includes(page);
    }

}