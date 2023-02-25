module.exports = {
  "title": "Ablog",
  "description": "",
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
          {
            "text": "教程2",
            "link": "/docs/javaguide2/"
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
            {
              title: '测试',
              path: 'test'
            },
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
        {"icon": 'reco-github', "link": 'https://github.com/recoluan'},
        {"icon": 'reco-npm', "link": 'https://www.npmjs.com/~reco_luan'}
      ]
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "最近一次更新",
    "author": "ABin",
    "authorAvatar": "/avatar.png",
    // 备案
    record: 'ICP 备案文案',
    recordLink: 'ICP 备案指向链接',

    repo: "https://github.com/lb1098/lb1098.github.io/tree/blogcode/",
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'ablog/vuepress',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'ablog',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'blogcode',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！',
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