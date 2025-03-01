export const typesMap = JSON.parse("{\"article\":{\"/\":{\"path\":\"/article/\",\"indexes\":[0,1,15,2,3,4,5,6,7,8,9,10,11,12,13,14]}},\"star\":{\"/\":{\"path\":\"/star/\",\"indexes\":[1]}},\"timeline\":{\"/\":{\"path\":\"/timeline/\",\"indexes\":[]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

