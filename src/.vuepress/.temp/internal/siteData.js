export const siteData = JSON.parse("{\"base\":\"/blog/\",\"lang\":\"zh-CN\",\"title\":\"Yanger's Blog\",\"description\":\"阿阳妙妙屋\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/blog/favicon.svg\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
