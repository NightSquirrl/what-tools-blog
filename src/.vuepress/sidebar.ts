import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "前端",
      icon: "dragon",
      prefix: "web",
      children: "structure",
      collapsible: true,
    },
    {
      text: "后端",
      icon: "book-skull",
      prefix: "rear-end",
      children: "structure",
      collapsible: true,

    },
    {
      text: "运维",
      icon: "chess-board",
      prefix: "server",
      children: "structure",
      collapsible: true,

    },
    // {
    //   text: "文章",
    //   icon: "book",
    //   prefix: "posts/",
    //   children: "structure",
    // },
    // "intro",
    // {
    //   text: "幻灯片",
    //   icon: "person-chalkboard",
    //   link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    // },
  ],
});
