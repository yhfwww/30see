---  
name: 30see Design System  
description: 公益AI教育网站的品牌设计系统  
version: 1.0.0  

colors:  
  brand-blue: "#0066cc"  
  brand-blue-light: "#0099ff"  
  brand-orange: "#ff6600"  
  brand-orange-light: "#ff9933"  
  brand-purple: "#6a0dad"  
  brand-red: "#ff3333"  
  brand-green: "#28a745"  
  brand-yellow: "#ffc107"  
  dark-bg: "#1a1a2e"  
  dark-bg-light: "#252542"  
  white: "#ffffff"  
  off-white: "#f0f4f8"  
  light-gray: "#e8ecf0"  
  text-primary: "#1a1a2e"  
  text-secondary: "#4a4a6a"  
  text-muted: "#7a7a9a"  
  divider: "#d0d8e4"  
  code-bg: "#e8ecf0"  
  highlight: "#fff3d9"  
  success: "#28a745"  
  warning: "#e6a23c"  

typography:  
  h1:  
    fontFamily: "Playfair Display"  
    fontSize: 3rem  
    fontWeight: 700  
    lineHeight: 1.2  
  h2:  
    fontFamily: "Noto Serif SC"  
    fontSize: 2rem  
    fontWeight: 700  
    lineHeight: 1.3  
  h3:  
    fontFamily: "Noto Serif SC"  
    fontSize: 1.5rem  
    fontWeight: 600  
    lineHeight: 1.4  
  body:  
    fontFamily: "Noto Sans SC"  
    fontSize: 1rem  
    fontWeight: 400  
    lineHeight: 1.8  
  caption:  
    fontFamily: "Noto Sans SC"  
    fontSize: 0.875rem  
    fontWeight: 400  
    lineHeight: 1.6  
  label:  
    fontFamily: "Noto Sans SC"  
    fontSize: 0.75rem  
    fontWeight: 500  
    letterSpacing: "0.1em"  
    textTransform: "uppercase"  

rounded:  
  sm: 4px  
  md: 8px  
  lg: 14px  
  pill: 50px  

spacing:  
  xs: 4px  
  sm: 8px  
  md: 16px  
  lg: 24px  
  xl: 32px  
  xxl: 48px  
  section: 60px  

components:  
  brand-header:  
    backgroundColor: "rgba(26, 26, 46, 0.95)"  
    backdropFilter: "blur(10px)"  
    borderBottom: "1px solid rgba(255,255,255,0.1)"  
    padding: "20px 40px"  
    position: "sticky"  
    top: 0  
    zIndex: 100  

  brand-logo:  
    display: "flex"  
    alignItems: "center"  
    gap: "12px"  
    textDecoration: "none"  

  logo-icon:  
    width: "32px"  
    height: "32px"  
    background: "linear-gradient(135deg, #0066cc 0%, #ff6600 100%)"  
    borderRadius: "8px"  
    display: "flex"  
    alignItems: "center"  
    justifyContent: "center"  
    color: "#ffffff"  
    fontWeight: 700  
    fontSize: "16px"  

  logo-text:  
    fontFamily: "Playfair Display"  
    fontSize: "18px"  
    fontWeight: 700  
    color: "#ffffff"  
    letterSpacing: "-0.02em"  

  brand-nav:  
    display: "flex"  
    gap: "20px"  
    alignItems: "center"  

  nav-link:  
    fontFamily: "Noto Sans SC"  
    fontSize: "13px"  
    color: "rgba(255,255,255,0.8)"  
    textDecoration: "none"  
    letterSpacing: "0.05em"  
    transition: "color 0.2s"  

  nav-link-hover:  
    color: "#ffffff"  

  nav-btn:  
    background: "linear-gradient(135deg, #0066cc 0%, #0099ff 100%)"  
    color: "#ffffff"  
    padding: "8px 16px"  
    borderRadius: "6px"  
    fontSize: "12px"  
    fontWeight: 500  
    textTransform: "uppercase"  
    letterSpacing: "0.1em"  
    textDecoration: "none"  

  nav-btn-hover:  
    background: "linear-gradient(135deg, #0099ff 0%, #0066cc 100%)"  

  hero:  
    minHeight: "92vh"  
    display: "flex"  
    flexDirection: "column"  
    justifyContent: "center"  
    alignItems: "center"  
    textAlign: "center"  
    padding: "40px 20px"  
    position: "relative"  

  section:  
    padding: "60px 24px"  
    maxWidth: "1100px"  
    margin: "0 auto"  

  card:  
    background: "#ffffff"  
    border: "1px solid #d0d8e4"  
    borderRadius: "14px"  
    padding: "28px 24px"  
    transition: "transform 0.25s, box-shadow 0.25s"  

  card-hover:  
    transform: "translateY(-4px)"  
    boxShadow: "0 12px 40px rgba(0, 102, 204, 0.1)"  

  btn-primary:  
    background: "linear-gradient(135deg, #0066cc 0%, #0099ff 100%)"  
    color: "#ffffff"  
    padding: "14px 32px"  
    borderRadius: "6px"  
    fontWeight: 600  
    textDecoration: "none"  
    display: "inline-block"  
    transition: "all 0.3s"  

  footer:  
    background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)"  
    color: "#ffffff"  
    padding: "40px 20px"  
    textAlign: "center"  
---

## 概述

30see 是一个公益AI普惠教育平台，致力于让每个人都能用上AI。设计风格现代、专业、友好，体现科技感与人文关怀的平衡。

## 设计理念

- **简洁清晰**：以白色和浅灰为底，配合品牌蓝橙色调
- **科技感**：使用渐变、阴影和动画效果
- **易读性**：中英文分别使用思源黑体和Noto Sans SC
- **响应式**：适配移动端和桌面端

## 色彩系统

### 主色调

- **品牌蓝 (#0066cc)**：主色调，用于重要按钮、链接和标题下划线
- **品牌蓝浅 (#0099ff)**：辅助蓝色，用于hover状态和渐变

### 辅助色

- **品牌橙 (#ff6600)**：次要强调色，用于辅助信息和渐变
- **品牌橙浅 (#ff9933)**：hover状态

### 点缀色

- **品牌紫 (#6a0dad)**：高阶、专家级标签
- **品牌红 (#ff3333)**：警告、错误状态

### 中性色

- **深色背景 (#1a1a2e)**：导航栏、页脚、深色区块
- **文字主色 (#1a1a2e)**：正文文字
- **文字次要 (#4a4a6a)**：辅助说明文字
- **分割线 (#d0d8e4)**：边框、分割线

## 排版

- **标题字体**：Noto Serif SC（中文）/ Playfair Display（英文/Logo）
- **正文字体**：Noto Sans SC
- **字号层级**：3rem > 2rem > 1.5rem > 1rem > 0.875rem > 0.75rem

## 布局

- **最大内容宽度**：1100px
- **响应式断点**：768px（移动端）
- **区块间距**：60px
- **卡片间距**：24px

## 组件

### 导航栏

粘性顶部导航，背景半透明毛玻璃效果，包含logo、导航链接和CTA按钮。

### 卡片

白色背景，浅灰边框，hover时上浮并添加阴影。

### 按钮

渐变背景的CTA按钮，带有hover动画效果。

### 标签

圆角胶囊形状，用于标识难度级别（新手入门/进阶/高阶/专家级）。

## 品牌元素

- **Logo图标**：30数字，渐变蓝橙背景，8px圆角
- **Logo文字**：Playfair Display字体
- **标语**：公益AI普惠教育 · 让每个人都能用上AI
