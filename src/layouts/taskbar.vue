<template>
  <div class="navbar navbar-wallet">
    <div class="blockheight">
      <div class="main">
        <div class="balance">
          <span class="asset">GAS</span>
          <span class="amount">{{balance.toString()}}</span>
          <v-btn v-if="claimState==='3010'" @onclick="claimGas">索取500 GAS</v-btn>
          <v-btn
            v-else-if="claimState==='3011'||claimState==='3000'"
            :type="'disable'"
            @onclick="null"
          >排队中</v-btn>
          <v-btn :type="'disable'" v-else-if="claimState==='3012'||claimState==='3003'">已发放 GAS</v-btn>
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
          <!-- <span class="task-tab">
            <img src="../assets/Timing.png" alt>
            计时器：{{taskNumber}}
          </span>-->
          <v-btn @onclick="showHistory=true">操作记录</v-btn>
        </div>
        <div class="tranhistory-box">
          <div class="tranhistory-wrap" v-if="showHistory">
            <div class="tranhistory-listbox">
              <div class="tranhistory-title">
                <div class="tranhistory-close" @click="showHistory=!showHistory">
                  <img src="../../static/img/close.png" alt>
                </div>
                <span>{{$t('operation.title')}}</span>
                <div class="tranhistory-tips">{{$t('operation.tips')}}</div>
              </div>
              <div class="tranhistory-list">
                <div class="th-onelist" v-for="task in taskList" :key="task.txid">
                  <div>
                    <div class="th-type">
                      <div class="th-typename">{{task.taskType===2?"合约部署":"合约调用"}}</div>
                      <div class="th-other">
                        <div class="th-number">
                          <span>{{task.simpleTxid}}</span>
                        </div>
                      </div>
                    </div>
                    <div class="th-block-txid">
                      <span class="th-txid" style="padding-right:10px">{{task.timeStr}}</span>
                      <span class="th-state">
                        <span>状态：</span>
                        <span v-if="task.state==0" class>等待</span>
                        <span v-if="task.state==1" class="green-text">成功</span>
                        <span v-if="task.state==2" class="red-text">失败</span>
                      </span>
                    </div>
                  </div>
                  <div v-if="task.state==1" class="btn-right">
                    <div v-if="task.taskType === 2">
                      <v-btn @onclick="skipPage('invoke',task.message)">合约调用</v-btn>
                    </div>
                    <div v-if="task.taskType === 1">
                      <v-btn @onclick="skipPage('debug',task.message)">合约调试</v-btn>
                    </div>
                  </div>
                </div>
              </div>
              <div class="notask" v-if="taskList.length == 0">{{$t('operation.nodata')}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-toast ref="toast"></v-toast>
  </div>
</template>

<script lang="ts" src="./taskbar.ts">
</script>
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
