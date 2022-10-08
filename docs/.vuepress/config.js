import { defaultTheme, defineUserConfig } from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Java技术栈',
  description: 'Spring Boot Spring Cloud',
  theme: defaultTheme({
     logo: '/icon.png',
     navbar: [
      {
        text: 'Java',
        link: '/'
      },
      {
        text: 'Spring Boot',
        children: [{
          text: 'starters',
          children: [
            'xxxx',
            'xxxx'
          ]},{
            text: 'spring boot data',
            children: [
              '1111',
              '2222',
              '3333'
            ]
          }
        ]
      },
      {
        text: 'Spring Cloud',
        children: [{
          text: 'starters',
          children: [
            'xxxx',
            'xxxx'
          ]}
        ]
      },
      {
        text: 'Database',
        children: [{
          text: 'starters',
          children: [
            'xxxx',
            'xxxx'
          ]}
        ]
      },{
        text: 'About Me',
        link: '/'
      }
     ]
  }),
  plugins: [
    backToTopPlugin(),
  ],
  
})


