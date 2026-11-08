---
description: RareBox电脑版
permalink: /rareboxdesktop/
image: /assets/img/rboxdesktop/overview.png
---

{% assign rbd = site.data.apps.rareboxdesktop %}
{% assign rbd_ver = rbd.list[0].ver %}

<div class="product-hero" style="background:linear-gradient(135deg,#1b1035 0%,#2e1065 42%,#4c1d95 100%)">
<div class="product-hero-inner">
<h1>RareBox Desktop</h1>
<p class="product-tagline">Rust + GPUI 打造的桌面调试工具箱<br/>把 Wear OS、Android 与 HarmonyOS 设备接到电脑上：投屏、装应用、传文件、看日志</p>
<ul class="product-badges">
<li class="product-badge"><i class="material-icons">computer</i> Windows 10/11</li>
<li class="product-badge"><i class="material-icons">usb</i> 内置 ADB 与 hdc</li>
<li class="product-badge"><i class="material-icons">check_circle</i> 免费开源</li>
<li class="product-badge"><i class="material-icons">phone_android</i> <a href="/rarebox/" style="color:inherit;text-decoration:none">手机版可用</a></li>
</ul>
<div class="product-cta-row">
<a href="#下载" class="product-cta"><i class="material-icons">file_download</i> 立即下载</a>
<a href="#功能" class="product-cta product-cta-secondary"><i class="material-icons">apps</i> 查看功能</a>
<a href="#常见问题" class="product-cta product-cta-secondary"><i class="material-icons">help_outline</i> 常见问题</a>
</div>
</div>
</div>

<div class="product-specs">
<div class="product-spec-item">
<span class="product-spec-label">最新版本</span>
<span class="product-spec-value">v{{ rbd_ver }} 公测版</span>
</div>
<div class="product-spec-item">
<span class="product-spec-label">支持系统</span>
<span class="product-spec-value">Windows 10/11 · macOS · Linux · Android</span>
</div>
<div class="product-spec-item">
<span class="product-spec-label">调试对象</span>
<span class="product-spec-value">Wear OS / Android / HarmonyOS</span>
</div>
<div class="product-spec-item">
<span class="product-spec-label">费用</span>
<span class="product-spec-value">完全免费</span>
</div>
</div>

## 介绍

RareBox Desktop 是 RareBox 的电脑端版本，用 Rust 与 [GPUI](https://github.com/zed-industries/zed/tree/main/crates/gpui) 编写。
它不依赖本机安装 platform-tools、scrcpy 或 DevEco Studio：ADB 与 hdc 随程序分发，装完打开就能连设备。

所有设备数据、文件操作和投屏画面都来自真实的 ADB / hdc，没有模拟数据。

## 功能 {#功能}

<div class="product-features">

<div class="product-feature-card feature-highlight">
<div class="feature-icon"><i class="material-icons">usb</i></div>
<h4>零配置 ADB</h4>
<p>内置 ADB 35.0.2 与 Windows USB 库，首次启动自动解包；设置里仍可用自定义路径覆盖</p>
</div>

<div class="product-feature-card feature-highlight">
<div class="feature-icon"><i class="material-icons">settings_remote</i></div>
<h4>实时投屏控制</h4>
<p>内置 scrcpy-server，画面在应用内解码；鼠标点击、拖动，发送返回 / 主页 / 最近任务 / 电源键与文字</p>
</div>

<div class="product-feature-card">
<div class="feature-icon"><i class="material-icons">phonelink</i></div>
<h4>内置 hdc（HarmonyOS）</h4>
<p>从源码构建的 hdc 3.2.0g 随程序分发，不依赖 DevEco Studio，HarmonyOS 设备直接连</p>
</div>

<div class="product-feature-card">
<div class="feature-icon"><i class="material-icons">verified_user</i></div>
<h4>HAP 签名与安装</h4>
<p>纯 Rust 完成 HAP / HSP 签名，自动模式在本地生成密钥并向 AGC 申请调试证书与 Profile</p>
</div>

<div class="product-feature-card">
<div class="feature-icon"><i class="material-icons">apps</i></div>
<h4>应用管理</h4>
<p>用户 / 系统应用一栏看清，支持搜索、启动、停止、卸载、清缓存与导出 APK</p>
</div>

<div class="product-feature-card">
<div class="feature-icon"><i class="material-icons">get_app</i></div>
<h4>APK 分包安装</h4>
<p>一次选择多个 APK，按包名自动分组走 <code>install-multiple</code>，可切换覆盖、降级、授权全部权限与允许测试包</p>
</div>

<div class="product-feature-card">
<div class="feature-icon"><i class="material-icons">folder</i></div>
<h4>文件传输</h4>
<p>浏览设备文件系统，上传、下载、删除文件或目录，路径与权限一目了然</p>
</div>

<div class="product-feature-card">
<div class="feature-icon"><i class="material-icons">code</i></div>
<h4>终端</h4>
<p>在设备 shell 中执行 ADB / hdc 命令，保留历史，随时复用</p>
</div>

<div class="product-feature-card">
<div class="feature-icon"><i class="material-icons">subject</i></div>
<h4>日志查看</h4>
<p>抓取 logcat 与 HiLog，按级别和关键字过滤，结果一键导出用于排查</p>
</div>

<div class="product-feature-card">
<div class="feature-icon"><i class="material-icons">restart_alt</i></div>
<h4>一键重启</h4>
<p>普通重启，也能直接进入 Recovery、Bootloader、Fastbootd 与 EDL</p>
</div>

<div class="product-feature-card">
<div class="feature-icon"><i class="material-icons">build</i></div>
<h4>USB 驱动安装</h4>
<p>内置 UniversalAdbDriver，一键安装 / 卸载；只对驱动写入单独提权，应用本身无需管理员运行</p>
</div>

<div class="product-feature-card">
<div class="feature-icon"><i class="material-icons">system_update</i></div>
<h4>检查更新与公告</h4>
<p>启动时检查新版本，弹窗展示版本、更新说明与下载入口；顶栏铃铛查看公告与以往公告</p>
</div>

</div>

## 界面 {#界面}

<div class="product-gallery">
<figure class="product-shot">
<picture>
<source srcset="{{ '/assets/img/rboxdesktop/overview.webp' | relative_url }}" type="image/webp">
<img src="{{ '/assets/img/rboxdesktop/overview.png' | relative_url }}" width="1400" height="918" alt="RareBox Desktop 概览页面，显示设备型号、电量、存储与快捷操作" loading="lazy">
</picture>
<figcaption>概览页：设备型号、系统版本、电量、存储、内存与运行时间一屏读完；左侧是固定任务栏</figcaption>
</figure>
</div>

界面使用中文，按任务分组：概览、连接、应用、屏幕与显示、远程控制、文件、终端、日志、设置。
没有设备时，「连接」页会直接给出 USB 与无线两条路径的引导；HarmonyOS 设备在同一套界面里切换到 hdc 工作区。

## 支持的设备 {#设备}

<div class="product-info-box">
<ul>
<li>Wear OS 手表与 Android 手机 / 平板（USB 调试或无线调试）</li>
<li>HarmonyOS / OpenHarmony 设备（hdc，USB 或 <code>hdc tconn</code> 无线连接）</li>
<li>其他开启 ADB 调试的 Android 设备</li>
<li>一台电脑同时只连接并控制一台设备</li>
</ul>
</div>

## 连接方式

<div class="product-table-wrapper" markdown="1">

| 方式 | 适用 | 说明 |
|------|------|------|
| USB 直连 | Android / Wear OS / HarmonyOS | 插线后在设备上点「允许 USB 调试」；Windows 首次可能需要安装驱动 |
| 无线 ADB | Android 11+ | 在「连接」页用配对码配对，再填写地址连接 |
| 传统无线 | 旧版 Android | 先 <code>adb tcpip 5555</code>，再连接 <code>IP:5555</code> |
| hdc 无线 | HarmonyOS | 在「连接」页执行 <code>hdc tconn IP:端口</code> |
| USB OTG（Android 端） | 手机 / 平板作主机 | 用 OTG 线把设备接到运行 RareBox Desktop 的 Android 设备上 |

</div>

## 运行环境

<div class="product-table-wrapper" markdown="1">

| 平台 | 安装包 | 说明 |
|------|--------|------|
| Windows 10/11 | <code>.exe</code> | 主要验证平台，内置 ADB 与 hdc |
| macOS | 通用二进制 | Apple Silicon + Intel；未公证，首次打开请右键 →「打开」 |
| Linux | x86_64 | 需要发行包内附带 hdc，否则回退到本机 SDK |
| Android | <code>.apk</code> | 可直接侧载，支持 USB OTG 直连与无线 ADB |

</div>

设备端需要开启开发者选项与 USB 调试；Windows 上如果设备只显示充电，请在「连接」页安装驱动。

## 常见问题 {#常见问题}

<div class="product-faq">
<details>
<summary>需要先安装 platform-tools、scrcpy 或 DevEco Studio 吗？</summary>
<p>不需要。Windows 版内置 ADB 35.0.2 与 USB 库，首次启动自动解包；hdc 也随程序分发。
macOS / Linux 会优先使用内置副本，找不到时才回退到系统 <code>adb</code>。也可以在「设置」里指定自定义路径。</p>
</details>
<details>
<summary>手表插上了，但应用里看不到设备？</summary>
<p>多半是系统没有把它识别成「Android ADB Interface」。在「连接」页点「安装驱动」，
应用会安装 UniversalAdbDriver 并绑定系统自带的 WinUSB；这一步会单独弹出 UAC，应用本身不需要管理员权限。</p>
</details>
<details>
<summary>支持 HarmonyOS 设备吗？</summary>
<p>支持。应用内置 hdc，可完成设备列表、连接、端口转发、应用管理、文件传输、shell、HiLog、截图与 UI 控制，
以及 HAP / HSP 的签名与安装。自动签名模式需要登录华为开发者账号，也可以导入 DevEco 或 AGC 生成的材料。</p>
</details>
<details>
<summary>投屏会有延迟吗？</summary>
<p>画面会经过「设备编码 → ADB 转发 → 应用解码 → GPU 绘制」几个环节，输入回显不会像设备本地触控那样即时。
使用 release 构建、在性能更好的电脑上运行，或在代码里降低分辨率，都能明显改善。</p>
</details>
<details>
<summary>能同时连接多台设备吗？</summary>
<p>目前一次只连接并控制一台设备。远程控制只传输视频，不传输音频；暂不支持剪贴板、文件拖放、多指手势与游戏手柄。</p>
</details>
<details>
<summary>怎么检查更新？更新会被强制吗？</summary>
<p>启动时会自动检查一次，也可以在「设置 → 关于 RareBox Desktop」手动检查。发布方可以把某个版本标记为强制更新，
或设置最低支持版本，此时客户端不会提供「稍后」。</p>
</details>
<details>
<summary>会把我的设备数据上传吗？</summary>
<p>不会。设备数据、文件与投屏画面都留在本机；应用只向更新与公告接口发起只读请求。</p>
</details>
</div>

## 版权与费用 {#版权}

<div class="product-info-box">
<ul>
<li>本软件完全由开发者所有并保留一切权利，向用户开放使用权</li>
<li>本项目使用 MIT 许可证，源码可自由查阅与构建</li>
<li><strong>本软件没有任何明示或潜在收费！！！遇到他人倒卖请举报并通过法律途径解决，经济纠纷与开发者无关！</strong></li>
</ul>
</div>

## 下载 {#下载}

<div class="product-download-section">
{% include download.html name="rareboxdesktop" %}
</div>

<div class="product-live-release" id="rbd-live-release" data-api="https://rareboxnextapi.qiumingsanyu.top">
<div class="live-head">
<span class="live-version" data-live-version>最新构建</span>
<span class="live-meta" data-live-meta></span>
</div>
<p class="live-notes" data-live-notes></p>
<div class="live-links" data-live-links></div>
</div>

<script src="{{ '/assets/js/rareboxdesktop.js' | relative_url }}" defer></script>

如果没有找到适合你设备的安装包，可以通过[联系方式](/lianxi/)获取内测版本，或在应用内使用「检查更新」。

## 相关页面

* [RareBox 手机版 / 手表版](/rarebox/)
* [RareBox 常见问题解答](/rareboxproblem/)
* [Rare 计划开发文档](https://github.com/Genouka/rareplan_docs)
