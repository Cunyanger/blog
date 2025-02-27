import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/cyber/",
  {
    text: "简语集文",
    icon: "book",
    prefix: "/notes/",
    children: [
      {
        text: "专业",
        icon: "pen-to-square",
        prefix: "software/",
        children: [
          { text: "人月神话", icon: "pen-to-square", link: "The Mythical Man-Month" },
          { text: "Head First设计模式", icon: "pen-to-square", link: "2" },
          { text: "计算机网络：自顶向下方法", icon: "pen-to-square", link: "2" },
          { text: "On Java 8", icon: "pen-to-square", link: "2" },
          { text: "Effective Java", icon: "pen-to-square", link: "2" },
          { text: "SQL 反模式", icon: "pen-to-square", link: "2" },
          { text: "敏捷软件开发：原则、模式与实践", icon: "pen-to-square", link: "2" },
          { text: "JavaScript高级程序设计", icon: "pen-to-square", link: "2" },
          { text: "JavaScript权威指南", icon: "pen-to-square", link: "2" },
          { text: "鸟哥的Linux私房菜", icon: "pen-to-square", link: "2" },
          "4",
        ],
      },
      {
        text: "社科",
        icon: "pen-to-square",
        prefix: "social_sciences/",
        children: [
          { text: "苹果1", icon: "pen-to-square", link: "1" },
          { text: "苹果2", icon: "pen-to-square", link: "2" },
          "3",
          "4",
        ],
      },
      {
        text: "文学",
        icon: "pen-to-square",
        prefix: "literature/",
        children: [
          { text: "苹果1", icon: "pen-to-square", link: "1" },
          { text: "苹果2", icon: "pen-to-square", link: "2" },
          "3",
          "4",
        ],
      },
      { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
  "/website"
  
]);
