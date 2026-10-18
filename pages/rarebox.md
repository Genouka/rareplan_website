---
description: RareBox手机版/手表版
permalink: /rarebox/
---

<div class="product-hero">
<div class="product-hero-inner">
<h1>RareBox</h1>
<p class="product-tagline">面向 Android 设备和 Wear OS 智能手表的强大 ADB 工具箱<br/>无需电脑，轻松管理你的设备</p>
<ul class="product-badges">
<li class="product-badge"><i class="material-icons">verified</i> 免费开源</li>
<li class="product-badge"><i class="material-icons">phone_android</i> 手机/手表</li>
<li class="product-badge"><i class="material-icons">computer</i> <a href="/rareboxdesktop/" style="color:inherit;text-decoration:none">电脑版可用</a></li>
<li class="product-badge"><i class="material-icons">security</i> 多种连接方式</li>
</ul>
<div class="product-cta-row">
<a href="#下载" class="product-cta"><i class="material-icons">download</i> 立即下载</a>
<a href="/rareboxproblem/" class="product-cta product-cta-secondary"><i class="material-icons">help_outline</i> 常见问题</a>
</div>
</div>
</div>

<div class="product-specs">
<div class="product-spec-item">
<span class="product-spec-label">最新版本</span>
<span class="product-spec-value">v3.5</span>
</div>
<div class="product-spec-item">
<span class="product-spec-label">支持平台</span>
<span class="product-spec-value">Android / Wear OS / 鸿蒙</span>
</div>
<div class="product-spec-item">
<span class="product-spec-label">连接方式</span>
<span class="product-spec-value">ADB / Shizuku / Root / OTG</span>
</div>
<div class="product-spec-item">
<span class="product-spec-label">费用</span>
<span class="product-spec-value">完全免费</span>
</div>
</div>

## 核心功能

<div class="product-features">

<div class="product-feature-card feature-highlight">
<div class="feature-icon"><i class="material-icons">settings_remote</i></div>
<h4>远程屏幕控制</h4>
<p>远程查看和控制目标设备屏幕，实时画面传输、触摸事件传递、导航按钮，支持沉浸式全屏体验</p>
</div>

<div class="product-feature-card feature-highlight">
<div class="feature-icon"><i class="material-icons">get_app</i></div>
<h4>安装软件</h4>
<p>将 APK 安装到目标设备，支持指定安装位置和高级选项，华为手表可勾选「华为模式」安装</p>
</div>

<div class="product-feature-card">
<div class="feature-icon"><i class="material-icons">folder</i></div>
<h4>文件管理</h4>
<p>浏览和管理本机及远程设备文件，支持新建、重命名、删除、复制/移动、推送/拉取文件</p>
</div>

<div class="product-feature-card">
<div class="feature-icon"><i class="material-icons">apps</i></div>
<h4>应用管理</h4>
<p>查看、启用/停用、卸载应用，清除数据、提取 APK、编辑权限，支持全部/系统/第三方筛选</p>
</div>

<div class="product-feature-card">
<div class="feature-icon"><i class="material-icons">terminal</i></div>
<h4>ADB 终端</h4>
<p>完整的 ADB Shell 命令行终端，支持命令历史记录、Ctrl+C 中断、粘贴和换行输入</p>
</div>

<div class="product-feature-card">
<div class="feature-icon"><i class="material-icons">crop_square</i></div>
<h4>圆屏改方显示</h4>
<p>调整显示比例和 DPI，支持 Overscan 和 wm size 模式，1:1、16:9、9:16 等多种比例</p>
</div>

<div class="product-feature-card">
<div class="feature-icon"><i class="material-icons">vpn_key</i></div>
<h4>密钥管理</h4>
<p>管理 ADB 连接认证密钥，支持导出/导入密钥对、重新生成密钥、跨设备密钥交换</p>
</div>

<div class="product-feature-card">
<div class="feature-icon"><i class="material-icons">devices</i></div>
<h4>设备信息</h4>
<p>查看设备详细信息：基本、系统、CPU、屏幕、内存、存储、网络、应用信息一览无余</p>
</div>

<div class="product-feature-card">
<div class="feature-icon"><i class="material-icons">tune</i></div>
<h4>属性操作</h4>
<p>读取和修改 Android 系统属性（getprop/setprop），支持 ro.、persist.、sys. 等前缀</p>
</div>

<div class="product-feature-card">
<div class="feature-icon"><i class="material-icons">build</i></div>
<h4>常用终端命令</h4>
<p>预设 ADB Shell 快捷入口：激活 Shizuku、修改屏幕尺寸/DPI/显示范围、旋转屏幕、查看电池等</p>
</div>

</div>

## 连接方式

<div class="product-table-wrapper">

| 连接方式 | 说明 | 要求 |
|----------|------|------|
| 新ADB方案（推荐） | TLS加密连接，支持无线配对 | Android 11+ |
| 旧ADB方案 | 传统RSA认证连接 | 兼容所有Android版本 |
| OTG模式 | USB OTG线直接连接 | 本机支持USB Host |
| 免配对连接 | 利用系统漏洞绕过配对认证 | 特定场景 |

</div>

还支持**扫描局域网设备**（mDNS自动搜索）功能。

## 命令后端

<div class="product-table-wrapper">

| 后端 | 说明 | 要求 |
|------|------|------|
| ADB | 通过网络连接远程设备执行命令 | 需先建立ADB连接 |
| Shizuku | 通过Shizuku服务在本机执行命令 | 需安装并启动Shizuku |
| Dhizuku | 通过Dhizuku(Device Owner)执行命令 | 需设备已激活Dhizuku |
| Root | 通过Root权限执行命令 | 设备需已Root |
| Zygote漏洞 | 利用CVE-2024-31317漏洞提权执行 | 需Shizuku/Dhizuku/Root作为前置 |
| WriteSecure | 修改系统安全设置 | 需通过其他后端授权 |

</div>

## 支持的设备

<div class="product-info-box">
<ul>
<li>Android系统手表（部分手表仅能远程调试其他手表）</li>
<li>WearOS系统手表（包括问问、小米等品牌在内大部分手表可以自我调试）</li>
<li>部分华为手表（部分可以自我调试，所有手表都可以远程调试其他手表）</li>
<li>其他类型支持adb调试的电子设备</li>
<li>Android系统手机 / 鸿蒙系统手机（都可以远程调试其他手表）</li>
</ul>
<p style="margin:8px 0 0;font-size:12px;color:var(--text-secondary)">自我调试 = 直接安装到手表上使用；远程调试 = 在一台设备上安装调试另一台设备</p>
</div>

## 版权与费用

<div class="product-info-box">
<ul>
<li>本软件完全由开发者所有并保留一切权利，向用户开放使用权</li>
<li><strong>本软件为免费开源软件，没有任何明示或潜在收费！！！遇到他人倒卖请口嗨他，经济纠纷与开发者无关！</strong></li>
</ul>
</div>

## 介绍视频

[欢迎来三连+关注，点击查看视频详情页](https://www.bilibili.com/video/BV1zk4y177Kg/)

## 下载 {#下载}

务必请先[点击查看常见问题解答](/rareboxproblem)！

<div class="product-download-section">
{% include download.html name="rarebox" %}
</div>

## 开发者指南

全新教程已经准备就绪！

[详细接入指南页面](/rareboxdeveloper/)

## 教程

加入[QQ群/QQ频道](/lianxi)查看。

[点击查看常见问题解答](/rareboxproblem)
