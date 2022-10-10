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
        text: 'About Me',
        link: '/'
      }
     ]
  }),
  plugins: [
    backToTopPlugin(),
  ],
  
})


