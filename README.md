# Node-RED SI Windows 版本

![License](https://img.shields.io/badge/License-MIT-green.svg)
![Node-RED](https://img.shields.io/badge/Node--RED-4.1.0-red.svg)
![Electron](https://img.shields.io/badge/Electron-28.0.0-blue.svg)

## 项目简介

Node-RED SI Windows 是一个专为工业自动化领域设计的 Windows 可执行程序，集成了常用的工业通信协议和数据库连接模块。用户无需预先安装 Node.js 或 Node-RED，即可直接运行，极大简化了部署流程。

![node-red-si](/resources/node-red-si-demonstration.gif)

## 功能特性

- 🚀 **开箱即用**：无需安装 Node.js 和 Node-RED
- 🏭 **工业协议支持**：集成多种工业通信协议
- 🗄️ **数据库连接**：支持主流数据库连接
- 🎨 **现代化仪表板**：内置功能丰富的仪表板
- 💻 **跨平台兼容**：支持 Windows 7/10/11 (x86/x64)

## 集成模块

### 工业通信协议
- `node-red-contrib-cip-ethernet-ip` - CIP/Ethernet/IP 协议支持
- `node-red-contrib-modbus` - Modbus 协议支持
- `node-red-contrib-opcua` - OPC UA 协议支持
- `node-red-contrib-s7` - 西门子 S7 协议支持
- `node-red-contrib-pccc` - AB PCCC 协议支持
- `node-red-contrib-nvl` - NVL 协议支持

### 数据库连接
- `node-red-node-mysql` - MySQL 数据库连接
- `node-red-node-mongodb` - MongoDB 数据库连接
- `node-red-node-sqlite` - SQLite 数据库连接
- `node-red-contrib-mssql-plus` - Microsoft SQL Server 连接
- `node-red-contrib-influxdb` - InfluxDB 时间序列数据库连接

### 其他功能模块
- `@flowfuse/node-red-dashboard` - 现代化仪表板界面
- `node-red-node-ping` - 网络连通性检测
- `node-red-contrib-aedes` - 内置 MQTT Broker

## 系统要求

- Windows 7 Professional x64 或更高版本
- Windows 7 x86 (32位版本)
- Windows 10 x64
- Windows 11 x64

## 安装与使用

### 使用预编译版本
1. 下载最新发布的可执行文件
2. 解压到目标目录
3. 双击运行 `Node-RED-SI.exe`
4. 访问 `http://localhost:1880` 使用 Node-RED

### 从源码构建

#### 克隆项目
```bash
git clone https://github.com/jingshui127/node-red-si-windows.git
cd node-red-si-windows
```

#### 安装依赖
```bash
npm install
```

#### 构建 32 位版本
```bash
npm run build32
```

#### 构建 64 位版本
```bash
npm run build64
```

#### 生成便携式版本
```bash
npm run dist
```

## 访问界面

- **Node-RED 编辑器**：`http://localhost:1880/red/admin`
- **仪表板界面**：`http://localhost:1880/dashboard`

## 开发与贡献

1. Fork 本项目
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

## 作者

- **vitormnm** - [LinkedIn](https://www.linkedin.com/in/vitor-mião-940638152/)
- **科控物联** - 项目维护与改进

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 技术支持

如遇到问题，请提交 Issue 或通过以下方式联系：
- 提交 GitHub Issue
- 联系项目维护者