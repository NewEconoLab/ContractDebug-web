<template>
  <div>
    <div class="deploy-panel">
      <div class="code">
        <panel class="code-panel">
          <div class="p-title">
            <div class="title">
              <div class="title-menu">
                <span class="title-active" @mousemove="hashListShow=true">{{$t('deploy.file')}}</span>
                <div class="titlemenu-list-wrap" v-if="hashListShow">
                  <ul class="titlemenu-list">
                    <li @click="selectedHash('new')">{{$t('deploy.new')}}</li>
                    <li class="active" @click="inputLoadHash=true">{{$t('deploy.loadingHash')}}</li>
                    <li
                      v-for="hash in hashList"
                      :key="hash.scripthash"
                      @click="selectedHash(hash.scripthash)"
                    >
                      <nobr>{{hash.name}}</nobr>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="code-content" id="code-content">
            <textarea id="csharp-code" rows="25" cols="20"></textarea>
          </div>
          <p-foot>
            <v-btn :type="'primary'" @onclick="compile">{{$t('deploy.compile')}}</v-btn>
          </p-foot>
        </panel>
      </div>
      <div class="result">
        <panel>
          <p-title :title="$t('deploy.compileResult')">
            <!-- <v-selected :list="selectList" @selected="onSelect"></v-selected> -->
            <!-- <v-btn :type="'primary'" @onclick="test">操作记录</v-btn> -->
          </p-title>
          <div class="panel-content">
            <div class="compile-result">{{result}}</div>
          </div>
        </panel>
        <div v-if="conactHash && download_href">
          <panel>
            <div class="panel-content">
              <input type="text" id="hash-input" v-model="conactHash">
              <div class="content-btns">
                <v-btn>
                  <a :download="download_name" :href="download_href">{{$t('deploy.download')}}</a>
                </v-btn>
                <v-btn @onclick="copyHash">{{$t('deploy.copy')}}</v-btn>
              </div>
            </div>
          </panel>

          <panel>
            <p-title :title="$t('deploy.deployContract')"></p-title>
            <div class="panel-content">
              <div class="panel-form">
                <div class="form-lable">{{$t('deploy.name')}}</div>
                <div class="form-content">
                  <input type="text" v-model="name" maxlength="30">
                </div>
              </div>
              <div class="panel-form">
                <div class="form-lable">{{$t('deploy.version')}}</div>
                <div class="form-content">
                  <input type="text" v-model="version" maxlength="30">
                </div>
              </div>
              <div class="panel-form">
                <div class="form-lable">{{$t('deploy.author')}}</div>
                <div class="form-content">
                  <input type="text" v-model="author" maxlength="30">
                </div>
              </div>
              <div class="panel-form">
                <div class="form-lable">{{$t('deploy.email')}}</div>
                <div class="form-content">
                  <input type="text" v-model="email" maxlength="30">
                </div>
              </div>
              <div class="panel-form">
                <div class="form-lable">{{$t('deploy.describe')}}</div>
                <div class="form-content">
                  <input type="text" v-model="description" maxlength="30">
                </div>
              </div>
              <div class="panel-form">
                <label for :class="isCall?'checked-input':''">
                  <span @click="isCall=!isCall">
                    <span class="select-img">
                      <img src="../../assets/selected.png" alt>
                    </span>
                    <span>{{$t('deploy.call')}}</span>
                  </span>
                </label>
                <label for :class="isStore?'checked-input':''">
                  <span @click="isStore=!isStore">
                    <span class="select-img">
                      <img src="../../assets/selected.png" alt>
                    </span>
                    <span>{{$t('deploy.storage')}}</span>
                  </span>
                </label>
                <label for :class="feePay?'checked-input':''">
                  <span @click="feePay=!feePay">
                    <span class="select-img">
                      <img src="../../assets/selected.png" alt>
                    </span>
                    <span>{{$t('deploy.payment')}}</span>
                  </span>
                </label>
              </div>
            </div>
            <p-foot :title="$t('deploy.consume')+(90+(isCall*500+isStore*400))">
              <v-btn :type="'primary'" @onclick="deploy">{{$t('deploy.deployConfirm')}}</v-btn>
            </p-foot>
          </panel>
        </div>
      </div>
    </div>
    <div class="usehash-wrapper" v-if="inputLoadHash">
      <div class="usehash-content">
        <p-title :title="$t('deploy.consume')">
          <img src="../../assets/close.png" alt @click="inputLoadHash=false">
        </p-title>
        <div class="usehash-input">
          <input type="text" placeholder="请输入hash" v-model="inputhash">
        </div>
        <div class="usehash-btn">
          <v-btn @onclick="selectedHash(inputhash)">{{$t('deploy.confirm')}}</v-btn>
        </div>
      </div>
    </div>
    <v-toast ref="toast"></v-toast>
  </div>
</template>
<style lang="less" scoped>
.deploy-panel {
  height: 100%;
  display: flex;
  .code {
    flex: 1;
    padding-right: 25px;
    .code-panel {
      height: 100%;
      .code-content {
        height: ~"calc(100% - 120px)";
      }
      .p-title {
        border-bottom: 3px solid #3d3d3d;
        width: 100%;
        line-height: 55px;
        .title {
          padding-left: 25px;
          font-family: NotoSansHans-Regular;
          font-size: 14px;
          color: #b5b5b5;
          display: inline-block;
          .title-menu {
            cursor: pointer;
            position: relative;
            &:hover {
              .title-active {
                color: #3791ff;
                cursor: pointer;
              }
              .titlemenu-list-wrap {
                display: block;
              }
            }
            .titlemenu-list-wrap {
              display: none;
              border: 1px solid #4e4e4e;
              box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
              border-radius: 5px;
              padding: 15px;
              min-width: 110px;
              background: #222222;
              position: absolute;
              top: 39px;
              left: 0;
              z-index: 4;
              .titlemenu-list {
                display: block;
                list-style-type: disc;
                margin-block-start: 0;
                margin-block-end: 0;
                margin-inline-start: 0px;
                margin-inline-end: 0px;
                padding-inline-start: 0;
                li {
                  list-style: none;
                  margin-bottom: 15px;
                  line-height: 14px;
                  font-size: 12px;
                  &:last-child {
                    margin-bottom: 0;
                  }
                  &:hover {
                    color: #3791ff;
                    cursor: pointer;
                  }
                }
              }
            }
          }
        }
        .btn-list {
          float: right;
          margin-top: 15px;
          margin-right: 25px;
        }
      }
    }
  }
  .result {
    width: 520px;
    max-width: 520px;
    .panel-content {
      margin-left: 20px;
      margin-right: 20px;
      margin-bottom: 20px;
      padding-bottom: 20px;
      padding-top: 20px;
      .compile-result {
        color: #fff;
        height: 20px;
      }
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
.usehash-wrapper {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1031;
  .usehash-content {
    background: #151a1e;
    box-shadow: -2px 0 5px 0 rgba(0, 0, 0, 0.5);
    width: 800px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    .btn-list {
      img {
        width: 22px;
        height: 22px;
      }
    }
    .usehash-input {
      width: 700px;
      height: 32px;
      margin: 0 auto;
      margin-top: 50px;
      margin-bottom: 50px;
      background: #292a30;
      border: 1px solid #ffffff;
      border-radius: 3px;
      input {
        border: none;
        background: none;
        width: 100%;
        line-height: 30px;
        text-indent: 20px;
        color: #fff;
        &::placeholder {
          font-size: 14px;
          color: #b5b5b5;
        }
      }
    }
    .usehash-btn {
      text-align: center;
      margin-bottom: 60px;
    }
  }
}
</style>
<script lang="ts" src = "./Deploy.ts">
</script>
