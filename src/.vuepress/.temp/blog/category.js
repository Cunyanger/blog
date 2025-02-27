export const categoriesMap = JSON.parse("{\"category\":{\"/\":{\"path\":\"/category/\",\"map\":{\"导航\":{\"path\":\"/category/%E5%AF%BC%E8%88%AA/\",\"indexes\":[0]},\"使用指南\":{\"path\":\"/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/\",\"indexes\":[1,2,3,4,5,6,7]},\"指南\":{\"path\":\"/category/%E6%8C%87%E5%8D%97/\",\"indexes\":[8]},\"苹果\":{\"path\":\"/category/%E8%8B%B9%E6%9E%9C/\",\"indexes\":[9,10,11,12,13,14,15]},\"水果\":{\"path\":\"/category/%E6%B0%B4%E6%9E%9C/\",\"indexes\":[9]}}}},\"tag\":{\"/\":{\"path\":\"/tag/\",\"map\":{\"页面配置\":{\"path\":\"/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/\",\"indexes\":[1,0]},\"使用指南\":{\"path\":\"/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/\",\"indexes\":[1,0]},\"博客\":{\"path\":\"/tag/%E5%8D%9A%E5%AE%A2/\",\"indexes\":[2]},\"图床\":{\"path\":\"/tag/%E5%9B%BE%E5%BA%8A/\",\"indexes\":[2]},\"禁用\":{\"path\":\"/tag/%E7%A6%81%E7%94%A8/\",\"indexes\":[4]},\"加密\":{\"path\":\"/tag/%E5%8A%A0%E5%AF%86/\",\"indexes\":[5]},\"布局\":{\"path\":\"/tag/%E5%B8%83%E5%B1%80/\",\"indexes\":[8]},\"Markdown\":{\"path\":\"/tag/markdown/\",\"indexes\":[6]},\"红\":{\"path\":\"/tag/%E7%BA%A2/\",\"indexes\":[9,10,11,12,13,14,15]},\"大\":{\"path\":\"/tag/%E5%A4%A7/\",\"indexes\":[9,10,11,12,13,14,15]},\"圆\":{\"path\":\"/tag/%E5%9C%86/\",\"indexes\":[9,10,11,12,13,14,15]}}}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

