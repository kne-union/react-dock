# react-dock

### 安装

```shell
npm i --save @kne/react-dock
```

### 示例

#### 示例代码

- 基础用法
- 展示浮动 Dock 的基本用法，鼠标悬停时图标放大并显示标题提示
- _ReactDock(@kne/current-lib_react-dock)[import * as _ReactDock from "@kne/react-dock"],(@kne/current-lib_react-dock/dist/index.css)

```jsx
const {default: FloatingDock} = _ReactDock;

const BaseExample = () => {
  const items = [
    {
      title: 'Home',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
          <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
          <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
        </svg>
      ),
      href: '#',
      onClick: () => {
        console.log('Home clicked');
      }
    },
    {
      title: 'Settings',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.066 2.573c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.573 1.066c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.066 -2.573c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      href: '#',
      onClick: () => {
        console.log('Settings clicked');
      }
    },
    {
      title: 'Profile',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="7" r="4" />
          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
        </svg>
      ),
      href: '#',
      onClick: () => {
        console.log('Profile clicked');
      }
    },
    {
      title: 'Search',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="10" cy="10" r="7" />
          <line x1="21" y1="21" x2="15" y2="15" />
        </svg>
      ),
      href: '#',
      onClick: () => {
        console.log('Search clicked');
      }
    }
  ];

  return (
    <div>
      <FloatingDock items={items} />
    </div>
  );
};

render(<BaseExample />);

```

### API

| 属性 | 类型 | 默认值 | 说明 |
|----|----|-----|----|
| items | `{title: string, icon: ReactNode, href: string, onClick?: function}[]` | `[]` | Dock 项目列表，每项包含标题、图标、链接和点击回调 |
| size | `number` | `18` | 图标尺寸（px），控制图标默认大小 |
| desktopClassName | `string` | - | 桌面端 Dock 容器的自定义类名 |
| mobileClassName | `string` | - | 移动端 Dock 容器的自定义类名 |
