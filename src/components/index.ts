import Hint from './hint.vue';
import Selected from './Selected.vue';
import Spinner from './Spinner.vue';
import Toast from './toast.vue';
import Valert from './Valert.vue';
import Vlink from './VLink.vue';
import Notify from './Notify.vue';
import Panel from './Panel.vue';
import PTitle from './PTitle.vue';
import PFoot from './PFoot.vue';
import Button from './Button.vue';

export default {
    install(Vue)
    {
        Vue.component('v-hint', Hint);
        Vue.component('v-selected', Selected);
        Vue.component('spinner-wrap', Spinner);
        Vue.component('v-toast', Toast);
        Vue.component('v-alert', Valert);
        Vue.component('v-link', Vlink);
        Vue.component("v-notify", Notify);
        Vue.component("panel", Panel);
        Vue.component("p-title", PTitle);
        Vue.component("p-foot", PFoot);
        Vue.component("v-btn", Button);
    }
}