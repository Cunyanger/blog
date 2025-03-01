import comp from "D:/WorkSpace/MyTest/blog/blog/src/.vuepress/.temp/pages/notes/index.html.vue"
const data = JSON.parse("{\"path\":\"/notes/\",\"title\":\"Notes\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Notes\",\"article\":false,\"feed\":false,\"sitemap\":false,\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://cunyanger.github.io/blog/blog/notes/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Yanger's Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Notes\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Notes\\\"}\"]]},\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
