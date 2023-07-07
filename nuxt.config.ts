// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // 运行时配置优先级(.env> runtimeConfig)
  runtimeConfig: {
    appKey: "abb", //server
    public: {
      baseUrl: "http://codercba.com", // server and client
    },
  },
  // 应用配置。定义在构建时确定的公共变量如them
  // 会和app.config.ts配置合并 优先级（app.config.ts>appConfig）
  appConfig: {
    title: "hello nuxt3",
    theme: {
      primary: "yellow",
    },
  },
  // app配置
  app: {
    // 给app所有的页面的heade添加的配置（SEO， 添加外部的资源）(优先级 组件 > useHead > nuxt.config.ts)
    head: {
      title: "hhh",
      charset: "utf_8",
      viewport:
        "width=device-width, initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no",
      meta: [
        {
          name: "keywords",
          content: "宏源科教",
        },
        {
          name: "description",
          content: "手机商城",
        },
      ],
      link: [
        {
          rel: "icon",
          href: "favicon.ico",
          type: "image/x-icon",
        },
      ],
      style: [
        {
          //   children: `body{ color: red }`,
        },
      ],
      script: [
        {
          src: "http://codercba.com",
        },
      ],
    },
  },

  ssr: true,
  router: {
    options: {
      hashMode: true,
    },
  },
  css: ["@/assets/styles/main.css", "@/assets/styles/global.scss"],
});
