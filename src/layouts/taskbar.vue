<template>
  <div class="navbar navbar-wallet">
    <div class="blockheight">
      <div class="main">
        <div class="balance">
          <span class="asset">GAS</span>
          <span class="amount">{{balance.toString()}}</span>
          <v-btn v-if="claimState==='3010'" @onclick="claimGas">索取500 GAS</v-btn>
          <v-btn v-else-if="claimState==='3011'" :type="'disable'">排队中</v-btn>
          <v-btn :type="'disable'" v-else-if="claimState==='3012'">已发放 GAS</v-btn>
          <v-btn :type="'disable'" v-else>Gas不足</v-btn>
          <v-hint>
            <div class="hint-img">
              <img src="../assets/explain.png" alt>
            </div>
            <div class="hint-content">
              <p>每个钱包每日可索取一次500gas，需要更多请在论坛留言索取。</p>
            </div>
          </v-hint>
        </div>
        <div class="task-btn">
          <span class="task-tab">
            <img src="../assets/address.png" alt>
            {{$t('transfer.title2')+"："}}
            <a :href="href" target="_blank">{{showaddr}}</a>
          </span>
          <span class="task-tab">
            <img src="../assets/height.png" alt>
            {{[$t('navbar.blockheight'),blockheight].join("：")}}
          </span>
          <span class="task-tab">
            <img src="../assets/Timing.png" alt>
            计时器：{{taskNumber}}
          </span>
          <v-btn>操作记录</v-btn>
        </div>
      </div>
    </div>
    <v-toast ref="toast"></v-toast>
  </div>
</template>
<style lang="less" scoped>
.main {
  display: flex;
  align-items: center;
  .balance {
    flex: 1;
    display: inline-block;
    .asset {
      vertical-align: middle;
      font-family: NotoSansHans-Medium;
      font-size: 20px;
      color: #ffffff;
      margin-right: 23px;
    }
    .amount {
      vertical-align: middle;
      font-family: NotoSansHans-Medium;
      font-size: 30px;
      color: #ffffff;
      margin-right: 23px;
    }
  }
  .task-btn {
    display: inline-block;
    .task-tab {
      vertical-align: middle;
      text-align: center;
      height: 30px;
      line-height: 30px;
      display: inline-block;
      font-family: NotoSansHans-Regular;
      font-size: 14px;
      color: #ffffff;
      margin-right: 50px;
      img {
        height: 20px;
      }
      a {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #2dde4f;
        line-height: 14px;
        &:hover {
          color: #62f57e;
        }
      }
    }
  }
}
</style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { TaskManager } from "../tools/taskmanager";
import { TaskType, Task, TaskFunction, LoginInfo } from "../tools/entity";
import Store from "../tools/StorageMap";
import { tools } from "../tools/importpack";
@Component({
  components: {}
})
export default class TaskBar extends Vue {
  currentAddress: string;
  showaddr: string;
  href: string;
  blockheight: number;
  showHistory: boolean;
  taskList: any;
  taskNumber: number;
  balance: Neo.Fixed8;
  claimState: string;
  constructor() {
    super();
    this.balance = Neo.Fixed8.Zero;
    this.blockheight = 0;
    this.showHistory = false;
    this.claimState = "3010";
    this.currentAddress = LoginInfo.getCurrentAddress();
    this.showaddr = [
      this.currentAddress.substring(0, 4),
      this.currentAddress.substring(this.currentAddress.length - 4)
    ].join("...");
    this.href =
      "https://scan.nel.group/#testnet/address/" + this.currentAddress;
    this.taskList = [];
    this.taskNumber = sessionStorage.getItem("newTaskNumber")
      ? parseInt(sessionStorage.getItem("newTaskNumber"))
      : 0;
  }
  mounted() {
    this.getHeight();
    TaskFunction.heightRefresh = this.getHeight;
    this.getBalance();
    this.initClaimState();
  }

  getHeight() {
    this.blockheight = Store.blockheight.select("height");
  }

  async getBalance() {
    const balance = await tools.wwwtool.getUtxoBalance(
      this.currentAddress,
      tools.coinTool.id_GAS
    );
    this.balance = Neo.Fixed8.fromNumber(balance);
  }

  async claimGas() {
    let openToast: any = this.$refs["toast"]["openToast"];
    try {
      const result = await tools.wwwtool.claimGas(this.currentAddress, 10);
      if (result ? result[0] : false) {
        this.claimState = result[0]["code"];
        openToast("success", "请求发送成功", 4000);
      } else {
        openToast("error", "gas不足领取失败，请在论坛留言索取。", 4000);
      }
    } catch (error) {
      openToast("error", "gas不足领取失败，请在论坛留言索取。", 4000);
      console.log(error);
    }
  }

  async initClaimState() {
    try {
      const result = await tools.wwwtool.hasClaimGas(this.currentAddress);
      this.claimState = result["code"];
      console.log(this.claimState);
    } catch (error) {
      console.log(error);
    }
  }
}
</script>
