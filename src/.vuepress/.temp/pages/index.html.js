import comp from "D:/WorkSpace/MySpace/blog_theme/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"BlogHome\",\"icon\":\"house\",\"title\":\"Home\",\"heroImage\":\"/logo.png\",\"heroText\":\"阿阳妙妙屋\",\"heroFullScreen\":true,\"bgImage\":\"https://cdn.jsdelivr.net/gh/Cunyanger/pic_bed@master/bg_mor_stu.png\",\"bgImageDark\":\"https://cdn.jsdelivr.net/gh/Cunyanger/pic_bed@master/bg_nig_stu.png\",\"tagline\":\"岂能尽如人意，但求无愧于心\",\"footer\":\"这并非终点，一切才刚刚开始...\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://cunyanger.github.io/blog/blog/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Yanger's Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Home\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Home\\\"}\"]]},\"readingTime\":{\"minutes\":0.17,\"words\":51},\"filePathRelative\":\"README.md\",\"excerpt\":\"\"}")
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
