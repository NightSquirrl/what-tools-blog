// 主题独有配置
import { getThemeConfig } from '@sugarat/theme/node';


const blogTheme = getThemeConfig({
  // 开启RSS支持
  // RSS,
  // 文章默认作者
  author: 'what tools',
  // 友链
  // friend: [
  //   {
  //     nickname: 'what tools',
  //     des: '你的指尖用于改变世界的力量',
  //     avatar:
  //       'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030',
  //     url: 'https://sugarat.top',
  //   },
  //   {
  //     nickname: 'Vitepress',
  //     des: 'Vite & Vue Powered Static Site Generator',
  //     avatar:
  //       'https://vitepress.dev/vitepress-logo-large.webp',
  //     url: 'https://vitepress.dev/',
  //   },
  // ],
  // 开启离线的全文搜索支持（如构建报错可注释下面的配置再次尝试）
  search: 'pagefind',
  // popover: {
  //   title: '公告',
  //   body: [
  //     {
  //       type: 'text',
  //       content:
  //         '',
  //     },
  //     {
  //       type: 'text',
  //       content:
  //         '',
  //     },
  //     {
  //       type: 'image',
  //       src: '',
  //     },
  //     {
  //       type: 'text',
  //       content:
  //         ',
  //     },
  //     {
  //       type: 'button',
  //       content: '',
  //       link: '',
  //     },
  //   ],
  //   duration: 0,
  // },



});


export { blogTheme };
