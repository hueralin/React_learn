# 总结 

React 有两类“模型”数据  
1. props
2. state  

依赖这两个模型的 视图 部分都会随着改变  

**判断何时不能使用 state**  

1. 该数据是否是由父组件通过 props 传递而来的？如果是，那它应该不是 state。
2. 该数据是否随时间的推移而保持不变？如果是，那它应该也不是 state。
3. 你能否根据其他 state 或 props 计算出该数据的值？如果是，那它也不是 state。  

**搜索表单的功能**  

1. 每当用户改变表单的值，我们需要改变 state 来反映用户的当前输入。
2. 由于 state 只能由拥有它们的组件进行更改，FilterableProductTable 必须将一个能够触发 state 改变的回调函数（callback）传递给 SearchBar。
3. 使用输入框的 onChange 事件来监视用户输入的变化，并通知 FilterableProductTable 传递给 SearchBar 的回调函数。然后该回调函数将调用 setState()，从而更新应用。

