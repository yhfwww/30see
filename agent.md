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
| `index.html` | 首页 |
| `about.html` | 关于我们 |
| `courses.html` | 教程课程目录 |
| `relaxation.html` | 放松效果目录 |
| `git-for-creators.html` | Git 创作者指南（九章节） |
| `ai-learning-guide.html` | AI 学习指南 |
| `ai-prompt-guide.html` | AI Prompt 指南 |
| `admin.html` | 管理员统计页（MD5 密码认证） |
| `js/stats.js` | 访问量统计模块 `StatsAPI` |
| `images/logo.png` | 网站 LOGO |
| `relaxation/*.html` | 各类放松动画效果页 |
| `DESIGN.md` | 完整设计系统规范 |
| `agents.md` | 配色方案重点（注意：此为复数文件，与本文 `agent.md` 不同） |
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

- **主色**：蓝（科技/智慧）+ 橙（活力/创新）渐变贯穿全站
- **不要**引入与上述冲突的新主色；点缀色仅用于难度标签、警示状态

### 字体

- 英文/Logo：`Playfair Display`
- 中文标题：`Noto Serif SC`
- 中文正文：`Noto Sans SC` / `Poppins`（首页用 Poppins）
- 字号层级：3rem > 2rem > 1.5rem > 1rem > 0.875rem > 0.75rem

### 布局

- 最大内容宽度：`1100px`
- 区块间距：`60px`
- 卡片圆角：`14px`，悬停上浮 `-4px` 并加阴影
- 响应式断点：`768px`

### 组件风格

- **导航栏**：粘性顶部，半透明毛玻璃（`backdrop-filter: blur(10px)`），深色背景
- **卡片**：白底、浅灰边框、顶部 4px 渐变色条
- **按钮**：渐变背景 + 圆角胶囊 + hover 上浮 + 光泽划过动画
- **难度标签**：圆角胶囊，按级别配色（新手/进阶/高阶/专家级）

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
   - 页脚 `.footer-links` 保持与全站一致：首页 / 所有课程 / 关于我们 / 放松效果
   - 顶部导航、配色、字体须与其他页面统一

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
| 新增放松效果 | 在 `relaxation/` 下新建 HTML，在 `relaxation.html` 添加入口 |
| 修改全站配色 | 调整各页面 `:root` 中的 CSS 变量，并同步更新 `DESIGN.md` / `agents.md` |
| 查看访问统计 | 访问 `/admin.html` 输入密码 |
| 修改域名 | ❌ 不允许，域名固定为 `www.30see.xyz` |

---

## 📚 相关文档

- [DESIGN.md](DESIGN.md) —— 完整设计系统（YAML frontmatter + 规范说明）
- [agents.md](agents.md) —— 配色方案重点与功能说明
- [LICENSE](LICENSE) —— Apache 2.0 许可证

---

> 修改本仓库时，请保持「公益、免费、易学」的项目初衷，所有内容面向广大学习者，避免引入任何商业或付费机制。
