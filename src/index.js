import  React from 'react'
import ReactDOM from 'react-dom'

// 第一种创建组件方式，构建一个大写的function，就代表一个组件，需要return JSX
function Comp1() {
    return <div>这是 Comp1 组件</div>
}

const props = {
  name : "xhd",
  age : 27,
};

ReactDOM.render(
    <div>
        <Comp1 name = ""></Comp1>
    </div>,
    document.getElementById("root"));

