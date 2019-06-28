# 组件  
> 组件，类似于JavaScript函数，接受props，返回可展示页面的React元素  

组件分为两种：
1. 函数组件
2. class组件  

例如：  

*函数式声明*
``` javascript
function Welcome(props) {
    return <h1>Hello {props.name}</h1>;
}
const element = <Welcome name="malin" />;
ReactDOM.render(
    element,
    document.getElementById('root')
);
```  
过程：  
1. 调用ReactDOM.render()，将`<Welcome name="malin" />`传入作为参数
2. React调用Welcome组件，将`{name: 'malin'}`作为props对象传入Welcome函数  
3. Welcome组件返回`<h1>Hello malin</h1>`  
4. React DOM将DOM渲染为`<h1>Hello malin</h1>`  

**Props的只读性**  

无论组件是函数声明还是class声明，都不能修改props