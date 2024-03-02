import { defineClientConfig } from "vuepress/client";
import CodeTabs from "/Users/zeroeldath/Desktop/ignore-space/what-tools-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.21_echarts@5.4.3_markdown-it@14.0.0_vuepress@2.0.0-rc.5/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "/Users/zeroeldath/Desktop/ignore-space/what-tools-blog/node_modules/.pnpm/vuepress-shared@2.0.0-rc.21_vuepress@2.0.0-rc.5/node_modules/vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "/Users/zeroeldath/Desktop/ignore-space/what-tools-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.21_echarts@5.4.3_markdown-it@14.0.0_vuepress@2.0.0-rc.5/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import CodeDemo from "/Users/zeroeldath/Desktop/ignore-space/what-tools-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.21_echarts@5.4.3_markdown-it@14.0.0_vuepress@2.0.0-rc.5/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "/Users/zeroeldath/Desktop/ignore-space/what-tools-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.21_echarts@5.4.3_markdown-it@14.0.0_vuepress@2.0.0-rc.5/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "/Users/zeroeldath/Desktop/ignore-space/what-tools-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.21_echarts@5.4.3_markdown-it@14.0.0_vuepress@2.0.0-rc.5/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import { useHint } from "/Users/zeroeldath/Desktop/ignore-space/what-tools-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.21_echarts@5.4.3_markdown-it@14.0.0_vuepress@2.0.0-rc.5/node_modules/vuepress-plugin-md-enhance/lib/client/composables/hint.js";
import "/Users/zeroeldath/Desktop/ignore-space/what-tools-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.21_echarts@5.4.3_markdown-it@14.0.0_vuepress@2.0.0-rc.5/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import Tabs from "/Users/zeroeldath/Desktop/ignore-space/what-tools-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.21_echarts@5.4.3_markdown-it@14.0.0_vuepress@2.0.0-rc.5/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHint();
  }
});
