import comp from "D:/WorkSpace/MySpace/blog_theme/src/.vuepress/.temp/pages/notes/literature/index.html.vue"
const data = JSON.parse("{\"path\":\"/notes/literature/\",\"title\":\"Literature\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Literature\",\"article\":false,\"feed\":false,\"sitemap\":false,\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://cunyanger.github.io/blog/blog/notes/literature/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Yanger's Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Literature\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Literature\\\"}\"]]},\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
