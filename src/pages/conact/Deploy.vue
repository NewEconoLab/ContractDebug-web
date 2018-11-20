<template>
    <div>
        <div class="deploy-panel">
            <div class="code">
                <panel>
                    <div class="p-title">
                        <div class="title">
                            <div>
                                <div>文件</div>
                                <!-- <div>
                                    <ul>
                                        <li></li>
                                    </ul>
                                </div> -->
                            </div>
                        </div>
                    </div>
                    <div class="code-content" id="code-content">
                        <textarea id="csharp-code"  rows="25" cols="20" >
                        </textarea>
                    </div>
                    <p-foot>
                        <v-btn :type="'primary'" @onclick="compile">编译代码</v-btn>
                    </p-foot>
                </panel>
            </div>
            <div class="result">
                <panel>
                    <p-title :title="'编译结果'">
                        <!-- <v-btn :type="'primary'" @onclick="test">操作记录</v-btn> -->
                    </p-title>
                    <div class="panel-content">
                        <div class="compile-result"></div>
                    </div>
                </panel>
                <div v-if="conactHash||true">
                <panel>
                    <div class="panel-content">
                        <input type="text" id="hash-input" v-model="conactHash">
                        <div class="content-btns">
                            <v-btn> <a :download="download_name" :href="download_href" > 下载 AVM</a></v-btn>
                            <v-btn @onclick="copyHash">复制合约hash</v-btn>
                        </div>
                    </div>
                </panel>
                
                <panel>
                    <p-title :title="'部署当前合约'">
                    </p-title>
                    <div class="panel-content">
                        <div class="panel-form">
                            <div class="form-lable">合约名称（必填）</div>
                            <div class="form-content">
                                <input type="text" name="" id="">
                            </div>
                        </div>
                        <div class="panel-form">
                            <div class="form-lable">版本</div>
                            <div class="form-content">
                                <input type="text" name="" id="">
                            </div>
                        </div>
                        <div class="panel-form">
                            <div class="form-lable">作者</div>
                            <div class="form-content">
                                <input type="text" name="" id="">
                            </div>
                        </div>
                        <div class="panel-form">
                            <div class="form-lable">邮件</div>
                            <div class="form-content">
                                <input type="text" name="" id="">
                            </div>
                        </div>
                        <div class="panel-form">
                            <div class="form-lable">合约描述</div>
                            <div class="form-content">
                                <input type="text" name="" id="">
                            </div>
                        </div>
                        <div class="panel-form">
                            <label for="" :class="isCall?'checked-input':''">
                                <span @click="isCall=!isCall">
                                    <span class="select-img" ><img src="../../assets/selected.png" alt=""/></span>
                                    <span>动态调用</span>
                                </span>
                            </label>
                            <label for="" :class="isStore?'checked-input':''">
                                <span @click="isStore=!isStore">
                                    <span class="select-img"><img src="../../assets/selected.png" alt=""/></span>
                                    <span>创建存储区</span>
                                </span>                            
                            </label>
                            <label for="" :class="feePay?'checked-input':''">
                                <span @click="feePay=!feePay">
                                    <span class="select-img"><img src="../../assets/selected.png" alt=""/></span>
                                    <span>可接受付款</span>
                                </span>
                            </label>
                        </div>
                    </div>
                    <p-foot :title="'花费GAS：'+(90+(isCall*500+isStore*400))">

                        <v-btn :type="'primary'" @onclick="deploy">确认部署</v-btn>
                    </p-foot>
                </panel>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.deploy-panel {
  display: flex;
  .code {
    flex: 1;
    padding-right: 25px;
    .code-content {
      height: 100%;
      max-height: 500px;
      //   overflow: hidden;
      overflow: auto;
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
      }
      .btn-list {
        float: right;
        margin-top: 15px;
        margin-right: 25px;
      }
    }
  }
  .result {
    width: 520px;
    max-width: 520px;
    .panel-content {
      margin-left: 20px;
      margin-right: 20px;
      margin-top: 20px;
      margin-bottom: 20px;
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
<script lang="ts">
/// <reference path="../../tools/CodeMirror.d.ts"/>
import Component from "vue-class-component";
import Vue from "vue";
import { tools } from "../../tools/importpack";
import { LoginInfo } from "../../tools/entity";
@Component({
  components: {}
})
export default class Deploy extends Vue {
  checked: any[] = [];
  cEditor: any;
  result: string = "";
  conactHash: string = "";
  download_name: string = "";
  download_href: string = "";
  isCall = false;
  isStore = false;
  feePay = false;
  amount: number;
  mounted() {
    this.result = "";
    this.conactHash = "";
    var codeContent = document.getElementById("code-content") as HTMLDivElement;
    var width = codeContent.offsetWidth;
    var height = codeContent.offsetHeight;
    this.cEditor = CodeMirror.fromTextArea(
      document.getElementById("csharp-code"),
      {
        lineNumbers: true,
        matchBrackets: true,
        mode: "text/x-csharp"
      }
    );
    this.cEditor.setSize("auto", height);
    // this.cEditor.on("change", function() {
    //事件触发后执行事件
    //   alert("change");
    // });
  }
  async compile() {
    console.log("进入了 compile 方法");

    const code = this.cEditor.getValue();
    console.log(code);

    const result = await tools.wwwtool.compileContractFile(
      LoginInfo.getCurrentAddress(),
      code
    );
    this.result = "执行成功";
    this.conactHash = result.hash;

    const coderesult = await tools.wwwtool.getContractCodeByHash(result.hash);
    const avm: string = coderesult.avm;

    var blob = new Blob([avm.hexToBytes()]);
    this.download_href = URL.createObjectURL(blob);
    this.download_name = this.conactHash + ".avm";
  }

  /**
   * 发布合约
   */
  async deploy() {}

  /**
   * 复制hash
   */
  copyHash() {
    // 复制剪切板
    var target = document.getElementById("hash-input") as HTMLInputElement;
    target.select();
    document.execCommand("copy");
    console.log();
  }
}
</script>
