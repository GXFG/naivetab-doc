import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/naivetab-doc/",
  lang: 'zh-CN',
  title: "NaiveTab 新标签页",
  description: "一款简单高效的浏览器新标签页扩展，支持高度自定义你的新标签页",
  head: [
    ['link', { rel: 'icon', size: 'any', href: '/naivetab-doc/images/logo.svg' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/images/logo.svg',
    nav: [
      { text: '首页', link: '/', },
      { text: '说明指南', link: '/guide/introduce.md' },
      { text: '安装教程', link: '/install/webstore.md' },
      {
        text: '更新日志',
        link: 'https://github.com/GXFG/newtab-naivetab/blob/main/CHANGELOG.md',
      },
      {
        text: '买杯咖啡',
        link: 'https://github.com/GXFG/newtab-naivetab/blob/main/sponsor.md',
      },
      {
        text: '反馈建议',
        items: [
          {
            text: 'Issue',
            link: 'https://github.com/GXFG/newtab-naivetab/issues',
          },
          {
            text: 'Email',
            link: 'mailto:gxfgim@outlook.com?subject=NaiveTab Feedback Translation',
          },
        ]
      },
    ],

    sidebar: [
      {
        text: '说明指南',
        items: [
          { text: '介绍', link: '/guide/introduce.md' },
          { text: '快速上手', link: '/guide/getting-started.md' },
          { text: '基础配置', link: '/guide/general.md', },
          { text: '键盘书签', link: '/guide/keyboard-bookmark.md', },
          { text: '时钟', link: '/guide/clock.md', },
          { text: '日期', link: '/guide/date.md', },
          { text: '万年历', link: '/guide/calendar.md', },
          { text: '今年进度', link: '/guide/year-progress.md', },
          { text: '备忘录', link: '/guide/memo.md', },
          { text: '搜索栏', link: '/guide/search.md', },
          { text: '天气', link: '/guide/weather.md', },
          { text: '资讯', link: '/guide/news.md', },
          { text: 'FAQ', link: '/guide/faq.md', },
          { text: '帮助翻译', link: '/guide/help-translation.md', },
        ]
      },
      {
        text: '安装教程',
        items: [
          { text: '官方商店安装（推荐）', link: '/install/webstore.md' },
          { text: '手动安装', link: '/install/manual.md' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/GXFG/newtab-naivetab' }
    ],

    footer: {
      copyright: 'Copyright © 2025 GXFG'
    }
  }
})
