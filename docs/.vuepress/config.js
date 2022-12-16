import { defaultTheme, defineUserConfig } from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'

export default defineUserConfig({
  base: '/',
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
        text: 'Spring',
        children: [
          {
            text: 'Spring Boot',
            children: [
              '/pages/spring/spring-boot/spring-boot-starter',
            ]
          },
          {
            text: 'Spring Cloud',
            children: [
              '/pages/spring/spring-cloud/open-feign',
            ]
          }
        ]
      },
      {
        text: '数据存储',
        children: [
          {
            text: 'ElasticSearch',
            children: [
              '/pages/数据存储/ElasticSearch/初识ES',
            ]
          },
          {
            text: 'MongoDB',
            children: [
              '/pages/数据存储/MongoDB/MongoDB基本使用',
            ]
          },
          {
            text: 'MySQL',
            children: [
              '/pages/数据存储/MySQL/数据库性能优化',
            ]
          },
          {
            text: 'Redis',
            children: [
              '/pages/数据存储/Redis/Redis基本使用',
            ]
          }
        ]
      },
     {
        text: 'About Me',
        link: '/'
      }
     ]
  }),
  plugins: [
    backToTopPlugin(),
  ],
  
})


