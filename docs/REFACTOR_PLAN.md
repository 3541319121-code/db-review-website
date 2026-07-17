# NCRE 三级数据库复习平台 — 重构计划

> 生成日期：2026-07-17  
> 原则：增量重构、保留现有功能、每步可运行

---

## 一、现状分析

### 1. 技术栈

| 层级 | 技术 |
|------|------|
| 前端 | 原生 HTML + CSS + JavaScript |
| UI | Bootstrap 5.3、Font Awesome 6.5 |
| 图表 | ECharts 5.5（CDN） |
| 后端 | Node.js + Express 5 |
| 数据库 | MySQL（mysql2 连接池） |
| 认证 | bcrypt + jsonwebtoken |

### 2. 目录结构

```
Data_Base Tech/
├── index.html          # 主站（大纲/SQL/考试/错题/图表）
├── exam.html           # 在线刷题页（连接后端题库）
├── css/style.css
├── js/
│   ├── config.js       # API 配置
│   ├── api.js          # 统一 API 层
│   ├── app.js          # 主站逻辑
│   └── exam.js         # 刷题逻辑
├── backend/
│   ├── server.js
│   ├── database.js
│   ├── config/
│   ├── middleware/
│   ├── routes/
│   └── Dockerfile
├── database/schema.sql
├── docker-compose.yml
└── .github/workflows/ci.yml
```

### 3. 已实现功能

- ✅ 用户注册 / 登录（JWT）
- ✅ 题库 CRUD 查询（MySQL）
- ✅ 答题记录保存
- ✅ 错题自动记录（服务端）
- ✅ 学习统计 Dashboard API
- ✅ 考试大纲、思维导图、SQL 训练（前端静态）
- ✅ 模拟考试（后端真实题库）
- ✅ 错题本（后端持久化 + 本地兼容）
- ✅ ECharts 图表示例
- ✅ 深色模式
- ✅ 知识点搜索
- ✅ 知识点详情查看
- ✅ Docker 部署
- ✅ GitHub Actions CI

### 4. 主要问题（已修复）

| 类别 | 问题 | 状态 |
|------|------|------|
| **运行** | `index.html` 资源路径错误 | ✅ 已修复 |
| **架构** | 前后端数据双轨 | ✅ 已打通 |
| **安全** | JWT 密钥硬编码 | ✅ 已外置到 .env |
| **数据** | 模拟考试题目为随机填充 | ✅ 已对接后端题库 |
| **体验** | 登录表单裸露在页面顶部 | ✅ 已改为 Modal |
| **代码** | `app.js` 单文件庞大 | ✅ 已模块化重构 |
| **工程** | 无 Docker、无 CI | ✅ 已补充 |

---

## 二、重构阶段

### 阶段 0：运行修复 ✅ 已完成
- [x] 修复 `index.html` 资源路径
- [x] 添加 `npm start` / `npm run dev`
- [x] 添加 `database/schema.sql`

### 阶段 1：后端基础设施 ✅ 已完成
- [x] 引入 `dotenv`，数据库/JWT 配置外置
- [x] 添加 `.env.example`
- [x] 统一错误处理中间件（404 + 500）
- [x] JWT 鉴权中间件（`verifyToken` / `optionalToken`）
- [x] 修复 dashboard 异步竞态
- [x] 添加健康检查 `GET /health`
- [x] 重构 `record.js` 异步逻辑

### 阶段 2：前端 API 层统一 ✅ 已完成
- [x] 新建 `js/config.js`
- [x] 新建 `js/api.js`
- [x] 改造 `app.js` 登录/注册
- [x] 改造 `exam.js` 题库加载与答题记录
- [x] 改造 `backend/dashboard.html` 使用统一 API 层

### 阶段 3：用户模块整合 ✅ 已完成
- [x] 登录/注册改为 Modal 弹窗
- [x] 登录后留在主站，显示用户信息
- [x] 未登录时限制刷题/记录功能

### 阶段 4：题库与考试打通 ✅ 已完成
- [x] 模拟考试从 `/questions` 拉题
- [x] `exam.html` 样式与主站统一
- [x] 考试结果写入 `study_record`

### 阶段 5：错题本后端化 ✅ 已完成
- [x] 主站错题本调用 `/wrong/:userid`
- [x] 保留 localStorage 迁移逻辑（兼容旧数据）
- [x] 支持标记掌握 / 删除远程错题

### 阶段 6：Dashboard 整合 ✅ 已完成
- [x] 主站首页进度条对接真实数据
- [x] 整合 `backend/dashboard.html` 到主站

### 阶段 7：知识体系扩展 ✅ 已完成
- [x] 大纲知识点支持点击详情
- [x] 添加 `knowledgeBase` 知识库
- [x] 思维导图点击显示详细内容

### 阶段 8：UI/UX 优化 ✅ 已完成
- [x] 统一 exam.html 导航栏与主站风格
- [x] 统一导航与页面布局
- [x] 响应式与移动端优化

### 阶段 9：开源工程化 ✅ 已完成
- [x] 重写 README.md（完整开源文档）
- [x] 添加 MIT LICENSE
- [x] 添加 CONTRIBUTING.md
- [x] 添加 CHANGELOG.md
- [x] 添加 docker-compose.yml + backend/Dockerfile
- [x] 添加 GitHub Actions CI
- [x] 完善 .gitignore

---

## 三、优化优先级（历史记录）

| 优先级 | 任务 | 状态 |
|--------|------|------|
| P0 | 路径修复、npm 脚本、schema | ✅ 已完成 |
| P1 | 环境变量、鉴权、API 统一 | ✅ 已完成 |
| P2 | 前后端数据打通 | ✅ 已完成 |
| P3 | UI 整合、Dashboard | ✅ 已完成 |
| P4 | 模块化重构、知识库 | ✅ 已完成 |
| P5 | Docker、CI、文档 | ✅ 已完成 |

---

## 四、模块修改记录

| 模块 | 状态 | 说明 |
|------|------|------|
| 0 运行修复 | ✅ 已完成 | 路径、脚本、schema |
| 1 后端基础 | ✅ 已完成 | dotenv、鉴权、错误处理、dashboard 修复 |
| 2 API 层 | ✅ 已完成 | config.js、api.js、页面接入 |
| 3 用户模块 | ✅ 已完成 | Modal 登录、用户信息展示 |
| 4 题库与考试 | ✅ 已完成 | 后端拉题、考试记录保存 |
| 5 错题本 | ✅ 已完成 | 后端错题 + 本地兼容 |
| 6 Dashboard | ✅ 已完成 | 真实数据对接 |
| 7 知识体系 | ✅ 已完成 | 知识库 + 搜索 |
| 8 UI/UX | ✅ 已完成 | 导航统一、响应式 |
| 9 开源工程化 | ✅ 已完成 | README、Docker、CI、文档 |

---

## 五、后续建议

1. **内容扩充**：继续补充 `knowledgeBase` 中的知识点详情内容
2. **题库扩充**：向 `questions` 表添加更多历年真题
3. **TypeScript 迁移**：前端可逐步迁移到 Vue3/React + TypeScript
4. **测试覆盖**：补充后端 API 单元测试和集成测试
5. **缓存优化**：引入 Redis 缓存热点数据
6. **SEO 优化**：考虑使用 SSR 或预渲染方案
