<template>
  <div class="panel-title">
    <div class="title">
      {{title}}
    </div>
    <div class="btn-list">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Valert extends Vue {
  @Prop({ default: "" })
  public title: string;
  constructor() {
    super();
  }
  mounted() {}
}
</script>

<style lang="less" scoped >
.panel-title {
  border-bottom: 1px solid #3d3d3d;
  width: 100%;
  .title {
    padding-left: 25px;
    line-height: 55px;
    font-family: NotoSansHans-Regular;
    font-size: 14px;
    color: #b5b5b5;
    display: inline-block;
  }
  .btn-list {
    float: right;
    margin-top: 13px;
    margin-right: 25px;
  }
}
</style>
