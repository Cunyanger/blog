import comp from "D:/WorkSpace/MyTest/blog/blog/src/.vuepress/.temp/pages/cyber/page.html.vue"
const data = JSON.parse("{\"path\":\"/cyber/page.html\",\"title\":\"Github+PicGo搭建图床\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Github+PicGo搭建图床\",\"cover\":null,\"icon\":\"mdi:image-multiple-outline\",\"order\":0,\"category\":[\"使用指南\"],\"tag\":[\"博客\",\"图床\"],\"sticky\":true,\"star\":true,\"gitInclude\":[],\"description\":\"github 作为云存储，jsDeliv 作为 CDN，PicGo 充作为图片 git push 工具\"},\"readingTime\":{\"minutes\":0.96,\"words\":288},\"filePathRelative\":\"cyber/page.md\",\"excerpt\":\"<p>github 作为云存储，jsDeliv 作为 CDN，PicGo 充作为图片 git push 工具</p>\\n\",\"autoDesc\":true}")
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
