import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "赛博指南",
      icon: "laptop-code",
      prefix: "cyber/",
      link: "cyber/",
      children: "structure",
    },
    {
      text: "日常小记",
      icon: "laptop-code",
      prefix: "daily/",
      link: "daily/",
      children: "structure",
    },
  ],
});
