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
<span class="product-spec-value">v4.0.0</span>
</div>
<div class="product-spec-item">
<span class="product-spec-label">支持平台</span>
<span class="product-spec-value">Android / Wear OS</span>
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

```
RareBox 手表工具箱 —— 全部功能清单
|
|-- 一、首页与连接管理
|   |-- 连接列表
|   |   |-- 保存的连接（按最近使用排序、显示后端徽标与地址）
|   |   |-- 点击任意连接进入连接页
|   |   `-- 空列表时显示新手引导横幅
|   |-- 添加连接 / 连接向导（5 种场景，逐步引导）
|   |   |-- 无线连接（推荐）：安卓 11+ 配对码配对 -> 填写 IP + 连接端口
|   |   |-- USB 线直连（OTG）：免网络、需目标设备开启 USB 调试
|   |   |-- 管理本机：标准 API / Shizuku / Dhizuku / Root / Zygote 按引导配置
|   |   |-- 传统网络 ADB：填 IP:端口（默认 5555，可连 127.0.0.1:5555）
|   |   `-- RareBox 转发（高级）：填对方 IP + 端口 + 令牌
|   |   |-- 每个场景均支持：保存前测试连接、失败时给出排查建议
|   |-- 连接在线检测
|   |   |-- 进入连接页自动探测设备是否在线
|   |   |-- 离线时收起功能列表，只保留"连接"按钮
|   |   `-- 每 5 秒自动重测，恢复在线后功能自动重新出现
|   |-- 输入自动容错（应用设置中可开关）
|   |   |-- 全角字符自动纠正（１２７、：、。 -> 半角）
|   |   |-- 非标准分隔符识别（127,0,0。1：5555 -> 127.0.0.1:5555）
|   |   |-- 只填 IP 不填端口：自动扫描目标设备开放 ADB 端口（常见端口 + 高位段全范围）
|   |   `-- 终端命令、DPI/分辨率输入、常用命令参数同样生效
|   |-- OTG 支持流程
|   |   |-- USB 设备插入自动识别并打开连接
|   |   |-- USB Host 能力检测、USB 权限申请与回调
|   |   `-- OTG"重插重连"，不支持时给出错误引导（改用网络 ADB 等）
|   `-- 欢迎向导 / 新手引导
|       |-- 首次启动自动弹出：认识应用 -> 三步上手 -> 去连接向导
|       `-- 首页菜单/首页横幅可随时重看
|
|-- 二、连接页
|   |-- 连接信息头（名称 / 后端类型 / 状态 / 地址）
|   |-- 连接体检：发送测试命令确认连接可用，失败自动给出针对性排查清单
|   |-- 修复此连接：本机后端未就绪时打开配置向导
|   |-- 重命名连接、删除连接
|   |-- 重插重连（OTG 连接）
|   |-- 功能列表（按后端能力自动过滤）
|   |   |-- 安装软件、常用终端命令、激活其他应用、ADB 终端、传输文件
|   |   |-- 圆屏改方显示、文件管理、应用管理、属性操作
|   |   |-- 应用商店、设备信息、部署 RB、屏幕形状
|   |   `-- 远程屏幕控制（仅网络 ADB 连接）
|   `-- 申请 WRITE_SECURE 权限（标准 API 未授权时显示）
|
|-- 三、命令后端（7 种执行身份）
|   |-- ADB（无线 / OTG 远程）
|   |-- 标准 API（本机免安装；修改系统安全设置需 WRITE_SECURE 授权）
|   |-- Shizuku（本机高权限，需已安装并启动 Shizuku）
|   |-- Dhizuku（设备管理员方案）
|   |-- Root（最高权限）
|   |-- Zygote 漏洞（CVE-2024-31317 提权，实验性）
|   `-- RareBox 转发（共享另一台 RareBox 的连接）
|
|-- 四、热门功能
|   |-- 安装软件
|   |   |-- 普通 APK 安装（本机后端 / 远程推送）
|   |   |-- XAPK / APKS / APKM 分包安装包
|   |   |   |-- 自动解包、按 Base 优先排序、推送全部组件、一次性安装
|   |   |   `-- 内含 OBB 游戏数据自动推送到 /sdcard/Android/obb/包名
|   |   |-- 华为手表模式、跨设备安装开关
|   |   `-- 高级选项（pm install 标志）：-r/-R、-t、-f、-d、-g、--dont-kill、
|   |       限制权限、--instant、--full、--preload、--apex、--force-sdk、
|   |       --non-staged、--force-non-staged、--ignore-dexopt、
|   |       --disable-auto-deps、--update-ownership
|   |-- 圆屏改方显示
|   |   |-- 自动检测目标设备屏幕尺寸 / DPI（支持远程检测）
|   |   |-- 显示比例：1:1 方形 / 16:9 横屏 / 9:16 竖屏 / 4:3 横屏 / 3:4 竖屏
|   |   |-- 执行方式：wm size 模式（Android 11+）/ Overscan 模式（Android 10-）
|   |   |-- 手动输入屏幕尺寸
|   |   |-- 修改 DPI（安全范围提示，极端值拦截警告）
|   |   |-- 还原 DPI、还原显示范围（一键还原）
|   |   `-- 执行日志与结果状态显示
|   |-- 应用管理
|   |   |-- 本机 / 远程模式切换、刷新
|   |   |-- 筛选：全部应用 / 系统应用 / 第三方应用 / 已停用 / 已启用
|   |   |-- 停用 / 启用预装应用
|   |   |-- 卸载（系统应用仅卸载当前用户，恢复出厂可恢复）
|   |   |-- 清除数据
|   |   |-- 提取安装包（导出 APK）
|   |   |-- 编辑权限（权限编辑器）
|   |   `-- 查看应用属性（包名、APK 路径、类型、状态）
|   |-- 文件管理
|   |   |-- 本机 / 远程双模式浏览、路径栏与历史导航
|   |   |-- 新建文件夹、重命名、删除、移动、复制
|   |   |-- 推送文件、拉取文件
|   |   |-- 文件属性（名称/路径/类型/大小/修改时间/读写执行权限/子项数量）
|   |   `-- 长按弹出操作菜单
|   |-- 应用商店
|   |   |-- 从服务器拉取适配手表的应用列表（applist.json）
|   |   `-- 下载并安装：静默安装（pm install）/ 推送远端安装 / 安装到本机
|   `-- 传输文件：推送 / 拉取文件
|
|-- 五、更多工具
|   |-- 常用终端命令（点选式，每条含"做什么 / 风险与还原"，参数填写 + 二次确认）
|   |   |-- 激活 Shizuku
|   |   |-- 查看电池信息（dumpsys battery）
|   |   |-- 修改屏幕尺寸 / 重置屏幕尺寸（wm size）
|   |   |-- 修改 DPI / 重置 DPI（wm density）
|   |   |-- 修改显示范围 / 重置显示范围（wm overscan）
|   |   `-- 屏幕自动旋转开关 / 设置屏幕方向（content insert）
|   |-- 激活其他应用（选应用 -> 看说明 -> 执行 -> 成功标志与失败排查）
|   |   |-- Shizuku（启动高权限服务）
|   |   |-- Dhizuku（设为设备所有者，共享管理员权限）
|   |   |-- 冰箱 Ice Box（免 Root 冻结模式）
|   |   |-- 权限狗 PermissionDog（假权限，ADB 模式）
|   |   `-- 黑阈 Brevent（shell 启动拦截服务）
|   |-- ADB 终端：完整命令行交互，命令历史
|   |-- 属性操作：getprop / setprop 系统属性
|   |-- 设备信息：品牌 / 系统 / CPU / 屏幕 / 内存 / 存储 / 网络 / 应用 等分区
|   |-- 部署 RB：把 RareBox 安装到目标设备（自部署）
|   |-- 系统设置：直达系统设置各页面（含隐藏页）
|   |-- 屏幕形状：本应用 圆屏 / 方屏 / 自动 适配
|   `-- 远程屏幕控制（网络 ADB 连接）
|       |-- 内置开源 scrcpy v5.0 服务端（Apache-2.0），自动部署到目标设备
|       |-- 实时画面解码显示（VideoStreamDecoder）
|       |-- 触摸 / 按键操控（ControlEventSender）
|       |-- 码率与分辨率可调
|       |-- 横竖屏跟随
|       `-- 仅观看模式
|
|-- 六、连接与密钥
|   |-- 添加连接 / 连接向导（同首页入口）
|   |-- 免配对连接（实验性，跳过配对码直连）
|   |-- 密钥管理
|   |   |-- 导出公钥 / 导出密钥对
|   |   |-- 导入密钥对（旧版 RSA 文件）/ 导入新版密钥（KeyStore 导出）
|   |   |-- 重新生成密钥（二次确认，已配对设备需重新配对）
|   |   `-- 查看密钥信息（新旧密钥存在状态、当前 ADB 模式 TLS / RSA）
|   |-- 密钥交换（局域网，端口 7331）
|   |   |-- 接收密钥（作为接收方，可停止接收服务）
|   |   |-- 发送密钥（输入对方 IP）
|   |   `-- 收到后确认导入（自动识别新版/旧版密钥）
|   |-- RareBox 转发服务（把本机变成共享中转站）
|   |   |-- 开启 / 关闭转发、监听端口设置
|   |   |-- 授权令牌（重新生成 / 复制）
|   |   |-- 复制使用说明、状态与已连接设备数显示
|   |   `-- 自动挑选本机就绪后端（Shizuku/Dhizuku/Root/标准 API）代执行
|   `-- 请求授权：申请存储等运行时权限
|
|-- 七、帮助与关于
|   |-- 新手引导（重看入门向导）
|   |-- 帮助中心
|   |   |-- 新手入门：三步上手
|   |   |-- 连接不上怎么办：五步排查清单（可一键重试）
|   |   |-- 功能详解（全部功能说明）
|   |   |-- 安全须知、免责声明
|   |   `-- 更新日志、联系开发者
|   |-- 应用设置
|   |   |-- 实验性功能开关（需准确输入"我已知晓风险"；关闭后重新隐藏）
|   |   `-- 自动容错开关
|   |-- 检查更新（主 / 备 update.json 双源）
|   |-- Rare 计划官网、免责声明、更新日志、关于作者
|   `-- 退出应用
|
|-- 八、实验性功能（默认隐藏）
|   |-- Zygote 漏洞提权（CVE-2024-31317，需前置后端 + 同意免责声明）
|   `-- 免配对连接
|   （关闭实验性后，漏洞类连接也会从首页列表隐藏）
|
|-- 九、全局体验与引导
|   |-- 功能引导卡片：它能做什么 / 开始前需要 / 怎么用 / 注意 / 详细帮助
|   |-- 首次进入功能页面的操作提示；手表页面菜单含"使用帮助"
|   |-- 手表模式：圆屏边距适配、旋钮滚动、顶部返回 + 底部菜单
|   |-- 手机模式：全功能列表界面
|   |-- 错误引导：错误类型 + 简要说明 + 详细解释 + 排查步骤 + 一键重试
|   `-- 敏感操作二次确认（卸载 / 停用 / 清除数据 / 改显示等）
```

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
