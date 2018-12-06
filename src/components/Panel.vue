<template>
  <div class="panel">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  components: {}
})
export default class Valert extends Vue {
  constructor() {
    super();
  }
  mounted() {}
}
</script>

<style lang="less" scoped >
.panel {
  background: #292a30;
  box-shadow: 0 2px 5px 0 #191919;
  border-radius: 5px;
  .panel-title {
    height: 55px;
  }
}
</style>
