<template>
  <div>
    <div class="debug-title">
      <div class="changehash-content">
        <div class="change-box">
          <select class="change-select" v-model="txid">
            <option
              v-for="tx in txlist"
              :key="tx.id"
              :value="tx.txid"
            >{{tx.txidstr}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{timeShow(tx.createTime)}}</option>
          </select>
          <input type="text" placeholder="选择历史交易" class="change-input" v-model="txid">
        </div>
      </div>
      <div class="btn-list">
        <v-btn @onclick="initDebugInfo">查询</v-btn>
      </div>
      <div class="btn-list">
        <a href="https://bbs.neldev.net/thread-147.htm" target="_blank">
          <v-btn :type="'warn'">帮助</v-btn>
        </a>
      </div>
    </div>
    <div class="debug-panel">
      <div class="debug-info">
        <panel class="stack-pael">
          <p-title :title="'CalcStack'"></p-title>
          <div class="panel-content" id="calcstack-content"></div>
        </panel>
        <panel class="stack-pael">
          <p-title :title="'AltStack'"></p-title>
          <div class="panel-content" id="altstack-content"></div>
        </panel>
        <panel>
          <p-title :title="'Value tool'"></p-title>
          <div class="value-content">
            <div id="valuetool"></div>
          </div>
        </panel>
      </div>
      <div class="avm">
        <panel class="avm-panel">
          <div class="title-list">
            <div class="title" :class="active==0?'active':''" @click="active=0">AVM</div>
            <div class="title" :class="active==1?'active':''" @click="active=1">CareInfo</div>
            <div class="title" :class="active==2?'active':''" @click="showNotify">log/notify</div>
          </div>
          <div class="avm-content" v-show="active==0">
            <textarea id="avm-code"></textarea>
          </div>
          <div class="avm-content" v-show="active==1">
            <div id="careInfo-msg"></div>
          </div>
          <div class="avm-content" v-show="active==2">
            <textarea id="notify-code"></textarea>
          </div>
        </panel>
      </div>
      <div class="code">
        <panel class="code-panel">
          <div class="p-title">
            <div class="title">
              <div>
                <div>文件</div>
              </div>
            </div>
          </div>
          <div class="code-content">
            <textarea id="csharp-code"></textarea>
          </div>
        </panel>
      </div>
    </div>
    <v-toast ref="toast"></v-toast>
  </div>
</template>
<style lang="less" scoped>
.debug-title {
  display: flex;
  padding-bottom: 30px;
  .btn-list {
    padding-left: 30px;
  }
  .changehash-content {
    text-align: center;
    .change-box {
      width: 362px;
      height: 30px;
      margin: 0 auto;
      background: #292a30;
      border: 1px solid #ffffff;
      border-radius: 3px 0px 3px 3px 3px;
      position: relative;
      .change-select {
        width: 100%;
        height: 100%;
        border: none;
        background: none;
        color: #fff;
        outline: none;
        option {
          background: #292a30;
          color: #fff;
        }
      }
      .change-input {
        width: 95%;
        height: 100%;
        border: none;
        background: #292a30;
        color: #fff;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        outline: none;
        text-indent: 20px;
        &::placeholder {
          color: #fff;
        }
      }
    }
    .changehash-btn {
      margin-top: 50px;
      margin-bottom: 30px;
    }
  }
}
.debug-panel {
  display: flex;
  height: ~"calc(100% - 60px)";
  .code {
    flex: 1;
    padding-right: 25px;
    height: 100%;
    .code-panel {
      height: 100%;
      .code-content {
        height: ~"calc(100% - 59px)";
      }
      .p-title {
        border-bottom: 3px solid #3d3d3d;
        width: 100%;
        line-height: 55px;
        .title {
          padding-left: 25px;
          padding-right: 25px;
          font-family: NotoSansHans-Regular;
          font-size: 14px;
          color: #b5b5b5;
          display: inline-block;
        }
        .btn-list {
          float: right;
          margin-top: 15px;
          margin-right: 25px;
        }
      }
    }
  }
  .debug-info {
    width: 400px;
    max-width: 400px;
    padding-right: 30px;
    .stack-pael {
      margin-bottom: 27px;
    }
    .value-content {
      overflow: auto;
      max-width: 350px;
      width: 400px;
      max-height: 100px;
      height: 70px;
      color: #fff;
      margin-left: 5px;
      margin-right: 5px;
      margin-top: 5px;
      margin-bottom: 5px;
    }
    .panel-content {
      overflow: auto;
      max-width: 350px;
      width: 400px;
      max-height: 200px;
      height: 195px;
      color: #fff;
      margin-left: 5px;
      margin-right: 5px;
      margin-top: 5px;
      margin-bottom: 5px;
      .content-btns {
        padding-top: 5px;
        justify-content: flex-end;
      }
      input {
        width: 100%;
        background: #292a30;
        border: 1px solid #b5b5b5;
        box-shadow: 0 2px 4px 0 #023169;
        border-radius: 3px 0px 3px 3px 3px;
        height: 30px;
        color: #fff;
      }
      ul {
        padding-inline-start: 0px;
      }
    }
  }
  .avm {
    width: 400px;
    max-width: 400px;
    padding-right: 30px;
    .avm-panel {
      height: 100%;
      .title-list {
        border-bottom: 1px solid #3d3d3d;
        width: 100%;
        .title {
          padding-left: 25px;
          padding-right: 25px;
          line-height: 55px;
          font-family: NotoSansHans-Regular;
          font-size: 14px;
          color: #b5b5b5;
          display: inline-block;
        }
        .active {
          background: #343233;
        }
        .btn-list {
          float: right;
          margin-top: 13px;
          margin-right: 25px;
        }
      }
      .avm-content {
        height: ~"calc(100% - 55px)";
        #careInfo-msg {
          overflow: auto;
          max-width: 350px;
          width: 400px;
          height: 98%;
          color: #fff;
          margin-left: 5px;
          margin-right: 5px;
          margin-top: 5px;
          margin-bottom: 5px;
        }
      }
      .panel-content {
        margin-left: 20px;
        margin-right: 20px;
        margin-top: 20px;
        margin-bottom: 20px;
        color: #fff;
        .content-btns {
          padding-top: 20px;
          justify-content: flex-end;
        }
        input {
          width: 100%;
          background: #292a30;
          border: 1px solid #b5b5b5;
          box-shadow: 0 2px 4px 0 #023169;
          border-radius: 3px 0px 3px 3px 3px;
          height: 30px;
          color: #fff;
        }
      }
    }
  }
  .panel-form {
    display: flex;
    .form-lable {
      font-family: NotoSansHans-Regular;
      font-size: 14px;
      color: #ffffff;
      width: 137px;
      padding-bottom: 20px;
    }
    .form-content {
      width: 370px;
      padding-bottom: 20px;
      input {
        background: #292a30;
        border: 1px solid #ffffff;
        box-shadow: 0 2px 4px 0 #023169;
        border-radius: 3px 0px 3px 3px 3px;
        width: 260px;
      }
    }

    label {
      box-sizing: border-box;
      display: inline-block;
      // width: 75px;
      //   min-width: 69px;
      //   height: 30px;
      padding: 0 10px;
      margin-bottom: 10px;
      text-align: center;
      margin-right: 15px;
      font-size: 14px;
      color: #ffffff;
      font-weight: 400;
      border-radius: 3px;
      position: relative;
      .select-img {
        display: inline-block;
        width: 22px;
        height: 22px;
        margin-right: 6px;
        vertical-align: middle;
        border: 1px solid #fff;
        border-radius: 50%;
        img {
          display: none;
          width: 22px;
          height: 22px;
        }
      }

      span {
        vertical-align: middle;
      }
      input {
        visibility: hidden;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
      &.checked-input {
        .select-img {
          border: none;
          img {
            display: block;
          }
        }
      }
    }
  }
}
</style>
<script lang="ts" src = "./Debug.ts">
</script>
