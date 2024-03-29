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
                    {text: 'axios', link: '/web/package/axios-shortcut'},
                    {text: '正则表达式手册', link: '/web/package/regular-expression'},
             
                ]
            },
            {
                text: '前端', items: [
                    {
                        text: 'Vue', items: [
                            {text: 'vuex | Pinia', link: '/web/Vue/vue-vuex-pinia'},
                            {text: 'vue-router', link: '/web/Vue/vue-router'},
                        ],
                    },
                    {
                        text: 'React', items: [
                            {text: '项目初始化', link: '/web/react/code-init/ant-unocss-ts-vite-react'},
                        ],
                    },
                 
                    {
                        text: 'PDF', items: [
                            {text: 'PDFJS', link: '/web/PDF/pdfjs/index'},
                        ],
                    },
                    {
                        text: '二维码', items: [
                            {text: '项目手册', link: '/web/QrCode/index'},
                        ],
                    },
                    {
                        text: 'ThreeJS', items: [
                            {text: '快速入门', link: '/web/threeJs/1-quick-get-start'},
                            {text: '光影', link: '/web/threeJs/2-shadow'},
                        ],
                    },
                    {
                        text: 'uni-app', items: [
                            {text: '快速入门', link: '/web/uni-app/1-quick-get-start'},
                        ],
                    },
                    {
                        text: 'webpack', items: [
                            {text: '快速入门', link: '/web/webpack/index'},
                            {text:'手动搭建 React 脚手架',link:'/web/webpack/Webpack+React'}
                        ],
                    },
                    {
                        text: '常用方法', link:"/web/common-method/Array"
                    },
                    {
                        text: 'FFmpeg', link:"/web/FFmpeg/index"
                    },
                    {
                        text: 'Rollup组件封装', link:"/web/component-packaging/rollup"
                    },
                    {text: 'Echart', link: '/web/Echarts/index'},
                    {text: '网络请求', link: '/web/network-request/XMLHttpRequest'},
                    {text: 'CSS', link: '/web/css/grid'},
                    {text: 'Google Drive', link: '/web/GoogleDrive/index'},

                ]
            },
            {
                text: '后端', items: [

                    {
                        text: 'Java', link: '/rear-end/Java/1-IntroductionToFundamentals'
                    },
                    {
                        text: 'Maven', link:"/rear-end/JavaWeb/1-Maven"
                    },
                    {
                        text: 'SpringBoot', link:"/rear-end/JavaWeb/2-SpringBootBasis"
                    },
                    {
                        text: 'Mybatis', link:"/rear-end/JavaWeb/4-MybatisIntroduction"
                    },
                    {
                        text: "Mybatis-Plus", link:"/rear-end/JavaWeb/10-mybatis-plus"
                    },
                    {
                        text: "Redis", link:"/rear-end/JavaWeb/11-redis"
                    }
                ]
            },
            {
                text:"运维",items:[
                    {text: 'NGINX', link: '/server/NGINX/index'},
                    {text: 'Docker', link: '/server/Docker/index'},
                    {
                        text: 'MySQL', items: [
                            {text: '安装', link: '/server/mysql/1-install'},
                        ],
                    },
                    {
                        text: 'Window 终端与Linux', link: '/server/window/terminal'
                    },
                ]
            },
            // {
            //     text:"面试",items:[
            //         {
            //             text: "HTML", link: "/front-end/interview/HTML"
            //         }
            //     ]
            // }

        ],
        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/NightSquirrl'
            }
        ]
    }
})
