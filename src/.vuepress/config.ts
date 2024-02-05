import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Night.Soul",
  description: " NS 自用 Blog",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
