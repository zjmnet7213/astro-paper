---
author: zjmnet7213
pubDatetime: 2026-06-20T04:50:00.000+08:00
title: 修改文章后怎样发布到网站
slug: publish-with-github
featured: false
draft: false
tags:
  - GitHub
  - 发布上线
description: 记录使用 GitHub Desktop 提交和推送文章，触发 EdgeOne 自动部署的流程。
---

本地改完文章或者在Vs code修改后，需要把改动上传到 GitHub。GitHub， 更新后，EdgeOne Pages 会自动重新部署网站。
整个流程是这样的:VS Code 修改文章 → Ctrl + S 保存 → 本地预览博客.bat 自动预览 → 浏览器看到效果


注意两点：
本地预览博客.bat 打开的黑色窗口不要关，关了本地预览就停了。
这只是在你电脑本地生效。想让线上网站也变，需要在 GitHub Desktop 里：
Commit → Push origin → 等 EdgeOne 自动部署。

## 本地预览批处理文件

文件名：`本地预览博客.bat`

把下面内容保存成这个批处理文件后，双击它就可以启动本地预览：

```txt
@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo 正在启动本地博客预览...
echo.
echo 如果浏览器没有自动打开，请手动访问：
echo http://localhost:4321/
echo.

start "" "http://localhost:4321/"
corepack pnpm dev --host 127.0.0.1

pause
```

## 用 GitHub Desktop 上传

打开 GitHub Desktop 后，常用按钮可以这样理解：

```txt
Fetch origin = 检查云端有没有更新
Pull origin = 拉取云端最新内容
Commit to main = 提交到本地记录
Push origin = 上传到 GitHub
```

## 推荐流程

每次修改前，先点：

```txt
Fetch origin
```

如果按钮变成 `Pull origin`，再点一次，把最新内容拉下来。

修改文章并保存后，GitHub Desktop 左侧会显示改动文件。

左下角的 `Summary` 填一句说明，例如：

```txt
更新博客内容
```

然后依次点击：

```txt
Commit to main
Push origin
```

## 什么时候网站会更新

推送成功后，EdgeOne Pages 会自动构建并发布。一般等几分钟，再刷新网站就能看到最新内容。

如果没有立刻更新，不用重复提交，可以先等一会儿再刷新。
