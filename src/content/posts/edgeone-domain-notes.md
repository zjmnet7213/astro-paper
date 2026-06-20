---
author: zjmnet7213
pubDatetime: 2026-06-20T05:00:00.000+08:00
title: 这个网站为什么改用 EdgeOne Pages
slug: edgeone-domain-notes
featured: false
draft: false
tags:
  - EdgeOne
  - 域名
  - 国内访问
description: 记录从 Vercel/Cloudflare 迁到 EdgeOne Pages 的原因，以及免费域名的注意事项。
---

这个博客最开始尝试过 Vercel 和 Cloudflare Pages，但国内访问不稳定。后来改用腾讯 EdgeOne Pages，国内外都能正常打开。

## 目录

## 为什么不用默认海外平台

Vercel 和 Cloudflare Pages 很适合海外访问，但在国内网络环境下，默认域名和海外节点可能会出现打不开、加载慢或连接超时。

对个人博客来说，读者能顺利打开比平台名字更重要。

## EdgeOne Pages 的作用

EdgeOne Pages 可以直接连接 GitHub 仓库。只要把代码推送到 GitHub，它就会自动构建和发布。

目前这个网站的流程是：

```txt
GitHub 仓库 -> EdgeOne Pages 自动部署 -> 域名访问
```

网站地址：[https://zjmnet7213.bbroot.com/](https://zjmnet7213.bbroot.com/)

## 免费域名的注意事项

免费域名可以临时使用，但稳定性不一定一致。即使是在同一个网站申请的免费域名，不同后缀也可能表现不同。

如果某个免费域名在国内解析异常，就不要继续用它。选择能稳定访问的域名即可。

长期来看，如果想更正规、更稳定，最好购买正式域名并完成备案。
