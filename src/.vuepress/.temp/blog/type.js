export const typesMap = JSON.parse("{\"article\":{\"/\":{\"path\":\"/article/\",\"indexes\":[1,0,2,9,10,11,12,13,14,15,16,3,4,5,8,6,7]}},\"star\":{\"/\":{\"path\":\"/star/\",\"indexes\":[10,11,12,1,2]}},\"timeline\":{\"/\":{\"path\":\"/timeline/\",\"indexes\":[9,10,11,12,13,14,15,1]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

