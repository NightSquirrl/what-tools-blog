import {defineConfig} from '@sugarat/theme/node'
import {blogTheme} from './blog-theme'


// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config
export default defineConfig({
    // 继承博客主题配置
    extends: blogTheme,
    lang: 'zh-cn',
    title: 'What tools blog',
    description: '个人博客，基于 vitepress 实现',
    vite: {
        optimizeDeps: {
            include: ['element-plus'],
            exclude: ['@sugarat/theme']
        }
    },
    lastUpdated: true,
    themeConfig: {
        lastUpdatedText: '上次更新于',
        outline:{
            level: "deep",
            label:"目录"
        },
        // footer: {
        //   message: '自定义底部内容',
        //   copyright:
        //     'MIT Licensed | <a target="_blank" href="https://theme.sugarat.top/"> @sugarat/theme </a>'
        // },
        logo: '/logo.png',
        // editLink: {
        //   pattern:
        //     'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
        //   text: '去 GitHub 上编辑内容'
        // },
        nav: [
            {text: '首页', link: '/'},
            {
                text: '便捷封装', items: [
                    {text: 'axios', link: '/basic-tools/convenient-packaging/axios-shortcut.html'},
                    {text: 'Echart', link: '/front-end/Echarts/'},
                    {text: 'NGINX', link: '/rear-end/NGINX/'},
                ]
            },
            {
                text: '前端', items: [
                    {
                        text: 'Vue', items: [
                            {text: 'vuex | Pinia', link: '/basic-tools/convenient-packaging/vue-vuex-pinia.html'},
                            {text: 'vue-router', link: '/basic-tools/convenient-packaging/vue-router.html'},
                        ],
                    },
                    {
                        text: '算法', link:"/front-end/algorithm/"
                    },
                    {
                        text: 'FFmpeg', link:"/front-end/FFmpeg/index.html"
                    },
                    {
                        text: 'Rollup组件封装', link:"/front-end/组件封装/rollup.html"
                    },
                ]
            },
            {
                text: '后端', items: [

                    {
                        text: 'Java', link: '/Java/Java目录.html'
                    },
                    {
                        text: 'Maven', link:"/JavaWeb/1.Maven.html"
                    },
                    {
                        text: 'SpringBoot', link:"/JavaWeb/2.SpringBoot 基础.html"
                    },
                    {
                        text: 'Mybatis', link:"/JavaWeb/4.Mybatis 入门.html"
                    },
                    {
                        text: "Mybatis-Plus", link:"/JavaWeb/10.mybatis-plus.md"
                    }
                ]
            },
            {
                text:"面试",items:[
                    {
                        text: "HTML", link: "/front-end/interview/HTML.html"
                    }
                ]
            }

        ],
        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/NightSquirrl'
            }
        ]
    }
})
