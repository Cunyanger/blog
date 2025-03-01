import comp from "D:/WorkSpace/MyTest/blog/blog/src/.vuepress/.temp/pages/notes/software/index.html.vue"
const data = JSON.parse("{\"path\":\"/notes/software/\",\"title\":\"Software\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Software\",\"article\":false,\"feed\":false,\"sitemap\":false,\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://cunyanger.github.io/blog/blog/notes/software/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Yanger's Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Software\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Software\\\"}\"]]},\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
