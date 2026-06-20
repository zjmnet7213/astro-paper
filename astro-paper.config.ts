import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://zjmnet7213.bbroot.com/",
    title: "个人博客",
    description: "记录学习、工具、网站搭建和日常思考的中文个人博客。",
    author: "zjmnet7213",
    profile: "https://github.com/zjmnet7213",
    ogImage: "default-og.jpg",
    lang: "zh-CN",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/zjmnet7213" },
  ],
  shareLinks: [
    { name: "mail", url: "mailto:?subject=推荐一篇文章&body=" },
  ],
});
