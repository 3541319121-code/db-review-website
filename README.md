# NCRE 三级数据库技术复习平台

<p align="center">
  <img src="https://img.shields.io/badge/前端-HTML%2BCSS%2BJS-blue" alt="前端">
  <img src="https://img.shields.io/badge/后端-Node.js%20%2B%20Express-green" alt="后端">
  <img src="https://img.shields.io/badge/数据库-MySQL-orange" alt="数据库">
  <img src="https://img.shields.io/badge/License-MIT-yellow" alt="License">
</p>

> 一个面向全国计算机等级考试三级数据库技术的在线学习平台，支持知识点学习、在线刷题、模拟考试、错题管理和学习数据分析。

---

## 功能列表

### 用户系统
- [x] 用户注册 / 登录（JWT 认证）
- [x] 用户信息管理
- [x] 学习记录持久化保存

### 知识体系
- [x] 考试大纲分类展示
- [x] 知识点思维导图
- [x] 知识点详情查看
- [x] 知识点实时搜索

### 在线学习
- [x] SQL 专项训练
- [x] 在线刷题（对接后端题库）
- [x] 答题即时反馈与解析

### 模拟考试
- [x] 从后端题库随机组卷
- [x] 倒计时考试
- [x] 自动评分
- [x] 成绩保存与学习记录同步

### 错题管理
- [x] 自动记录错题（后端持久化）
- [x] 错题分类与状态管理
- [x] 错题再次训练
- [x] 本地错题兼容（遗留数据迁移）

### 数据分析
- [x] 学习统计 Dashboard
- [x] 历年真题考点分析（ECharts）
- [x] 正确率趋势展示

### 其他
- [x] 深色模式切换
- [x] 响应式布局（适配移动端）

---

## 技术架构

```
├── frontend/          # 前端静态页面
│   ├── index.html      # 主站（大纲/SQL/考试/错题/图表）
│   ├── exam.html       # 在线刷题页
│   ├── css/style.css   # 全局样式
│   └── js/
│       ├── config.js   # API 配置
│       ├── api.js      # 统一 API 层
│       ├── app.js      # 主站逻辑
│       └── exam.js     # 刷题逻辑
├── backend/           # 后端服务
│   ├── server.js       # 服务入口
│   ├── database.js     # MySQL 连接池
│   ├── config/         # 配置文件
│   ├── middleware/     # 中间件（鉴权/错误处理）
│   └── routes/         # 业务路由
├── database/
│   └── schema.sql      # 数据库初始化脚本
└── docker-compose.yml # Docker 一键部署
```

### 技术栈

| 层级 | 技术 |
|------|------|
| 前端 | HTML5 + CSS3 + JavaScript (ES6) |
| UI 框架 | Bootstrap 5.3 |
| 图标库 | Font Awesome 6.5 |
| 图表 | ECharts 5.5 |
| 后端 | Node.js + Express 5 |
| 数据库 | MySQL 8.0+ |
| 连接池 | mysql2 |
| 认证 | bcrypt + jsonwebtoken |
| 容器化 | Docker + Docker Compose |

---

## 安装方法

### 环境要求
- Node.js ≥ 18.x
- MySQL ≥ 8.0
- npm ≥ 9.x

### 1. 克隆仓库

```bash
git clone https://github.com/yourusername/ncre-db-review.git
cd ncre-db-review
```

### 2. 初始化数据库

```bash
mysql -u root -p < database/schema.sql
```

### 3. 配置后端环境

```bash
cd backend
cp .env.example .env
# 编辑 .env，配置数据库连接信息
```

`.env` 示例：
```env
PORT=3000
JWT_SECRET=your_secret_key_here
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=ncre
```

### 4. 安装依赖并启动

```bash
npm install
npm start
```

后端服务默认运行在 `http://localhost:3000`。

### 5. 前端访问

直接打开项目根目录下的 `index.html`，或使用任意静态服务器：

```bash
# 使用 Python 临时静态服务器
python -m http.server 8080

# 或使用 Node.js serve
npx serve ..
```

前端访问地址：`http://localhost:8080`

---

## Docker 部署

```bash
docker-compose up -d
```

服务启动后：
- 前端：`http://localhost:8080`
- 后端 API：`http://localhost:3000`
- MySQL：`localhost:3306`

---

## 使用说明

### 首次使用
1. 打开首页，点击右上角"登录 / 注册"按钮
2. 注册账号并登录
3. 开始学习：浏览考试大纲、点击知识点查看详情
4. 进入"在线刷题"页面进行练习
5. 在首页"模拟考试"模块进行完整考试

### 管理员操作
向 `questions` 表中插入题目即可扩充题库：

```sql
INSERT INTO questions (chapter, question, A, B, C, D, answer, analysis, difficulty) VALUES
('数据库基础', '数据库系统的核心是？', 'DBMS', '操作系统', '编译器', '浏览器', 'A', 'DBMS是数据库系统的核心软件。', 1);
```

---

## 项目截图

*（欢迎提交 PR 补充截图）*

---

## 开发指南

### 目录规范
- `frontend/`：前端页面与静态资源
- `backend/`：Node.js 后端服务
- `database/`：数据库脚本

### 代码风格
- 前端：ES6+，优先使用 `const`/`let`，避免全局污染
- 后端：CommonJS 模块，async/await 处理异步
- 注释：关键逻辑添加简洁注释

### 提交规范
```
feat: 新功能
fix: 修复 bug
docs: 文档更新
style: 代码格式（不影响功能）
refactor: 重构
chore: 构建/工具变动
```

---

## 贡献方式

欢迎 Fork 本仓库并提交 Pull Request！

1. Fork 项目
2. 创建功能分支：`git checkout -b feature/xxx`
3. 提交更改：`git commit -m 'feat: add xxx'`
4. 推送分支：`git push origin feature/xxx`
5. 提交 Pull Request

### 贡献内容建议
- 补充三级数据库考试真题
- 完善知识点详情内容
- 优化 UI/UX 设计
- 修复 Bug
- 补充单元测试

详见 [CONTRIBUTING.md](./CONTRIBUTING.md)。

---

## License

本项目基于 [MIT License](./LICENSE) 开源。

---

## 致谢

- [Bootstrap](https://getbootstrap.com/)
- [Font Awesome](https://fontawesome.com/)
- [ECharts](https://echarts.apache.org/)
- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)

> ✨ 如果你觉得本项目对你有帮助，欢迎点个 Star ⭐！
