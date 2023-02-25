module.exports = {
  "title": "ABin博客",
  "description": "这是我的个人博客",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "locales": {
    '/': {
      "lang": 'zh-CN'
    }
  },
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "文档",
        "icon": "reco-message",
        "items": [
          {
            "text": "教程",
            "link": "/docs/javaguide/"
          },
        ]
      },
      {
        "text": "归档",
        "link": "/timeline/",
        "icon": "reco-date"
      },
    ],
    "subSidebar": 'auto',
    "sidebar": {
      '/docs/javaguide/': [
        {
          title: '目录',
          children:[
            // {
            //   title: '测试',
            //   path: 'test'
            // },
          ]
        },
      ],
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      },
      "socialLinks": [     // 信息栏展示社交信息
        {"icon": 'reco-qq', "link": 'socialLinks/qq.jpg'},
        {"icon": 'reco-github', "link": 'https://github.com/lb1098'},
        {"icon": 'reco-mayun', "link": 'https://gitee.com/lb1098'},
        {"icon": 'reco-api', "link": 'https://leetcode.cn/u/glb2023/',"text": '力扣'},
      ]
    },
    "friendLink": [
      {
        "title":"赞赏组件",
        "desc": "本博客使用的赞赏组件vuepress-plugin-sponsor。",
        "link": "https://github.com/yokefellow/vuepress-plugin-sponsor/"
      }
    ],
    "logo": "/avatar.jpeg",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "最近一次更新",
    "author": "ABin",
    "authorAvatar": "/avatar.jpeg",
    // 备案
    // record: 'ICP 备案文案',
    // recordLink: 'ICP 备案指向链接',

    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    // repo: "https://github.com/lb1098/lb1098.github.io/tree/blogcode/",
    // repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'lb1098/lb1098.github.io',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'ablog',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'blogcode',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '编辑此页',
    // cyberSecurityRecord: '公安部备案文案',
    // cyberSecurityLink: '公安部备案指向链接',
    // 项目开始时间，只填写年份
    startYear: '2023',
    noFoundPageByTencent: false,
    displayAllHeaders: true,

  },
  "markdown": {
    "lineNumbers": true
  },
  plugins: [
    [
      'vuepress-plugin-sponsor',
      {
        theme: 'simple',
        alipay: '/sponsor-qrcode/alipay.jpg',
        wechat: '/sponsor-qrcode/wx_pay.png',
        qq: '/sponsor-qrcode/qq.png',
        duration: 2000
      }
    ],
    [
      'ribbon', // 丝带背景效果
      {
        size: 90, // width of the ribbon, default: 90
        opacity: 0.05, // opacity of the ribbon, default: 0.3
        zIndex: -1, // z-index property of the background, default: -1
      },
    ],
  ]
}