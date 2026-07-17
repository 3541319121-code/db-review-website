# 贡献指南

感谢你对 NCRE 三级数据库技术复习平台的关注！本文档将帮助你快速参与项目贡献。

## 如何贡献

### 报告问题

如果你发现了 Bug 或有功能建议，请通过 [Issue](../../issues) 提交：

1. 点击 "New issue"
2. 选择合适的模板（Bug 报告 / 功能建议）
3. 详细描述问题，包括：
   - 复现步骤
   - 期望行为与实际行为
   - 运行环境（浏览器版本、Node.js 版本等）
   - 相关截图或日志

### 提交代码

1. **Fork 仓库**
   ```bash
   git clone https://github.com/yourusername/ncre-db-review.git
   cd ncre-db-review
   ```

2. **创建分支**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **开发并测试**
   - 遵循现有代码风格
   - 确保修改不会破坏现有功能
   - 在本地运行并通过基本测试

4. **提交更改**
   ```bash
   git add .
   git commit -m "feat: 描述你的更改"
   git push origin feature/your-feature-name
   ```

   提交信息规范：
   - `feat:` 新功能
   - `fix:` 修复 Bug
   - `docs:` 文档更新
   - `style:` 代码格式调整
   - `refactor:` 代码重构
   - `chore:` 构建/工具相关

5. **提交 Pull Request**
   - 填写清晰的 PR 标题和描述
   - 关联相关 Issue（如有）
   - 等待维护者审查

## 开发规范

### 前端
- 使用 ES6+ 语法
- 避免全局变量污染
- 保持代码简洁，关键逻辑添加注释

### 后端
- 使用 async/await 处理异步
- 统一错误处理中间件
- API 返回 JSON 格式：`{ msg: "...", data: ... }`

### 数据库
- 修改表结构时，在 `database/schema.sql` 中同步更新
- 提交示例数据时，确保不涉及敏感信息

## 贡献内容方向

- **题库补充**：添加历年真题或高质量练习题
- **知识点完善**：补充大纲中知识点的详细解释
- **UI 优化**：提升用户体验和视觉效果
- **功能扩展**：如学习提醒、笔记功能等
- **Bug 修复**：修复已知问题

## 行为准则

- 尊重每一位贡献者
- 保持友善和建设性的沟通
- 接受不同意见，通过讨论达成共识

如有疑问，欢迎通过 Issue 或邮件联系维护者。
