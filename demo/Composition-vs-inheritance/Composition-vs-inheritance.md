# 组合与继承  
**组合，相当于Vue中的slot插槽**  

通过在一个组件中预留 “占位符”，由父组件向占位符中传入自定义的内容  
``` javascript
function FancyBorder(props) {
  return (
    <div>
      {props.children}
    </div>
  );
}
```  
props.children是默认的占位符  

**当然也可以自定义占位符名称**   

``` javascript
function SplitPane(props) {
  return (
    <div>
      <div>
        {props.left}
      </div>
      <div>
        {props.right}
      </div>
    </div>
  );
}

function App() {
  return (
    <SplitPane  left={<Contacts />}  right={<Chat />/>
  );
}
```
Contacts 和 Chat 是其他组件  

**在有些情况下，一些组件可能是另一个组件的特例**  

例如对话框组件 Dialog ,包含警告对话框，成功对话框，提醒对话框等。这些对话框都是基本 Dialog 组件的特例（定制版）。
所以可以通过props来传入具体的参数来实现不同的对话框。  
``` javascript
function Dialog(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.message}</p>
    </div>
  );
}

function WarnDialog() {
  return (
    <Dialog  title="Warning" message="Error!" />
  );
}
```
