export const categoriesMap = JSON.parse("{\"category\":{\"/\":{\"path\":\"/category/\",\"map\":{\"导航\":{\"path\":\"/category/%E5%AF%BC%E8%88%AA/\",\"indexes\":[0]},\"使用指南\":{\"path\":\"/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/\",\"indexes\":[1,2,3]},\"读书\":{\"path\":\"/category/%E8%AF%BB%E4%B9%A6/\",\"indexes\":[4]}}}},\"tag\":{\"/\":{\"path\":\"/tag/\",\"map\":{\"页面配置\":{\"path\":\"/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/\",\"indexes\":[0]},\"使用指南\":{\"path\":\"/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/\",\"indexes\":[0]},\"博客\":{\"path\":\"/tag/%E5%8D%9A%E5%AE%A2/\",\"indexes\":[1]},\"图床\":{\"path\":\"/tag/%E5%9B%BE%E5%BA%8A/\",\"indexes\":[1]},\"Markdown\":{\"path\":\"/tag/markdown/\",\"indexes\":[3]},\"人月神话\":{\"path\":\"/tag/%E4%BA%BA%E6%9C%88%E7%A5%9E%E8%AF%9D/\",\"indexes\":[4]},\"项目管理\":{\"path\":\"/tag/%E9%A1%B9%E7%9B%AE%E7%AE%A1%E7%90%86/\",\"indexes\":[4]}}}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

