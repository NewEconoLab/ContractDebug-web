<template>
    <div>
            <div class="buttoon-list"></div>
        <div class="debug-panel">
            <div class="debug-info">
                <panel>
                    <p-title :title="'Info'">
                    </p-title>
                    <div class="panel-content">
                        <div class="compile-result"></div>
                    </div>
                </panel>
                <panel>
                    <p-title :title="'Calcstack up, altstack down'">
                    </p-title>
                    <div class="panel-content">
                        <div class="compile-result"></div>
                    </div>
                </panel>
                <panel>
                    <p-title :title="'Value tool'">
                    </p-title>
                    <div class="panel-content">
                        <div class="compile-result"></div>
                    </div>
                </panel>
            </div>
            <div class="avm">
                <panel>
                    <p-title :title="'AVM'">
                    </p-title>
                    <div class="panel-content">
                        <div class="compile-result"></div>
                    </div>
                </panel>
            </div>
            <div class="code">
                <panel>
                    <div class="p-title">
                        <div class="title">
                            <div>
                                <div>文件</div>
                            </div>
                        </div>
                    </div>
                    <div class="code-content" id="code-content">
                        <textarea id="csharp-code"  rows="25" cols="20" >
                        </textarea>
                    </div>
                    <!-- <p-foot>
                        <v-btn :type="'primary'" @onclick="compile">编译代码</v-btn>
                        <v-btn @onclick="test">test</v-btn>
                    </p-foot> -->
                </panel>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.debug-panel {
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
  .debug-info {
    width: 250px;
    max-width: 250px;
    padding-right: 30px;
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
  .avm {
    width: 250px;
    max-width: 250px;
    padding-right: 30px;
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
<script lang="ts" src = "./Deploy.ts">
</script>
