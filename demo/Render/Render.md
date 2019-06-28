# 元素渲染  
**元素是构成 React 应用的最小砖块**  
React元素是一种创建开销极小的普通对象，React DOM会负责更新DOM，使其与React元素保持一致。  

`<div id='root'></div>`  
这是一个根DOM节点，由React DOM管理，里面的所有内容都将会被render渲染出的DOM覆盖。  

**React元素是不可变对象**  
一个元素即记录了某个特定时刻的UI。  
每次更新UI都需要创建一个全新的元素，并将其传入ReactDOM.render()。  
**React只更新变化的部分**  
React DOM会将当前的状态和原来的状态做对比，只将变化的部分更新。
