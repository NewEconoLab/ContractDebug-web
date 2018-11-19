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
                        <div>
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
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <p-foot :title="'花费GAS：'">
                        <v-btn :type="'primary'" @onclick="compile">确认部署</v-btn>
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
      input {
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
  cEditor: any;
  result: string = "";
  conactHash: string = "";
  download_name: string = "";
  download_href: string = "";
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

  copyHash() {
    // 复制剪切板
    var target = document.getElementById("hash-input") as HTMLInputElement;
    target.select();
    document.execCommand("copy");
    console.log();
  }
}
</script>
