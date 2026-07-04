# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概览

这是一个基于 Vue 2 的合约保险/交易平台前端项目，主要功能包括：
- 多交易所集成（Binance、Bitget、KuCoin 等）
- 跟单交易系统
- 邀请系统
- 资产管理中心
- 多语言支持（中文、英文、日文、韩文、越南语）

## 开发命令

```bash
# 安装依赖
npm install

# 启动开发服务器（默认端口 8080）
npm run serve

# 构建生产版本
npm run build

# 运行代码检查
npm run lint
```

## 项目架构

### 技术栈
- **Vue 2.6.14**（注意：不是 Vue 3）
- **Vue Router 3.5.1** - 路由管理
- **Vuex 3.6.2** - 状态管理
- **Vant 2.13.2** - 移动端 UI 组件库
- **Web3 1.8.0 + Ethers 5.4.0** - 区块链交互
- **ECharts 5.4.3** - K线图等图表展示
- **Socket.io-client** - 实时数据通信

### 核心目录结构
- `src/views/contractview/` - 合约交易核心功能，包含各交易所的集成逻辑
- `src/utils/` - 工具函数，特别注意：
  - `wallet.js` - 钱包连接和交互
  - `request.js` - API 请求封装（基础 URL: https://olyn.cc/）
  - `ws.js` - WebSocket 连接管理
- `src/store/` - Vuex 状态管理，包含用户信息、钱包状态等
- `src/i18n/` - 国际化配置文件

### API 代理配置
开发环境下，所有 `/api` 请求会代理到 `https://olyn.cc/`

## 重要开发注意事项

1. **Vue 2 特性**：项目使用 Vue 2，注意与 Vue 3 的语法差异
2. **移动端优先**：使用 Vant 组件库，优先考虑移动端适配
3. **Web3 集成**：处理钱包连接时需考虑多种钱包类型的兼容性
4. **多交易所支持**：修改交易逻辑时需确保对所有支持的交易所都能正常工作
5. **国际化**：添加新文本时记得在所有语言文件中添加对应翻译

## 常见开发任务

### 添加新的交易所支持
1. 在 `src/views/contractview/` 下创建新的交易所组件
2. 在 `src/utils/constants.js` 中添加交易所配置
3. 更新路由配置以支持新交易所页面

### 修改 API 请求
- 所有 API 请求都通过 `src/utils/request.js` 封装
- 基础 URL 在 `src/config/index.js` 中配置

### 处理 WebSocket 连接
- WebSocket 逻辑在 `src/utils/ws.js`
- 主要用于实时价格更新和交易通知

## 当前状态

- 当前在 `shuangcang` 分支
- 有大量未提交的修改（主要是资源文件和组件更新）
- 项目缺少测试框架和测试用例