# 30see · AI Tutorials for Everyone

> 公益 AI 普惠教育平台 —— 让每个人都能用上 AI

30see 是一个面向所有人的公益 AI 教育网站，提供高质量、易上手的 AI 教程与放松互动效果，帮助零基础学习者快速迈入智能时代。

🌐 官网：<https://www.30see.xyz>

---

## ✨ 项目特点

- **公益免费**：所有教程与效果页面完全开放，无任何付费门槛
- **AI 驱动**：内容围绕人工智能学习路径精心设计
- **专业内容**：由 AI 专家编撰的结构化教程（如《Git for Creators》九章节完整指南）
- **放松效果**：内置多种纯前端动画效果（樱花、烟花、星际、雨滴、几何、气泡），学习间隙可放松身心
- **响应式设计**：适配移动端与桌面端
- **零依赖部署**：纯静态 HTML/CSS/JS，可托管于 GitHub Pages 等任意静态服务

---

## 🧱 技术栈

| 类别 | 技术 |
| --- | --- |
| 页面结构 | 原生 HTML5 |
| 样式 | 原生 CSS3（CSS 变量 + 渐变 + 动画） |
| 交互 | 原生 JavaScript（无框架） |
| 字体 | Google Fonts：Poppins / Playfair Display / Noto Serif SC / Noto Sans SC |
| 访问统计 | [CounterAPI](https://counterapi.dev)（Workspace：`30seeweb`，Counter：`30see`） |
| 部署 | GitHub Pages（自定义域名 `www.30see.xyz`） |
| 许可证 | Apache License 2.0 |

---

## 📁 项目结构

```
30see/
├── index.html                 # 首页（Hero + 功能展示）
├── about.html                 # 关于我们
├── courses.html               # 教程课程目录
├── relaxation.html            # 放松效果目录
├── git-for-creators.html      # 《Git for Creators》九章节教程
├── ai-learning-guide.html     # AI 学习指南
├── ai-prompt-guide.html       # AI Prompt 指南
├── admin.html                 # 管理员统计页（密码认证）
├── js/
│   └── stats.js               # 访问量统计模块（StatsAPI）
├── images/
│   └── logo.png               # 网站 LOGO
├── relaxation/                # 放松效果子页面
│   ├── bubble_page.html       # 气泡动画
│   ├── fireworks.html         # 烟花动画
│   ├── geometry-animation.html# 几何动画
│   ├── interstellar.html      # 星际动画
│   ├── rain.html              # 雨滴动画
│   └── sakura.html            # 樱花动画
├── DESIGN.md                  # 设计系统规范（配色/排版/组件）
├── agents.md                  # 设计配色方案重点
├── CNAME                      # GitHub Pages 自定义域名
├── LICENSE                    # Apache 2.0 许可证
└── .gitignore
```

---

## 🚀 本地预览

项目为纯静态站点，无需构建。任选其一即可本地预览：

**方式一：Python 内置服务器**
```bash
python3 -m http.server 8000
```

**方式二：Node 静态服务器**
```bash
npx serve .
```

然后浏览器访问 <http://localhost:8000>。

---

## 🌍 部署

项目通过 GitHub Pages 自动部署，自定义域名由根目录 `CNAME` 文件指定：

```
www.30see.xyz
```

推送至默认分支后，GitHub Pages 会自动构建上线。

---

## 🎨 设计系统

详见 [DESIGN.md](DESIGN.md) 与 [agents.md](agents.md)。核心要点：

- **主色**：品牌蓝 `#0066cc → #0099ff`，品牌橙 `#ff6600 → #ff9933`
- **点缀色**：紫 `#6a0dad`、红 `#ff3333`
- **中性色**：深背景 `#1a1a2e`、白 `#ffffff`、浅灰 `#f0f4f8`
- **字体**：标题用 Playfair Display / Noto Serif SC，正文用 Noto Sans SC
- **圆角**：sm 4px / md 8px / lg 14px / pill 50px
- **最大内容宽度**：1100px，响应式断点 768px

---

## 📊 访问统计

- 通过 `js/stats.js` 中的 `StatsAPI` 模块接入 CounterAPI
- `StatsAPI.incrementVisit(page)`：页面访问时自动计数
- `StatsAPI.getStats()`：获取网站总访问量
- 管理员可在 `/admin.html` 输入密码查看统计数据

---

## 📜 许可证

本项目基于 [Apache License 2.0](LICENSE) 开源发布。

© 2026 30see. All rights reserved.
