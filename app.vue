<template>
  <!--  动态给app所有的app添加head的内容 -->
  <!-- <Head>
    <Meta name="key" content="keykey key" />
  </Head>
  <div>hello nuxt3</div> -->
  <!-- router-view的封装 -->
  <NuxtPage></NuxtPage>
</template>

<script setup>
// runtimeConfig 变量 获取运行时环境
const runtimeConfig = useRuntimeConfig();
// 判断代码执行环境;
if (process.server) {
  console.log(runtimeConfig.appKey);
  console.log(runtimeConfig.public.baseUrl);
}
if (process.client) {
  console.log(runtimeConfig.public.baseUrl);
}

// 获取appConfig 变量
const appConfig = useAppConfig();
// server client
console.log(appConfig.title);
console.log(appConfig.theme.primary);

onMounted(() => {
  document.title = appConfig.title;
});

// 动态给app所有的app添加head的内容
useHead({
  title: "app useHead",
  bodyAttrs: {
    class: "aa",
  },
  meta: [
    {
      name: "desc",
      content: "广州宏源科教",
    },
  ],
  style: [],
  link: [],
  script: [
    {
      //   src: "http://liujun.com",
      //   body: true,
    },
  ],
});
</script>
<style>
.global-style {
  color: blue;
}
</style>
