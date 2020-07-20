import React from 'react';
import ReactDOM from 'react-dom';

import Component from './common/commonComponent.jsx';
/**
 * 第一种创建组件的形式
 */
function Hello() {
    return <div> Hello Component</div>;
}
ReactDOM.render(
    hi,
    <Hello>
    </Hello>, document.getElementById("apppp")
);
/**
 * 组件获取属性
 */
const para = {
    name: "zhangqingx",
    age: 18
};

/**
 * 
 * @param {*} props 
 * 
 * props 属性数据都是只读的
 */
function ReceivePara(props) {
    return <td>hello ------- props.name </td>
}
ReactDOM.render(
    <ReceivePara name={para.render} age={para.age} ></ReceivePara>,
    document.getElementById("app")
);

/**
 *  ...展开用算符
 */

/**
 * class 方式创建组件
 * 1、组件内部必须要有render 方法
 * 2、render 方法里面必须返回 jsx 虚拟dom
 */
class Table extends React.Component {
    constructor() {
        super();
        this.status = {
            key: "qqqq",
            keyName: "q11212"
        }
    }
    render() {
        return <div> class Component --- {this.props.name}---- {this.props.sex} ----{this.state.keyName}</div>;
    }
}

const objValue = {
    name: "zhangqx",
    sex: "男"
}

ReactDOM.render(
    <table name={this.objValue.name} sex={this.objValue.sex}></table>,
    document.getElementById("qq")
);

/**
 * props 和status 区别
 * 
 * 1、props 都是外界传过来的--不可以修改
 * 2、status 是组件私有数据(通过ajax获取来的) ---可以修改
 */


 /**
  * 样式表没有作用域
  * 
  * css样式=========待学习
  */

/**
 * React 中的事件
 */