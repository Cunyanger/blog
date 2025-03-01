import comp from "D:/WorkSpace/MyTest/blog/blog/src/.vuepress/.temp/pages/tag/博客/index.html.vue"
const data = JSON.parse("{\"path\":\"/tag/%E5%8D%9A%E5%AE%A2/\",\"title\":\"标签: 博客\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"标签: 博客\",\"dir\":{\"index\":false},\"index\":false,\"feed\":false,\"sitemap\":false,\"blog\":{\"type\":\"category\",\"name\":\"博客\",\"key\":\"tag\"},\"layout\":\"BlogCategory\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://cunyanger.github.io/blog/blog/tag/%E5%8D%9A%E5%AE%A2/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Yanger's Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"标签: 博客\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"标签: 博客\\\"}\"]]},\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
