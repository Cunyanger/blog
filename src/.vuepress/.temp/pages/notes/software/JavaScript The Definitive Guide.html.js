import comp from "D:/WorkSpace/MyTest/blog/blog/src/.vuepress/.temp/pages/notes/software/JavaScript The Definitive Guide.html.vue"
const data = JSON.parse("{\"path\":\"/notes/software/JavaScript%20The%20Definitive%20Guide.html\",\"title\":\"人月神话\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"category\":[\"读书\"],\"tag\":[\"人月神话\",\"项目管理\"],\"gitInclude\":[],\"description\":\"人月神话\"},\"readingTime\":{\"minutes\":0.08,\"words\":24},\"filePathRelative\":\"notes/software/JavaScript The Definitive Guide.md\",\"excerpt\":\"\\n\",\"autoDesc\":true}")
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
