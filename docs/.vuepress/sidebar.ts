import { sidebar } from "vuepress-theme-hope";
// .vuepress/config.js
// 精选图标：https://vuepress-theme-hope.github.io/v2/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default sidebar([
  "/DailyRoutine",
  "/Fitness",
  "/Read",
  {
    text: "🐋 周报",
    icon: "",
    prefix: "/weekly/",
    link: "",
    collapsable: true,
    children: "structure",
  },
  {
    text: "Blog",
    icon: "blog",
    prefix: "/_posts/",
    link: "/blog",
    collapsable: true,
    children: "structure",
  },
  {
    text: "🚀 资料",
    icon: "",
    prefix: "/info/",
    link: "",
    collapsable: true,
    children: "structure",
  },
  {
    text: "🧰 工具",
    icon: "",
    prefix: "/tools/",
    link: "",
    collapsable: true,
    children: "structure",
  },
  {
    text: "🌐 资源",
    icon: "",
    prefix: "/data/",
    link: "",
    collapsable: true,
    children: "structure",
  },
  {
    text: "🏗️ 学术",
    icon: "",
    prefix: "/study/",
    link: "",
    collapsable: true,
    children: "structure",
  },
  {
    text: "idea",
    icon: "check",
    prefix: "/idea/",
    link: "",
    collapsable: true,
    children: "structure",
  },
  {
    text: "生活",
    icon: "check",
    prefix: "/life/",
    link: "",
    collapsable: true,
    children: "structure",
  },

]);
