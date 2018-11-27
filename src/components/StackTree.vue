<template>
  <ul>
    <li v-for="tree in treelist" :key="tree"></li>
  </ul>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class Tree extends Vue {
    treelist:{}[]=[]

}
</script>

<style lang="less">
</style>
