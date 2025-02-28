export const typesMap = JSON.parse("{\"article\":{\"/\":{\"path\":\"/article/\",\"indexes\":[0,1,4,5,6,7,8,9,10,11,2,3]}},\"star\":{\"/\":{\"path\":\"/star/\",\"indexes\":[5,6,7,1]}},\"timeline\":{\"/\":{\"path\":\"/timeline/\",\"indexes\":[4,5,6,7,8,9,10]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

