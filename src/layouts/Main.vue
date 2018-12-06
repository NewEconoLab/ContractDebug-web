<template>
  <div>
    <nav class="main navbar navbar-nel navbar-fixed-top">
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#navbar"
          aria-expanded="false"
          aria-controls="navbar"
        >
          <span class="sr-only">{{$t('navbar.toggle')}}</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <div class="logo"></div>
        <ul class="nav navbar-nav navbar-left">
          <li>
            <router-link to="deploy">合约部署</router-link>
          </li>
          <li>
            <router-link to="invoke">调用合约</router-link>
          </li>
          <li>
            <router-link to="debug">合约调试</router-link>
          </li>
          <li>
            <a href="https://bbs.neldev.net/" target="_blank">NEL开发者论坛</a>
          </li>
          <li>
            <a href="https://scan.nel.group/test" target="_blank">{{$t('navbar.explorer')}}</a>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li class="dropdown">
            <a
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="text" id="network">{{$t('navbar.testnet')}}</span>
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu dropdown-nel">
              <li id="testnet-btn" class="active">
                <a id="testa">{{$t('navbar.testnet')}}</a>
              </li>
              <li id="mainnet-btn">
                <a
                  target="_blank"
                  href="https://wallet.nel.group"
                  id="maina"
                >{{$t('navbar.mainnet')}}</a>
              </li>
            </ul>
          </li>
          <li v-if="loginshow">
            <router-link to="login">{{$t('navbar.logout')}}</router-link>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li class="dropdown">
            <a
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="text">{{currentLanguage}}</span>
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu dropdown-nel">
              <li id="testnet-btn" :class="currentLanguage=='English'?'active':''">
                <a @click="cutLanguage(1)">English</a>
              </li>
              <li id="mainnet-btn" :class="currentLanguage!='English'?'active':''">
                <a @click="cutLanguage(2)">中文</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!--/.container -->
    </nav>
    <div class="main-content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import VLink from "../components/VLink.vue";
import Component from "vue-class-component";
import Vue from "vue";
import { tools } from "../tools/importpack";
@Component({
  components: {
    VLink
  }
})
export default class Main extends Vue {
  loginshow: boolean = false;
  currentLanguage: string =
    localStorage.getItem("language") == "cn" ? "中文" : "English";
  mounted() {
    if (this.$root["currentRoute"] == "") {
      this.$root["currentRoute"] = "#login";
    }
    if (this.$root["currentRoute"] == "#login") {
      document.body.classList.add("login-body");
      this.loginshow = false;
    } else {
      document.body.classList.remove("login-body");
      this.loginshow = true;
    }
  }

  cutLanguage(lang: number) {
    switch (lang) {
      case 1:
        this.currentLanguage = "English";
        localStorage.setItem("language", "en");
        this.$i18n.locale = "en";
        break;
      case 2:
        this.currentLanguage = "中文";
        localStorage.setItem("language", "cn");
        this.$i18n.locale = "cn";
        break;
      default:
        break;
    }
  }
}
</script>

<style>
.active-nel {
  border-bottom: 4px solid #ffffff;
}
.main-content {
  margin: 0 auto;
  height: 100%;
}
.main {
  padding-left: 50px;
  padding-right: 50px;
}
</style>