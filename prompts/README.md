# Prompts 文档索引

本目录包含多个前端开发辅助提示词文档集合，用于指导 AI 完成常见的项目开发任务。

## 文档集合列表

### 1. Prompts Frontend Libs

**功能**: 前端组件库开发辅助提示词集合，涵盖国际化、类型声明、文档生成等常见任务

**已安装版本**: `@kne/prompts-frontend-libs@1.0.1`

**适用场景**:
- React 组件库需要支持国际化
- JavaScript 组件库需要添加 TypeScript 类型支持
- 需要完善 npm 包的描述和关键词
- 需要生成包功能描述文件或 API 文档
- 需要编写组件演示示例

**核心内容**:
- 组件国际化（useIntl Hook / withLocale HOC / 语言包配置）
- TypeScript 类型声明（Props 接口 / 声明文件结构 / 复杂类型处理）
- package.json 描述和关键词完善
- 包功能描述文件（package-manifest.json）生成
- 项目概述和 API 文档生成
- 组件示例编写（目录规范 / example.json / scope 声明）

**详细索引**: 见 [prompts-frontend-libs/README.md](prompts-frontend-libs/README.md)

---

### 2. 生成 README 索引

**功能**: 从包含多个子目录的文档目录生成结构清晰、便于查阅的索引文档

**适用场景**:
- 文档目录包含多个子目录，需要生成总览索引
- 希望快速了解各文档集合的功能和适用场景
- 需要为文档集合建立可维护的导航结构

**核心内容**:
- 源目录扫描流程
- 子目录结构分析方法
- 索引模板设计规范
- 导航辅助（决策表格）生成

---

## 快速选择指南

| 需求 | 推荐文档 | 所属集合 |
|------|----------|----------|
| 组件需要支持多语言 | [国际化](prompts-frontend-libs/国际化.md) | prompts-frontend-libs |
| 为 JS 组件库添加 TS 类型支持 | [添加ts类型声明](prompts-frontend-libs/添加ts类型声明.md) | prompts-frontend-libs |
| 完善 package.json 描述和关键词 | [完善package.json描述和关键词](prompts-frontend-libs/完善package.json描述和关键词.md) | prompts-frontend-libs |
| 生成包的 API 描述文件 | [生成包功能描述文件](prompts-frontend-libs/生成包功能描述文件.md) | prompts-frontend-libs |
| 生成项目概述和 API 文档 | [生成文档](prompts-frontend-libs/生成文档.md) | prompts-frontend-libs |
| 编写组件演示示例代码 | [组件示例编写](prompts-frontend-libs/组件示例编写.md) | prompts-frontend-libs |
| 为文档目录生成总览索引 | [生成README索引](生成README索引.md) | prompts 根目录 |
