import comp from "D:/WorkSpace/MyTest/blog/blog/src/.vuepress/.temp/pages/intro.html.vue"
const data = JSON.parse("{\"path\":\"/intro.html\",\"title\":\"个人介绍\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"mdi:account\",\"cover\":null,\"feed\":false,\"seo\":false,\"gitInclude\":[],\"head\":[]},\"readingTime\":{\"minutes\":0.06,\"words\":17},\"filePathRelative\":\"intro.md\"}")
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
