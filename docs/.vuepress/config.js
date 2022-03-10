module.exports = {
  title: "Vue3-Element-Plus-Admin 文档",
  description: "Vue3-Element-Plus-Admin-Doc 非官方文档开发步骤",
  theme: "reco",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  // 路径名为 "/<REPO>/"
  base: "/vue3-element-plus-admin/",
  themeConfig: {
    subSidebar: "auto",
    nav: [
      { text: "首页", link: "/" },
      {
        text: "李祎泽的 JavaScript 博客",
        items: [
          { text: "Github", link: "https://github.com/EricLeeN1" },
          {
            text: "掘金",
            link: "https://juejin.cn/user/3280598428825677/posts",
          },
        ],
      },
    ],
    sidebar: [
      {
        title: "欢迎学习",
        path: "/",
        collapsable: false, // 不折叠
        children: [{ title: "学前必读", path: "/" }],
      },
      {
        title: "基础学习",
        path: "/base/ConditionalTypes",
        collapsable: false, // 不折叠
        children: [
          { title: "Vue3 Infos", path: "/base/Vue3" },
          { title: "Element-Plus Infos", path: "/base/Element-Plus" },
        ],
      },
    ],
  },
};
