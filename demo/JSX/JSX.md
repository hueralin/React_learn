# JSX  

``` javascript
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
```
**JSX也是一个表达式**  
1. 在编译之后，JSX 表达式会被转为普通 JavaScript 函数调用，并且对其取值后得到 JavaScript 对象。
2. 也就是说，你可以在 if 语句和 for 循环的代码块中使用 JSX，将 JSX 赋值给变量，把 JSX 当作参数传入，以及从函数中返回 JSX  

``` javascript
const name = 'Ma lin';
const element = greeting(name);
function greeting (user) {
    if (user) {
        return <h1>你好，{name} !</h1>
    } else {
        return <h1>嗯？你是谁？！</h1>
    }
}
ReactDOM.render(
    element,
    document.getElementById('root')
);
```
**JSX特定属性**  
1. 属性值为字符串字面量 `const element = <div tabIndex="0"></div>`  
2. 向属性值中插入JavaScript表达式   `const element = <img src={goods.imgSrc}>`  

**单标签应使用 ‘/’ 结尾** `<img src="xxx" />`  

**JSX防注入攻击**  

**JSX 表示对象**  
Babel 会把 JSX 转译成一个名为 `React.createElement()` 函数调用。
---   
##  配置Babel，转译JSX  
1. 安装npm和node
2. 创建一个新文件夹，运行npm init命令
3. npm install babel-cli babel-preset-react --save-dev
4. 在package.json中添加预设 {"babel": { "presets": ["react"] } }
5. 检查Babel是否工作 ./node_modules/.bin/babel --version
6. 将jsx转化为js文件
7. ./node_modules/.bin/babel a.jsx -o a.js
8. 也可以将该命令写到package的脚本中 “build”：“./node_modules/.bin/babel a.jsx -o a.js”
9. 使用 -w（--watch）选项来自动转译
