<template>
  <div>
    <div class="invoke-panel">
      <div class="code-top">
        <panel>
          <p-title :title="'合约名称、Hash'">
            <v-btn>更换合约</v-btn>
            <v-btn :type="'warn'">帮助</v-btn>
          </p-title>
          <div class="code-content" id="code-content">
            <!-- <textarea id="csharp-code" rows="25" cols="20"></textarea> -->
          </div>
        </panel>
        <v-btn :type="'primary'">调用交易</v-btn>
        <v-btn>试运行</v-btn>
      </div>
      <div class="result-bottom">
        <div class="result-left">
          <p-title :title="'试运行结果'"></p-title>
          <div class="panel-content">
            <div class="panel-form">
              <div class="form-lable">参数Script hash</div>
              <div class="form-content">
                <input type="text" name id v-model="name">
              </div>
            </div>
            <div class="panel-form">
              <div class="form-lable">执行结果</div>
              <div class="form-content">
                <input type="text" name id v-model="version">
              </div>
            </div>
            <div class="panel-form">
              <div class="form-lable">方法返回</div>
              <div class="form-content">
                <input type="text" name id v-model="author">
              </div>
            </div>
            <div class="panel-form">
              <div class="form-lable">GAS消耗</div>
              <div class="form-content">
                <input type="text" name id v-model="email">
              </div>
            </div>
          </div>
        </div>
        <div class="result-right">
          <p-title :title="'结果代码'"></p-title>
          <div class="panel-content">
            <div class="compile-result"></div>
          </div>
        </div>
      </div>
      <!-- 更换合约的弹筐 -->
      <div class="changehash-dialog">
        <div class="changhash-wrapper">
          <p-title :title="'更换合约'">
            <img src="../../assets/close.png" alt>
          </p-title>
          <div class="changehash-content">
            <div class="change-box">
              <select class="change-select">
                <option value="1">合约1</option>
              </select>
              <input type="text" placeholder="选择合约" class="change-input">
            </div>
            <div class="changehash-btn">
              <v-btn>更换合约</v-btn>
            </div>
          </div>
        </div>
      </div>
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
      input {
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
<script lang="ts" src = "./Deploy.ts">
</script>
