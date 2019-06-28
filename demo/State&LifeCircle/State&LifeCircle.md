# State & lifeCircle  

当前组件维护的状态都在 this.state 中  
state 的初始化在组件的构造函数中 `this.state = {name: 'malin'}`   

**State 的更新可能是异步的**  
出于性能考虑，React 可能会把多个 setState() 调用合并成一个调用,所以不要依赖他们的值来更新下一个状态

**生命周期方法**  
1. componentDidMount    当组件的输出被插入到DOM中时，就会调用该函数
2. componentWillUnmount 当组件从DOM中移除时调用该函数

**数据是向下流动的**  
数据是自上而下”或是“单向”的数据流。  
任何的 state 总是所属于特定的组件，而且从该 state 派生的任何数据或 UI 只能影响树中“低于”它们的组件。