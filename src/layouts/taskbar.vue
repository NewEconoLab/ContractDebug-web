<template>
  <div class="navbar navbar-wallet">
    <div class="blockheight">
      <div class="main">
        <div class="balance">
          <span class="asset">GAS</span>
          <span class="amount">{{balance.toString()}}</span>
          <v-btn v-if="claimState==='3010'" @onclick="claimGas">{{$t('taskbar.getGas')}}</v-btn>
          <v-btn
            v-else-if="claimState==='3011'||claimState==='3000'"
            :type="'disable'"
            @onclick="null"
          >{{$t('taskbar.getingGas')}}</v-btn>
          <v-btn
            :type="'disable'"
            v-else-if="claimState==='3012'||claimState==='3003'"
          >{{$t('taskbar.getedGas')}}</v-btn>
          <v-btn :type="'disable'" v-else>{{$t('taskbar.shortage')}}</v-btn>
          <v-hint>
            <div class="hint-img">
              <img src="../assets/explain.png" alt>
            </div>
            <div class="hint-content">
              <p>{{$t('taskbar.getGasMsg')}}</p>
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
          <v-btn @onclick="showHistory=true">{{$t('taskbar.history')}}</v-btn>
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
                      <div
                        class="th-typename"
                      >{{task.taskType===2?$t('taskbar.deploy'):$t('taskbar.invoke')}}</div>
                      <div class="th-other">
                        <div class="th-number">
                          <span>{{task.simpleTxid}}</span>
                        </div>
                      </div>
                    </div>
                    <div class="th-block-txid">
                      <span class="th-txid" style="padding-right:10px">{{task.timeStr}}</span>
                      <span class="th-state">
                        <span>{{$t('taskbar.state')}}</span>
                        <span v-if="task.state==0" class>{{$t('taskbar.wait')}}</span>
                        <span v-if="task.state==1" class="green-text">{{$t('taskbar.success')}}</span>
                        <span v-if="task.state==2" class="red-text">{{$t('taskbar.fail')}}</span>
                      </span>
                    </div>
                  </div>
                  <div v-if="task.state==1" class="btn-right">
                    <div v-if="task.taskType === 2">
                      <v-btn @onclick="skipPage('invoke',task.message)">{{$t('taskbar.invoke')}}</v-btn>
                    </div>
                    <div v-if="task.taskType === 1">
                      <v-btn @onclick="skipPage('debug',task.message)">{{$t('taskbar.debug')}}</v-btn>
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
