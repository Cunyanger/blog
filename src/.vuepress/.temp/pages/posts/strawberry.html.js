import comp from "D:/WorkSpace/MySpace/blog_theme/src/.vuepress/.temp/pages/posts/strawberry.html.vue"
const data = JSON.parse("{\"path\":\"/posts/strawberry.html\",\"title\":\"草莓\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"date\":\"2022-01-11T00:00:00.000Z\",\"category\":[\"水果\",\"草莓\"],\"tag\":[\"红\",\"小\"],\"gitInclude\":[],\"description\":\"草莓 标题 2 这里是内容。 标题 3 这里是内容。\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/blog/posts/strawberry.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"博客演示\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"草莓\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"草莓 标题 2 这里是内容。 标题 3 这里是内容。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"红\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"小\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-01-11T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"草莓\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2022-01-11T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.Hope\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"]]},\"readingTime\":{\"minutes\":0.11,\"words\":34},\"filePathRelative\":\"posts/strawberry.md\",\"localizedDate\":\"2022年1月11日\",\"excerpt\":\"\\n<h2>标题 2</h2>\\n<p>这里是内容。</p>\\n<h3>标题 3</h3>\\n<p>这里是内容。</p>\\n\",\"autoDesc\":true}")
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
