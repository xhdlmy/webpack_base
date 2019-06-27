import  React from 'react'
import ReactDOM from 'react-dom'

// react 创建 element
var div1 = React.createElement("div", { id : "div1"}, "我是创建的div1");

// JSX （XML） 语法
/*
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file.
js 文件本身不支持以下这种写法，但可以通过 babel 来进行转换
 */

const h1Text = "我是H1标题";

const strArr = ["科比", "杰伦", "局座"];

const arr = strArr.map( (name, index) =>  {
    console.log("" + index );
    return <h4 key={index} > 喜欢 {name} </h4>;
});

ReactDOM.render(
    <div>
        JSX 创建的div
        <hr/>
        <h1>{h1Text}</h1>
        <hr/>
        {
            strArr.map( (name, index) =>  {
                console.log("" + index );
                return <h4 key={index} > 喜欢 {name} </h4>;
            })
        }
    </div>,
    document.getElementById("root"));

