# 事件处理  

`<button onClick={handle}>Button</button>`  
1. 事件名使用小驼峰命名法
2. 在 { } 中传入一个函数为事件处理函数
3. 不能使用 `return false;` 来阻止默认行为

**注意：class的方法不会默认绑定this**  
所以，当要把class的方法传给事件绑定作为回调函数时应先进行this绑定  
有三种解决办法  
1. `this.handleFunc = this.handleFunc.bind(this)`
2. `<button onClick={(e) => this.handleFunc(e)}>Button</button>`    箭头函数  
2. `<button onClick={(function(e){xxx}).bind(this)}>Button</button>`    普通函数  

绑定bind是为了是为了可以在事件处理引用React元素实例，若使用React.createClass()或箭头函数时则不需要绑定。

**向事件处理函数传参**  

`<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>`  
`<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>`

**事件处理模型**  
捕获和冒泡，一般情况下的事件都发生在冒泡阶段，若想在捕获阶段触发事件，需要在事件名后面加Capture，例如onClickCapture  

**对于ul等列表形式的事件绑定**  
一般使用事件代理的方式，在父元素上添加事件监听，但实际上和事件代理不太一样。实际上事件会一直冒泡到document元素，并将事件监听绑定到document上。  

**事件对象**  
鉴于事件对象在不同浏览器间的差异，React封装了一个事件对象。用法和普通的事件对象相同，拥有绝大部分常用的API，比如：target,currentTarget,preventDefault,stopPropagation 也有一些新的API，例如：isDefaultPrevent()是否阻止了浏览器的默认行为？isPropagationStopped()是否取消了冒泡？type标签名字符串，persist()从事件池删除合成事件，并允许用保存其引用，isPersisit()是否xxxxx？  
如果想要访问原生的浏览器事件对象，也可以使用event.nativeEvent来获得。  

**传递事件处理程序**  
将组件拆分，例如代码中的Counter组件，可以拆分为展示组件和容器组件，状态和事件处理函数都放在容器组件中，展示组件只负责接受属性来展示，届时展示组件方便重用。因此，事件处理函数也是可以已属性的方式传递给展示组件（子组件），当然要绑定this，来修改容器组件中的状态。  

**组件通信**  
子组件之间：将一些公用属性和事件处理程序放置在父组件或容器组件中。因为直接通信耦合度较高。  

**响应React不支持的其他DOM事件**  
在componentDidMount中注册监听，在componentWillUnmount销毁监听器。