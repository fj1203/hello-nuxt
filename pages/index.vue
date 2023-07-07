<template>
  <div class="home">我是首页</div>
  <ClientOnly fallback-tag="h3" fallback="loading">
    <template #fallback>loading....</template>
    我是会在客户端渲染
  </ClientOnly>
  <div class="global-style">global-style</div>
  <div class="global-style1">global-style1</div>
  <div class="global-style2">global-style2</div>
  <div class="local-style">local-style</div>
</template>

<script setup></script>

<style lang="scss" scoped>
/* @import "@/assets/styles/variables.scss"; */
@use "@/assets/styles/variables.scss" as *;

.local-style {
  color: $fsColor;
  font-size: $fs20;
  @include border();
}
</style>
