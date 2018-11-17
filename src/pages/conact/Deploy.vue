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
                    <div style="height:200px"></div>
                </panel>
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
  }
}
</style>
<script lang="ts">
/// <reference path="../../tools/CodeMirror.d.ts"/>
import Component from "vue-class-component";
import Vue from "vue";
@Component({
  components: {}
})
export default class Deploy extends Vue {
  cEditor: any;
  mounted() {
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
  }
  compile() {
    console.log(this.cEditor.getValue());
  }
}
</script>
