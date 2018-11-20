import Vue from 'vue'
import Router from 'vue-router'
import Wallet from '../layouts/wallet.vue'
Vue.use(Router)

/**
 * 使用 require 实现按需加载
 */
declare var require: (filename, resolve) => any;
const Login = resolve => require([ '../pages/login.vue' ], resolve);
const Deploy = resolve => require([ '../pages/conact/Deploy.vue' ], resolve);

export default new Router({
    mode: 'hash',
    routes: [
        { path: '/', redirect: '/login' },
        {
            path: '/login', component: Login, name: "login"
        },
        {
            path: '/', component: Wallet, name: "index",
            children: [
                { path: 'deploy', component: Deploy, name: 'deploy' },
            ]
        },
        { path: '*', redirect: '/login' },
    ]
});