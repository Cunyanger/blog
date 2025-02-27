import comp from "D:/WorkSpace/MySpace/blog_theme/src/.vuepress/.temp/pages/website/website.html.vue"
const data = JSON.parse("{\"path\":\"/website/website.html\",\"title\":\"网页导航\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"网页导航\",\"cover\":null,\"icon\":\"file\",\"order\":3,\"category\":[\"导航\"],\"tag\":[\"页面配置\",\"使用指南\"],\"sticky\":true,\"gitInclude\":[],\"description\":\"工具类\"},\"readingTime\":{\"minutes\":0.35,\"words\":106},\"filePathRelative\":\"website/website.md\",\"excerpt\":\"<h2>工具类</h2>\\n<table>\\n<thead>\\n<tr>\\n<th></th>\\n<th></th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td><a href=\\\"https://fontawesome.com.cn/v5\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">图标库v5 - FontAwesome 字体图标中文Icon</a></td>\\n<td></td>\\n</tr>\\n<tr>\\n<td></td>\\n<td></td>\\n</tr>\\n</tbody>\\n</table>\\n\",\"autoDesc\":true}")
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
