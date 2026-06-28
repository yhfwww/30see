# Agent 指南 · 30see 项目

> 本文件供 AI Agent（如 TRAE / Cursor / Copilot 等）在本仓库中协作时参考，确保改动符合项目规范。

---

## 📌 项目概览

- **名称**：30see
- **定位**：公益 AI 普惠教育平台
- **标语**：AI Tutorials for Everyone · 让每个人都能用上 AI
- **域名**：<https://www.30see.xyz>
- **形态**：纯静态网站（HTML + CSS + 原生 JS），无构建步骤、无前后端框架
- **许可证**：Apache 2.0

---

## 🗂 仓库结构速查

| 路径 | 用途 |
| --- | --- |
| `index.html` | 首页（Hero + 功能展示） |
| `about.html` | 关于我们 |
| `courses.html` | 教程课程目录 |
| `skills.html` | 技能卡片库（画廊式，含分类/难度筛选） |
| `relaxation.html` | 放松效果目录 |
| `git-for-creators.html` | Git 创作者指南（九章节） |
| `ai-learning-guide.html` | AI 学习指南 |
| `ai-prompt-guide.html` | AI Prompt 指南 |
| `admin.html` | 管理员统计页（MD5 密码认证） |
| `js/stats.js` | 访问量统计模块 `StatsAPI` |
| `images/logo.png` | 网站 LOGO |
| `skills/*.html` | 技能卡片详情页（每个 Skill 一篇心得） |
| `relaxation/*.html` | 各类放松动画效果页 |
| `DESIGN.md` | 完整设计系统规范 |
| `CNAME` | GitHub Pages 自定义域名 |

---

## 🎨 设计规范（必须遵循）

### 配色（CSS 变量）

```css
--brand-blue:        #0066cc;
--brand-blue-light:  #0099ff;
--brand-orange:      #ff6600;
--brand-orange-light:#ff9933;
--brand-purple:      #6a0dad;
--brand-red:         #ff3333;
--dark-bg:           #1a1a2e;
--white:             #ffffff;
--off-white:         #f0f4f8;
--text-primary:      #1a1a2e;
--text-secondary:    #4a4a6a;
--divider:           #d0d8e4;
```

### 主色调与寓意

- **主色1（蓝色系）**：`#0066cc → #0099ff`（渐变）—— 用于"30"文字，代表科技与智慧
- **主色2（橙色系）**：`#ff6600 → #ff9933`（渐变）—— 用于"see"文字，代表活力与创新

### 辅助色

- **点缀色**：`#6a0dad`（紫色）、`#ff3333`（红色）—— 用于难度标签、机器人和大脑电路、警示状态
- **中性色**：`#ffffff`（白色）、`#1a1a2e`（深色）—— 提供清晰对比

### 配色协调原则

- 使用 CSS 变量统一管理颜色
- 蓝色和橙色作为主色调贯穿整个页面
- 渐变效果与 LOGO 保持一致
- 卡片和按钮使用协调的阴影效果

### 配色优化细节

- **背景色**：主内容区域使用白色（`#ffffff`）提高对比度
- **文字色**：正文使用深灰色（`#2A2720`、`#3d3d3d`）确保可读性
- **卡片色**：概念卡片、工具卡片使用白色背景
- **悬停效果**：使用浅蓝色（`#f0f7ff`）作为悬停背景

### 字体

- 英文/Logo：`Playfair Display`
- 中文标题：`Noto Serif SC`
- 中文正文：`Noto Sans SC` / `Poppins`（首页用 Poppins）
- 字号层级：3rem > 2rem > 1.5rem > 1rem > 0.875rem > 0.75rem

### 布局

- 最大内容宽度：`1100px`
- 区块间距：`60px`
- 卡片圆角：`14px`，悬停上浮 `-4px` 并加阴影
- 响应式断点：`768px`，支持移动端和桌面端

### 组件风格

- **导航栏**：粘性顶部，半透明毛玻璃（`backdrop-filter: blur(10px)`），深色背景
- **卡片**：白底、浅灰边框、顶部 4px 渐变色条
- **按钮**：渐变背景 + 圆角胶囊 + hover 上浮 + 光泽划过动画
- **难度标签**：圆角胶囊，按级别配色（新手入门/进阶/高阶/专家级）
- **动画效果**：淡入、脉冲、悬停等多种交互效果

### LOGO

- 路径：`images/logo.png`
- 应用：首页 Hero 区与页脚均展示

---

## 📄 页面结构说明

### 目录页面

- **courses.html**：教程课程目录
  - 展示所有教程课程卡片
  - 包含课程图标、标题、描述、元信息
  - 使用品牌配色和渐变背景

- **relaxation.html**：放松效果目录
  - 展示所有放松效果卡片
  - 链接到 `relaxation/` 下具体效果页面

### 教程课程

- **git-for-creators.html**：Git 创作者指南
  - 完整的九章节教程内容
  - 使用 Noto Serif SC 和 Playfair Display 字体
  - 包含代码块、步骤列表、概念卡片等组件

### 技能卡片库（skills.html + skills/）

- **定位**：AI Skills 实战心得分享，区别于「课程」的系统化教学，每张卡片是单页、主观的经验分享
- **skills.html**：画廊式目录页
  - 顶部筛选条：按 `分类`（writing/coding/analysis/creation/other）+ `难度`（newbie/intermediate/advanced）筛选
  - 卡片网格：每张卡片含图标 / Skill 名 / 一句话简介 / 难度标签 / 分类标签 / 评分（★） / 「查看心得」按钮
  - 筛选用原生 JS 实现（`data-category` / `data-difficulty` 属性驱动）
- **skills/skill-template.html**：标准详情页模板，新增 Skill 心得时复制此文件套用
- **skills/sample-skill.html**：示例占位文章，演示详情页结构
- **详情页统一结构**：一句话简介 → 适用场景 → 使用心得 → 踩坑记录 → 进阶技巧 → 推荐度总结
- **难度标签 class 对应**：`tag-difficulty-newbie` / `tag-difficulty-intermediate` / `tag-difficulty-advanced`
- **详情页路径在 `skills/` 子目录**，内部链接需用 `../` 相对路径回到根（如 `../index.html`、`../images/logo.png`、`../js/stats.js`）

---

## 📊 访问量统计功能

### 技术方案

- 使用 **CounterAPI** 免费外部统计服务
- 官网：<https://counterapi.dev>
- **Workspace**：`30seeweb`
- **Counter Name**：`30see`
- **免费额度**：1,000 次/天
- **API 端点**：`https://api.counterapi.dev/v2/30seeweb/30see`
- **数据更新**：实时更新，有缓存缓冲（设计行为）

### 文件结构

- **js/stats.js**：访问量统计核心模块
  - `StatsAPI.getStats()`：获取当前统计数据
  - `StatsAPI.incrementVisit(page)`：触发访问统计
  - `StatsAPI.getPageVisits(page)`：获取指定页面访问量
  - 包含详细的错误处理

### 管理员页面

- **admin.html**：独立的管理员统计页面
  - 简单密码认证（MD5 加密）
  - 展示网站总访问量
  - **密码 MD5**：`ab31b1c8809d0129331079edc9438293`

### 计数覆盖页面

- `index.html`：首页访问计数
- `relaxation.html`：放松效果页面访问计数
- `courses.html`：课程目录页面访问计数
- `git-for-creators.html`：Git 创作者指南教程页面访问计数

### 使用方式

- 访问首页、放松效果页面和教程页面时自动记录访问量
- 管理员访问 `/admin.html` 输入密码查看统计
- 数据会有短暂缓存延迟，属正常现象

---

## ✅ 编码约定

1. **HTML**
   - `lang="zh-CN"`，首行 `<!DOCTYPE html>`
   - `<head>` 必含 `charset` 与 `viewport` meta
   - 教程类页面应含 `description` / `keywords` meta 用于 SEO

2. **CSS**
   - 优先使用项目既有的 CSS 变量（见上）
   - 颜色统一用变量或十六进制，不混用其他格式
   - 移动端样式写在 `@media (max-width: 768px)` 内

3. **JavaScript**
   - 原生 JS，不引入框架/构建工具
   - 统计逻辑通过 `StatsAPI`（`js/stats.js`）调用，不直接 fetch CounterAPI
   - 新增页面如需访问计数，在页面底部引入：
     ```html
     <script src="js/stats.js"></script>
     <script>
     if (typeof StatsAPI !== 'undefined') {
         StatsAPI.incrementVisit('页面标识');
     }
     </script>
     ```

4. **新增页面**
   - 在 `courses.html` 或 `relaxation.html` 目录页同步登记入口卡片
   - 页脚 `.footer-links` 保持与全站一致：首页 / 所有课程 / 技能卡片 / 关于我们 / 放松效果
   - 顶部导航、配色、字体须与其他页面统一

5. **新增 Skill 心得（重要流程）**
   1. 复制 `skills/skill-template.html` 为 `skills/你的skill名.html`
   2. 替换所有 `【】` 占位符与 `TODO` 标记内容
   3. 难度 badge 三选一：`badge-difficulty-newbie` / `-intermediate` / `-advanced`
   4. 评分用 `★` 满星 + `☆` 空星表示（如 4/5 = `★★★★☆`）
   5. 在 `skills.html` 卡片网格中新增一张 `<div class="skill-card" data-category="..." data-difficulty="...">`，链接到新详情页
   6. 把 `StatsAPI.incrementVisit('skill-xxx')` 的页面标识改为唯一值
   7. 详情页在 `skills/` 子目录，所有站内链接须用 `../` 前缀

---

## 🚫 禁止事项

- ❌ 引入 React / Vue / Angular 等框架或 jQuery
- ❌ 引入构建工具（Webpack / Vite / Rollup 等）
- ❌ 引入 npm 依赖或 `package.json`
- ❌ 修改 `CNAME` 中的域名
- ❌ 在代码中硬编码管理员密码明文（`admin.html` 使用 MD5 校验）
- ❌ 随意更改既有页面的品牌色与字体组合

---

## 🧪 本地验证

提交前请本地预览，确认页面可正常打开、样式无错位：

```bash
python3 -m http.server 8000
# 访问 http://localhost:8000
```

检查清单：
- [ ] 首页 / 课程页 / 放松页可正常跳转
- [ ] 移动端断点（768px）下布局正常
- [ ] 新增页面已在目录页登记
- [ ] 控制台无 JS 报错
- [ ] 访问统计脚本正常加载（如该页需要计数）

---

## 📝 常见任务指引

| 任务 | 入口 |
| --- | --- |
| 新增教程课程 | 在 `courses.html` 添加卡片，新建对应 `xxx.html` 教程页 |
| 新增 Skill 心得 | 复制 `skills/skill-template.html` → 在 `skills.html` 卡片网格添加入口 |
| 新增放松效果 | 在 `relaxation/` 下新建 HTML，在 `relaxation.html` 添加入口 |
| 修改全站配色 | 调整各页面 `:root` 中的 CSS 变量，并同步更新 `DESIGN.md` |
| 查看访问统计 | 访问 `/admin.html` 输入密码 |
| 修改域名 | ❌ 不允许，域名固定为 `www.30see.xyz` |

---

## 📚 相关文档

- [DESIGN.md](DESIGN.md) —— 完整设计系统（YAML frontmatter + 规范说明）
- [LICENSE](LICENSE) —— Apache 2.0 许可证

---

> 修改本仓库时，请保持「公益、免费、易学」的项目初衷，所有内容面向广大学习者，避免引入任何商业或付费机制。
