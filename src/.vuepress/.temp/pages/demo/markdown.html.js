import comp from "D:/WorkSpace/MySpace/blog_theme/src/.vuepress/.temp/pages/demo/markdown.html.vue"
const data = JSON.parse("{\"path\":\"/demo/markdown.html\",\"title\":\"Markdown 展示\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Markdown 展示\",\"icon\":\"fa6-brands:markdown\",\"order\":2,\"category\":[\"使用指南\"],\"tag\":[\"Markdown\"],\"gitInclude\":[\"README.md\"],\"description\":\"VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。 你需要创建并编写 Markdown，以便 VuePress 可以根据文件结构将它们转换为不同的页面。\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://cunyanger.github.io/blog/blog/demo/markdown.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Yanger's Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Markdown 展示\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。 你需要创建并编写 Markdown，以便 VuePress 可以根据文件结构将它们转换为不同的页面。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Markdown\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Markdown 展示\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Cunyanger\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"]]},\"readingTime\":{\"minutes\":3.47,\"words\":1041},\"filePathRelative\":\"demo/markdown.md\",\"excerpt\":\"<p>VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。</p>\\n<p>你需要创建并编写 Markdown，以便 VuePress 可以根据文件结构将它们转换为不同的页面。</p>\\n\",\"autoDesc\":true}")
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
