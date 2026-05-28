import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Rare计划官网',
  description: '我们打造最棒的手表应用',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/pwa/manifest.json' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  ],
  bundler: viteBundler(),
  theme: defaultTheme({
    colorMode: 'light',
    colorModeSwitch: false,
    navbar: [
      { text: '首页', link: '/' },
      { text: '开发文档', link: 'https://github.com/Genouka/rareplan_docs' },
      { text: '联系方式', link: '/lianxi/' },
      { text: '法律信息', link: '/law/' },
    ],
    sidebar: {
      '/': [
        {
          text: 'Rare计划系列软件',
          children: [
            '/rarebox.md',
            '/rareboxdesktop.md',
            '/rarebrowser.md',
          ],
        },
        {
          text: '归档应用',
          children: [
            '/rareclean.md',
            '/rarefanyi.md',
            '/rarestore.md',
          ],
        },
        {
          text: '帮助与法律',
          children: [
            '/introduce.md',
            '/rareboxproblem.md',
            '/rareboxdeveloper.md',
            '/rarebrowserhelp.md',
            '/lianxi.md',
            '/law.md',
            '/eula.md',
            '/privacy.md',
            '/rareprobrowserlaw.md',
          ],
        },
      ],
    },
  }),
})
