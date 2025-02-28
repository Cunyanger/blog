import comp from "D:/WorkSpace/MySpace/blog_theme/src/.vuepress/.temp/pages/.~website.html.vue"
const data = JSON.parse("{\"path\":\"/.~website.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"gitInclude\":[]},\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":\".~website.md\",\"excerpt\":\"\"}")
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
