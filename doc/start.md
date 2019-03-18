设计规范
* 颜色规范，字体大小规范，通过变量提前定义
* 开发方便
* 换肤容易

babel-runtime：辅助编译
babel-polyfill：es6补丁
fastclick：解决移动端点击300ms延迟

认识vuex
* 是什么
  * 状态管理模式，集中式存储应用的所有组件的状态，并以相应的规则保证状态以一种可以预测的方式发生变化
  * 闭环：state -> components -> actions(api) -> mutations -> state
  * 问题：不使用vuex，我们可以直接修改组件数据，数据的变化会直接映射到DOM上，在vuex中，不能直接修改组件数据，必须通过dispatch action或commit mutations来修改组局，反而变得繁琐了
* 解决什么问题
  * 多个组件之间状态共享
  * 路由跳转复杂数据传递
* 如何使用

调试与抓包
vConsole：微信前端开源，直接在页面上看到console信息
抓包：Charles（mac） fiddle（windows）

撒花
