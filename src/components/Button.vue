<template>
    <div class="v-btn" :class="type"   @click="btnClick">
        <slot></slot>
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
  @Prop({ default: "primary" })
  type: string;
  constructor() {
    super();
  }
  mounted() {}
  btnClick() {
    this.$emit("onclick");
  }
}
</script>

<style lang="less" scoped >
.v-btn {
  vertical-align: middle;
  border-radius: 3px;
  font-family: NotoSansHans-Regular;
  font-size: 16px;
  color: #ffffff;
  text-align: center;
  width: 120px;
  height: 30px;
  line-height: 30px;
  display: inline-block;
  &:hover{
    cursor:pointer;
  }
}
.disable {
  background: #77bcf6;
  &:hover {
    cursor: not-allowed;
  }
}
.primary {
  background: #1b76e5;
  box-shadow: 0 2px 4px 0 #023169;
  &:hover {
    background: #3791ff;
  }
}
.warn {
  background: #e5831b;
  box-shadow: 0 2px 4px 0 #683600;
  &:hover {
    background: #ed9a3f;
  }
}
</style>
