<template>
  <div class="hint-box">
    <div class="hint-msg">
        <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
// import { LoginInfo } from "../tools/entity";

@Component({
  components: {}
})
export default class Hint extends Vue {
  //   @Prop({ default: true })

  constructor() {
    super();
  }
}
</script>
<style lang="less" scoped>
.hint-box {
  display: inline-block;
  .hint-msg {
    position: relative;
    .hint-img {
      img {
        width: 16px;
        height: 16px;
      }
    }
    .hint-content {
      display: none;
      position: absolute;
      width: 310px;
      left: 35px;
      background: #ffffff;
      border: 1px solid #b2b2b2;
      box-shadow: 0 0 5px 0 rgba(40, 40, 40, 0.5);
      border-radius: 5px;
      padding: 10px 20px;
      top: 12px;
      transform: translateY(-50%);
    }
    .hint-otherwidth {
      width: auto;
      white-space: nowrap;
      padding: 8px;
      font-size: 14px;
      color: #333333;
    }
    .hint-content:after {
      content: "";
      display: block;
      width: 0;
      height: 0;
      border: 10px solid transparent;
      border-right-color: #fff;
      position: absolute;
      left: -20px;
      top: 50%;
      z-index: 1031;
      transform: translateY(-50%);
    }
    &:hover {
      .hint-content {
        display: block;
      }
    }
  }

  p {
    color: #333333;
    text-indent: 2em;
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 0;
  }
}
</style>
 