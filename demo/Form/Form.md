# 表单  

**受控组件**  
输入控件的状态状态都保存在 this.state 中，只能通过 this.setState()来更新的表单元素，并且输入过程中发生的一些表单操作也由React组件控制

1. form 上绑定 onSubmit 事件函数
2. input上绑定 onChange 事件函数
3. 控件的 value 属性绑定到 this.state 状态上
4. `<textarea value={this.state.value} />`
5. select 标签不再使用 selected 属性来设置默认选中，而是在 select 标签上设置 value 为某个状态来设置默认选中
6. 也可以将数组传入 select 标签的 value 属性，并设置`mutiple={true}`来开启多个选项