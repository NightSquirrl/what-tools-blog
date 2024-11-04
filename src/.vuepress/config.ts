import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { commentPlugin } from "vuepress-plugin-comment2";
export default defineUserConfig({
  base: "",

  lang: "zh-CN",
  title: "Night.Soul",
  description: " NS 自用 Blog",
  theme,
  plugins: [
    commentPlugin({
      provider: "Giscus",
      repo: "NightSquirrl/what-tools-blog",
      repoId: "R_kgDOKpJ2NA",
      category: "Show and tell",
      categoryId: "DIC_kwDOKpJ2NM4Cc97A",
      // 其他选项
      // ...
    }),
  ],
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
