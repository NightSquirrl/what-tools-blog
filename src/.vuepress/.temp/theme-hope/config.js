import { defineClientConfig } from "vuepress/client";


import { HopeIcon, Layout, NotFound, useScrollPromise, injectDarkmode, setupDarkmode, setupSidebarItems } from "/Users/zeroeldath/Desktop/ignore-space/what-tools-blog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.21_echarts@5.4.3_markdown-it@14.0.0_vuepress-plugin-search-pro@2_ogj5hgmhnlmybvuvv4klurx5ae/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineCatalogInfoGetter } from "/Users/zeroeldath/Desktop/ignore-space/what-tools-blog/node_modules/.pnpm/@vuepress+plugin-catalog@2.0.0-rc.10_vuepress@2.0.0-rc.5/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { BlogCategory, BlogHome, BlogType, BloggerInfo, Timeline, setupBlog } from "/Users/zeroeldath/Desktop/ignore-space/what-tools-blog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.21_echarts@5.4.3_markdown-it@14.0.0_vuepress-plugin-search-pro@2_ogj5hgmhnlmybvuvv4klurx5ae/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/export.js";
import "/Users/zeroeldath/Desktop/ignore-space/what-tools-blog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.21_echarts@5.4.3_markdown-it@14.0.0_vuepress-plugin-search-pro@2_ogj5hgmhnlmybvuvv4klurx5ae/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/styles/all.scss";
import { GlobalEncrypt, LocalEncrypt } from "/Users/zeroeldath/Desktop/ignore-space/what-tools-blog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.21_echarts@5.4.3_markdown-it@14.0.0_vuepress-plugin-search-pro@2_ogj5hgmhnlmybvuvv4klurx5ae/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/export.js";
import "/Users/zeroeldath/Desktop/ignore-space/what-tools-blog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.21_echarts@5.4.3_markdown-it@14.0.0_vuepress-plugin-search-pro@2_ogj5hgmhnlmybvuvv4klurx5ae/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/styles/all.scss"

import "/Users/zeroeldath/Desktop/ignore-space/what-tools-blog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.21_echarts@5.4.3_markdown-it@14.0.0_vuepress-plugin-search-pro@2_ogj5hgmhnlmybvuvv4klurx5ae/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.t;
  const shouldIndex = meta.I !== false;
  const icon = meta.i;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(HopeIcon, { icon }), title] : null,
    order: meta.O,
    index: meta.I,
  } : null;
});

export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // provide HopeIcon as global component
    app.component("HopeIcon", HopeIcon);

    app.component("BloggerInfo", BloggerInfo);
    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();
    setupBlog();
  },
  layouts: {
    Layout,
    NotFound,
    BlogCategory,
    BlogHome,
    BlogType,
    Timeline,
  }
});