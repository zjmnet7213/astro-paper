---
author: zjmnet7213
pubDatetime: 2026-06-20T04:40:00.000+08:00
title: 如何在本地一边修改一边看效果
slug: local-preview
featured: true
draft: false
tags:
  - 本地预览
  - VS Code
description: 记录如何用 VS Code 启动本地预览，修改文章后马上看到网站效果。
---

修改博客时，最舒服的方式是本地预览：一边在 VS Code 里改文章，一边在浏览器里看最终效果。

## 目录

## 第一次准备

在 VS Code 顶部菜单打开：

```txt
终端 -> 新建终端
```

第一次进入项目后，先安装依赖：

```powershell
pnpm install --no-frozen-lockfile
```

如果提示找不到 `pnpm`，先运行：

```powershell
npm install -g pnpm
```

然后再运行安装命令。

## 启动预览

安装完成后运行：

```powershell
pnpm dev
```

终端会显示一个本地地址，通常是：

```txt
http://localhost:4321
```

用浏览器打开这个地址，就能看到本地网站。

## 修改后怎么看效果

在 `src/content/posts` 目录里打开文章文件，修改后按：

```txt
Ctrl + S
```

浏览器会自动刷新，马上看到效果。

以后每次修改文章，一般只需要运行：

```powershell
pnpm dev
```

不用每次都重新安装依赖。
