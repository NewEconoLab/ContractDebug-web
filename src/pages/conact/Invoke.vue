<template>
  <div>
    <div class="invoke-panel">
      <div class="code-top">
        <panel>
          <p-title :title="currentContract.name+'  '+currentContract.scripthash">
            <v-btn @onclick="openSelect=true">{{$t('invoke.change')}}</v-btn>
            <a :href="$t('invoke.href')" target="_blank">
              <v-btn :type="'warn'">{{$t('invoke.help')}}</v-btn>
            </a>
          </p-title>
          <div class="code-content" id="code-content">
            <textarea id="invoke-json-code" rows="25" cols="20"></textarea>
          </div>
        </panel>
        <v-btn @onclick="invoking">{{$t('invoke.invoke')}}</v-btn>
        <v-btn @onclick="testRun">{{$t('invoke.testrun')}}</v-btn>
      </div>
      <div class="result-bottom">
        <div class="result-left">
          <p-title :title="$t('invoke.testresult')"></p-title>
          <div class="panel-content">
            <div class="panel-form">
              <div class="form-lable">{{$t('invoke.scripthash')}}</div>
              <div class="form-content">
                <input class="input" :value="invokeResult.script">
              </div>
            </div>
            <div class="panel-form">
              <div class="form-lable">{{$t('invoke.result')}}</div>
              <div class="form-content">
                <input class="input" :value="invokeResult.state">
              </div>
            </div>
            <div class="panel-form">
              <div class="form-lable">{{$t('invoke.return')}}</div>
              <div class="form-content">
                <input class="input" :value="JSON.stringify(invokeResult.stack)">
              </div>
            </div>
            <div class="panel-form">
              <div class="form-lable">{{$t('invoke.consume')}}</div>
              <div class="form-content">
                <input class="input" :value="invokeResult.gas_consumed">
              </div>
            </div>
          </div>
        </div>
        <div class="result-right">
          <p-title :title="$t('invoke.resultCode')"></p-title>
          <div class="content" id="invoke-result-content">
            <textarea id="invoke-result-code"></textarea>
          </div>
        </div>
      </div>
      <!-- 更换合约的弹筐 -->
      <div class="changehash-dialog" v-if="openSelect">
        <div class="changhash-wrapper">
          <p-title :title="$t('invoke.change')">
            <img src="../../assets/close.png" alt @click="openSelect=false">
          </p-title>
          <div class="changehash-content">
            <div class="change-box">
              <select class="change-select" v-model="inputContract">
                <option
                  v-for="contract in contractList"
                  :key="contract.scripthash"
                  :value="contract.scripthash"
                >{{contract.name}}</option>
              </select>
              <input
                type="text"
                :placeholder="$t('invoke.select')"
                class="change-input"
                v-model="inputContract"
              >
            </div>
            <div class="changehash-btn">
              <v-btn @onclick="changeContract">{{$t('invoke.change')}}</v-btn>
            </div>
          </div>
        </div>
      </div>
      <v-toast ref="toast"></v-toast>
    </div>
  </div>
</template>
<style lang="less" scoped>
.invoke-panel {
  .code-top {
    margin-bottom: 30px;
    .code-content {
      height: 245px;
      max-height: 245px;
      overflow: auto;
    }
    .panel-title {
      border-bottom: 1px solid #3d3d3d;
      width: 100%;
      .title {
        padding-left: 25px;
        font-family: NotoSansHans-Regular;
        font-size: 14px;
        color: #b5b5b5;
        display: inline-block;
        line-height: 55px;
      }
      .btn-list {
        float: right;
        margin-top: 0 !important;
        margin-right: 25px;
      }
    }
    .v-btn {
      margin-right: 30px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .result-bottom {
    width: 100%;
    height: 277px;
    box-shadow: 0 2px 5px 0 #191919;
    border-radius: 5px;
    background: #292a30;
    display: flex;
    .result-left,
    .result-right {
      flex: 1;
      .content {
        width: 100%;
      }
    }
    .result-left {
      border-right: 1px solid #3d3d3d;
    }
    .panel-content {
      margin-left: 20px;
      margin-right: 20px;
      margin-top: 20px;
      margin-bottom: 20px;
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
      width: 74%;
      padding-bottom: 20px;
      .input {
        background: #292a30;
        border: 1px solid #ffffff;
        box-shadow: 0 2px 4px 0 #023169;
        border-radius: 3px 0px 3px 3px 3px;
        width: 100%;
      }
    }

    label {
      box-sizing: border-box;
      display: inline-block;
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
  .changehash-dialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    .changhash-wrapper {
      background: #292a30;
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.5);
      border-radius: 5px;
      width: 500px;
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      -o-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      .panel-title {
        border-bottom: 3px solid #3d3d3d;
      }
      .btn-list {
        img {
          width: 22px;
          height: 22px;
          margin-top: 5px;
        }
      }
      .changehash-content {
        text-align: center;
        .change-box {
          width: 362px;
          height: 30px;
          margin: 0 auto;
          margin-top: 30px;
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
  }
}
</style>
<script lang="ts" src = "./Invoke.ts">
</script>
