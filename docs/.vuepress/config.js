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
        text: 'Java 基础',
        children: [
          {
            text: '历史',
            children: [
              '/pages/01_java/history/todo'
            ]
          },
          {
            text: '面试',
            children: [
              '/pages/01_java/interview/todo'
            ]
          }
          ,{
            text: '新特性',
            children: [
              '/pages/01_java/new_features/todo'
            ]
          },{
            text: '虚拟机',
            children: [
              '/pages/01_java/jvm/todo'
            ]
          },{
            text: '并发编程',
            children: [
              '/pages/01_java/concurrent/todo'
            ]
          },{
            text: '常用库',
            children: [
              '/pages/01_java/library/todo'
            ]
          }
        ]
      },
      {
        text: '数据库',
        children: [
          {
            text: 'ElasticSearch',
            children: [
              '/pages/02_data_storage/elasticsearch/es_guide',
            ]
          },
          {
            text: 'MongoDB',
            children: [
              '/pages/02_data_storage/mongodb/mongodb_guide',
            ]
          },
          {
            text: 'MySQL',
            children: [
              '/pages/02_data_storage/mysql/mysql_guide',
            ]
          },
          {
            text: 'Redis',
            children: [
              '/pages/02_data_storage/redis/redis_guide',
            ]
          }
        ]
      },
      {
        text: '框架&中间件',
        children: [
          {
            text: 'Spring Boot',
            children: [
              '/pages/03_framework/spring_boot/spring_boot_starter',
            ]
          },
          {
            text: 'Spring Cloud',
            children: [
              '/pages/03_framework/spring_cloud/open_feign',
            ]
          }
        ]
      },
      {
        text: '源码分析',
        link: '/pages/04_source_code_analyze/todo'
      },
      {
        text: '架构',
        link: '/pages/05_architecture/todo'
      },
      {
        text: '前端',
        link: '/pages/06_front_end/todo'
      },
      {
        text: '编程基础',
        link: '/pages/07_program_basic/todo'
      },
      {
        text: '工具',
        link: '/pages/08_tools/todo'
      },
      {
        text: '产品设计',
        link: '/pages/09_product_design/todo'
      },
      {
        text: '项目管理',
        link: '/pages/10_project_management/todo'
      },
      {
        text: '开源项目',
        link: '/pages/11_open_source/todo'
      },
      {
        text: '读书',
        link: '/pages/12_reading/todo'
      },
      {
        text: '随笔',
        link: '/pages/13_essay/todo'
      }
     ]
  }),
  plugins: [
    backToTopPlugin(),
  ],
  
})


