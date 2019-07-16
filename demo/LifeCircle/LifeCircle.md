# 生命周期事件  

**分类**  
1. 挂载事件（仅调用一次）
2. 更新事件（可调用多次）
3. 卸载事件（仅调用一次）  


**生命周期方法**  
1. 挂载  
    1. componentWillMount   挂载DOM之前
    2. componentDidMount    组件挂载渲染之后
2. 更新  
    1. componentWillReceiveProps(nextProps)    组件即将接收属性时
    2. shouldComponentUpdate(nextProps, nextState)    通过判断何时更新，对组件的渲染进行优化
    3. componentWillUpdate(nextProps, nextState)    组件更新之前
    4. componentDidUpdate   组件更新之后
3. 卸载  
    1. componentWillUnmount 组件卸载之前，解绑事件监听等  
---

### 挂载事件  
执行过程：constructor -> componentWillMount -> render -> componentDidMount

**componentWillMount**  
发生初始化渲染之前，此时React元素还没有被挂载到真实DOM中。在该函数中使用setState()函数后，render函数将会获得新的状态，不会执行额外的渲染。只执行一次，服务器端也可以执行。  
**componentDidMount**  
发生在初始化渲染之后，只执行一次且仅在浏览器端执行。可以在该事件函数中进行一些框架集成、XHR请求之类的工作。也可以访问任何子组件的引用，因为子组件的componentDidMount会先于父组件执行。  

### 更新组件  
执行过程：componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate -> render -> componentDidUpdate  

**componentWillReceiveProps（newProps）**  
该函数发生在接收新的属性之前，用于捕获新属性并作出一些设置，方便添加一些逻辑。一般来说，在该函数中调用setState不会发生额外的重新渲染。因为React不能判断接收到的属性是否为新属性（即不知道属性值是否发生了变化），因此每次接收props时都会调用该函数，具体更不更新取决于shouldComponentUpdate函数。  

**shouldComponentUpdate（newProps，newState）**  
可在该函数中做一些判断，来决定是否更新，return true/false。如果返回false，说明不是新属性，不需要更新，接下来的componentWillUpdate和componentDidUpdate都不会被执行。本质上，可以控制组件是否需要重新渲染。  
**componentWillUpdate（newProps，newState）**  
用于更新发生前执行准备工作的地方，此时不能再去调用setState，因为马上就要更新了。

**componentDidUpdate（oldProps，oldState）**  
此时，所有的更新都已经被挂载到DOM中  

**componentWillUnmount**  
组件将要卸载时调用，可以清除定时器事件绑定等逻辑。