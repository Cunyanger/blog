import comp from "D:/WorkSpace/MySpace/blog_theme/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"BlogHome\",\"icon\":\"house\",\"title\":\"Home\",\"heroImage\":\"/logo.png\",\"heroText\":\"阿阳妙妙屋\",\"heroFullScreen\":true,\"bgImage\":\"https://cdn.jsdelivr.net/gh/Cunyanger/pic_bed@master/bg_mor_stu.png\",\"bgImageDark\":\"https://cdn.jsdelivr.net/gh/Cunyanger/pic_bed@master/bg_nig_stu.png\",\"tagline\":\"岂能尽如人意，但求无愧于心\",\"projects\":[{\"icon\":\"folder-open\",\"name\":\"项目名称\",\"desc\":\"项目详细描述\",\"link\":\"https://你的项目链接\"},{\"icon\":\"link\",\"name\":\"链接名称\",\"desc\":\"链接详细描述\",\"link\":\"https://链接地址\"},{\"icon\":\"book\",\"name\":\"书籍名称\",\"desc\":\"书籍详细描述\",\"link\":\"https://你的书籍链接\"},{\"icon\":\"newspaper\",\"name\":\"文章名称\",\"desc\":\"文章详细描述\",\"link\":\"https://你的文章链接\"},{\"icon\":\"user-group\",\"name\":\"伙伴名称\",\"desc\":\"伙伴详细介绍\",\"link\":\"https://你的伙伴链接\"},{\"icon\":\"https://theme-hope-assets.vuejs.press/logo.svg\",\"name\":\"自定义项目\",\"desc\":\"自定义详细介绍\",\"link\":\"https://你的自定义链接\"}],\"footer\":\"自定义你的页脚文字\",\"gitInclude\":[],\"description\":\"这是一个博客主页的案例。 要使用此布局，你应该在页面前端设置 layout: BlogHome 和 home: true。 相关配置文档请见 博客主页。\"},\"readingTime\":{\"minutes\":0.8,\"words\":239},\"filePathRelative\":\"README.md\",\"excerpt\":\"<p>这是一个博客主页的案例。</p>\\n<p>要使用此布局，你应该在页面前端设置 <code>layout: BlogHome</code> 和 <code>home: true</code>。</p>\\n<p>相关配置文档请见 <a href=\\\"https://theme-hope.vuejs.press/zh/guide/blog/home.html\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">博客主页</a>。</p>\\n\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
