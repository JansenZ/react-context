### React hooks 状态管理系统
### API
#### createPage
#### inject
### 使用方式
```
  export default createPage(你的页面主hooks)(你的页面级组件);
  const InjectSide = inject()(你的内部组件);
```
通过这样的方式，内部组件可以共享从页面级组件开始向下的所有数据流

### 演示地址
[地址](https://react-contexts.stackblitz.io/)
