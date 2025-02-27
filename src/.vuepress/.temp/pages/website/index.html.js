import comp from "D:/WorkSpace/MySpace/blog_theme/src/.vuepress/.temp/pages/website/index.html.vue"
const data = JSON.parse("{\"path\":\"/website/\",\"title\":\"网页导航\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"网页导航\",\"index\":false,\"icon\":\"globe\",\"category\":[\"导航\"],\"gitInclude\":[]},\"readingTime\":{\"minutes\":0.05,\"words\":14},\"filePathRelative\":\"website/README.md\",\"excerpt\":\"\"}")
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
