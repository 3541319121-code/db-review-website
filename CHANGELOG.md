# 更新日志

所有重要的更改都会记录在此文件中。

格式基于 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/)，版本号遵循 [Semantic Versioning](https://semver.org/lang/zh-CN/)。

## [Unreleased]

### Added
- 知识点详情查看与搜索功能
- 考试系统对接后端真实题库
- 错题本后端化（支持远程错题管理与状态标记）
- Dashboard 学习统计对接真实数据
- Docker Compose 一键部署支持
- GitHub Actions CI 配置

### Changed
- 登录/注册改为 Modal 弹窗，优化用户体验
- 首页学习进度条从硬编码改为动态数据
- 统一 exam.html 导航栏与主站风格
- 重写 README.md，完善开源文档

### Fixed
- 修复模拟考试题目为随机填充的 Mock 数据问题
- 修复登录后强制跳转 exam.html 的问题
- 修复 dashboard.html 独立页面数据孤岛问题

## [1.0.0] - 2026-07-17

### Added
- 用户注册/登录系统（JWT 认证）
- 题库 CRUD 查询（MySQL 持久化）
- 在线刷题功能（单选题）
- 答题记录保存与统计
- 错题自动记录（服务端 wrong_questions 表）
- 考试大纲、思维导图、SQL 训练（前端静态）
- 模拟考试系统（前端内存题库）
- 错题本（localStorage）
- ECharts 静态图表示例
- 深色模式切换
- 后端统一错误处理与 JWT 鉴权中间件
