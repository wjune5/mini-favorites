# Mini Favorites Manager
![435835265-5a5d91d0-f5bc-4f69-9899-5e3684d30417](https://github.com/user-attachments/assets/a68ef398-4f1d-4340-a013-41008ec3b115)
## 项目简介
一个基于 React + Redux 的网页收藏夹应用，支持收藏管理、分类、置顶、清空等功能。

## 功能

- [x] 添加、删除收藏（标题、链接、分类标签）
- [x] 置顶/取消置顶
- [x] 清空全部收藏
- [x] 本地存储持久化

## 技术
React 19.0.0

Vite

Redux Toolkit 2.7.0

Tailwind CSS 4.1.4
## 项目结构
```
mini-favorites/
├── node_modules/       # 项目依赖的第三方库
├── public/             # 静态资源文件夹
│   └── vite.svg        # 项目icon
├── src/                # 项目源代码
│   ├── components/     # 子组件
│   │   ├── AddFavoriteForm.js    # 添加收藏夹
│   │   ├── FavoriteItem.js    # 显示收藏链接
│   │   └── FavoriteList.js # 显示收藏夹列表
│   ├── store/          # 状态管理文件夹
│   │   ├── index.js    # 配置状态管理
│   │   └── favoritesSlice.js # 收藏夹状态管理
│   ├── App.jsx         # 主组件
│   ├── App.css         # 主组件的样式
│   ├── main.jsx        # 项目入口文件
│   └── index.css       # 全局样式
├── index.html          # HTML模板文件
├── package.json        # 项目配置和依赖管理
├── package-lock.json   # 依赖的精确版本锁定文件
└── README.md           # 项目说明文档
```
## 如何运行项目
1. 克隆仓库

2. 安装依赖

```code
npm install
```
使用Vite构建，启动开发环境

```code
npm run dev
```
启动生产环境
```code
npm run build
```
