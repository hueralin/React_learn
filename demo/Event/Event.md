# 事件处理  

`<button onClick={handle}>Button</button>`  
1. 事件名使用小驼峰命名法
2. 在 { } 中传入一个函数为事件处理函数
3. 不能使用 `return false;` 来阻止默认行为

**注意：class的方法不会默认绑定this**  
所以，当要把class的方法传给事件绑定作为回调函数时应先进行this绑定  
有两种解决办法  
1. `this.handleFunc = this.handleFunc.bind(this)`
2. `<button onClick={(e) => this.handleFunc(e)}>Button</button>`    箭头函数  

**向事件处理函数传参**  

`<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>`  
`<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>`