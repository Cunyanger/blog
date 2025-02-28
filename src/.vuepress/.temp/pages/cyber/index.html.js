import comp from "D:/WorkSpace/MySpace/blog_theme/src/.vuepress/.temp/pages/cyber/index.html.vue"
const data = JSON.parse("{\"path\":\"/cyber/\",\"title\":\"赛博小记\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"赛博小记\",\"index\":false,\"icon\":\"noto:laptop\",\"category\":[\"使用指南\"],\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://cunyanger.github.io/blog/blog/cyber/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Yanger's Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"赛博小记\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"赛博小记\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Cunyanger\\\",\\\"url\\\":\\\"https://cunyanger.github.io/blog/\\\"}]}\"]]},\"readingTime\":{\"minutes\":0.06,\"words\":17},\"filePathRelative\":\"cyber/README.md\",\"excerpt\":\"\"}")
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
