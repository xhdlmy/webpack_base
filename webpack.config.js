/**
 *  Chrome v8引擎（解释js代码）支持哪些新的 JS 代码特性，Node.js 就支持哪些
 * @type {{mode: string}}
 */

/*
Node.js 就是实现了 CommonJS 规范，然后 Node.js 就提供了很多API，比如 path 模块，这就叫做原生模块。
path 模块提供用于处理文件路径和目录路径的实用工具，然后就可以用 path 对象去操作 文件
*/
// Node.js 的原生API path
const path = require('path');
// 导入 html-webpack-plugin 插件，感觉是生成了一个类，提供可以操作的方法
const  HtmlWebPackPlugin = require('html-webpack-plugin'); // 创建一个类，从 html-webpack-plugin 导入
// 创建一个插件的实例对象
const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname, '/src/index.html'), // 源文件
    filename: 'index.html', // 生成内存中首页的名称
});

// 执行 webpack 命令
// 会向外暴露一个打包的配置对象 webpack 是基于 Node.js 构建的，支持所有 Node API 和语法
// 以下为 Node.js 语法
// exports 是对 module.exports 对象的一个引用，require 是只能看到 module.exports 对象
module.exports = {
    "mode" : "development",
    plugins: [
        htmlPlugin, // 都是 json 格式，htmlPlugin 就是上面 new 的对象
    ]
};

// 以下为 ES6 向外导出模块的 API，所以在这儿不适用 import or from
// Node.js 不支持 ES6 以上的代码，不过可以用 Babel 转换器将 ES6 代码转换低版本
// export default {}

