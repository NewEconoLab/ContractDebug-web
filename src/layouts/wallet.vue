<template>
  <main-layout class="contract-debug">
    <taskbar-layout></taskbar-layout>
    <div class="wallet-content">
      <router-view class="router-view"></router-view>
    </div>
  </main-layout>
</template>

<script lang="ts" src="./wallet.ts">
</script>
<style>
.router-view {
  height: 100%;
}
.contract-debug {
  height: 100%;
}
.container {
  padding-left: 0px;
  padding-right: 0px;
}
.container #navbar {
  padding-left: 0px;
  padding-right: 0px;
}
.navbar {
  border: none;
}
.navbar-wallet {
  position: fixed;
  z-index: 10;
  width: 100%;
  padding-top: 51px;
  background-color: #454f60;
}
.navbar-wallet .navbar-collapse {
  padding-top: 5px;
}
.navbar-wallet a {
  font-size: 16px;
  color: #b2b2b2;
  line-height: 16px;
}
.navbar-wallet .active {
  color: #fff;
  background: #151a1e;
  border-radius: 5px 5px 0px 0px;
}
.navbar-wallet li {
  width: 180px;
  text-align: center;
}
.icon-png img {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
.wallet-content {
  padding-top: 185px;
  padding-left: 50px;
  padding-right: 50px;
  height: 97%;
}
@media screen and (max-width: 1199px) {
  .wallet-content {
    padding-top: 235px;
  }
}
.tranhistory-img {
  text-align: right;
  position: relative;
}
.tranhistory-img img {
  width: 16px;
  height: 20px;
  cursor: pointer;
}
.tranhistory-box {
  width: 16px;
  float: right;
}

.add-task {
  position: absolute;
  top: -10px;
  left: 10px;
  width: auto;
  padding: 0 5px 0 5px;
  height: 16px;
  border-radius: 33px;
  background: #fe5656;
  color: #fff;
  font-size: 12px;
  text-align: center;
  line-height: 16px;
}

.tranhistory-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
.tranhistory-listbox {
  background: #151a1e;
  /* padding: 25px 70px 25px 40px; */
  box-shadow: -2px 2px 10px 0 #1f1f1f;
  color: #fff;
  position: absolute;
  right: 0;
  top: 124px;
  z-index: 2;
  opacity: 1;
  width: 640px;
  max-height: 500px;
  overflow-y: auto;
}
.tranhistory-title {
  position: fixed;
  top: 124px;
  right: 0;
  width: 640px;
  padding: 25px 40px;
  border-bottom: 1px solid #454f60;
  background: #151a1e;
  box-shadow: -2px 2px 10px 0 #1f1f1f;
}
.tranhistory-tips {
  font-size: 14px;
  color: #c5c5c5;
  margin-top: 10px;
}
.tranhistory-close {
  position: absolute;
  top: 20px;
  right: 60px;
  width: 16px;
  height: 16px;
  cursor: pointer;
  z-index: 2;
}
.tranhistory-close img {
  width: 100%;
}
.tranhistory-list {
  padding-top: 100px;
}
.notask {
  padding: 118px 0 20px;
  text-align: center;
  font-size: 16px;
}
.th-onelist {
  padding: 30px;
  border-bottom: 1px solid #454f60;
  position: relative;
}
.th-onelist:last-child {
  border-bottom: none;
}
.btn-right {
  position: absolute;
  top: 50%;
  right: 30px;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
}

.th-type {
  margin-bottom: 15px;
}
.th-typename {
  display: inline-block;
  width: 140px;
  padding: 5px 0;
  border-radius: 68px;
  background: #454f60;
  text-align: center;
  font-size: 14px;
  margin-right: 40px;
}
.th-other {
  display: inline-block;
  font-size: 14px;
  vertical-align: middle;
}
a.green-text {
  color: #19e045;
}
.green-text {
  color: #19e045;
}
.red-text {
  font-size: 12px;
  color: #ff6a6a;
  position: relative;
  left: 46px;
}
.th-number a {
  display: block;
  font-size: 14px;
  padding-left: 30px;
}
.th-number img {
  width: 15px;
  margin-left: 10px;
  margin-right: 10px;
}
.th-block-txid {
  font-size: 12px;
}
.th-block-txid .th-block {
  border-right: 1px solid #fff;
  padding-right: 10px;
  margin-right: 10px;
}
.th-block-txid .th-state {
  padding-left: 92px;
}
.th-txid a {
  font-size: 12px;
}
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  background-color: #f5f5f5;
}
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #bdbdbd;
}
/*滑块效果*/
::-webkit-scrollbar-thumb:hover {
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.4);
}
/*IE滚动条颜色*/
html {
  scrollbar-face-color: #bfbfbf; /*滚动条颜色*/
  scrollbar-highlight-color: #000;
  scrollbar-3dlight-color: #000;
  scrollbar-darkshadow-color: #000;
  scrollbar-shadow-color: #adadad; /*滑块边色*/
  scrollbar-arrow-color: rgba(0, 0, 0, 0.4); /*箭头颜色*/
  scrollbar-track-color: #eeeeee; /*背景颜色*/
}
</style>

