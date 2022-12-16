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
              '/pages/data_storage/elasticsearch/es_guide',
            ]
          },
          {
            text: 'MongoDB',
            children: [
              '/pages/data_storage/mongodb/mongodb_guide',
            ]
          },
          {
            text: 'MySQL',
            children: [
              '/pages/data_storage/mysql/mysql_guide',
            ]
          },
          {
            text: 'Redis',
            children: [
              '/pages/data_storage/redis/redis_guide',
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


