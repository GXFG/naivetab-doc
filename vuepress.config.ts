import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

const guideDocList = [
  '/guide/introduce.md',
  '/guide/getting-started.md',
  '/guide/general.md',
  '/guide/keyboard-bookmark.md',
  '/guide/clock.md',
  '/guide/date.md',
  '/guide/calendar.md',
  '/guide/memo.md',
  '/guide/search.md',
  '/guide/weather.md',
  '/guide/news.md',
  '/guide/faq.md',
  '/guide/help-translation.md',
]

const installDocList = [
  '/install/webstore.md',
  '/install/manual.md',
]

export default defineUserConfig({
  base: "/naivetab-doc/",
  lang: 'zh-CN',
  title: 'NaiveTab 新标签页',
  description: '一款简洁的浏览器新标签页扩展，可以高度自定义你的新标签页',
  head: [['link', { rel: 'icon', size: 'any', href: '/naivetab-doc/images/logo.svg' }]],
  theme: defaultTheme({
    logo: '/images/logo.svg',
    navbar: [
      {
        text: '简介',
        link: '/',
      },
      {
        text: '指南',
        children: guideDocList,
      },
      {
        text: '安装',
        children: installDocList,
      },
      {
        text: '更新日志',
        link: 'https://github.com/GXFG/newtab-naivetab/blob/main/CHANGELOG.md',
      },
      {
        text: '反馈建议',
        link: 'https://github.com/GXFG/newtab-naivetab/issues',
      },
      {
        text: 'Github',
        link: 'https://github.com/GXFG/newtab-naivetab',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          children: guideDocList,
        },
      ],
      '/install/': [
        {
          text: '安装',
          children: installDocList,
        }
      ],
    },
  }),
  plugins: [],
})
