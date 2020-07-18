import React from 'react';
import ReactDOM from 'react-dom';

/**
 * React 用来创建虚拟DOM、组件 以及管理组件的生命周期
 * 参数1：标签类型
 * 参数2：属性对象 或者null
 * 参数3：文本内容
 * 参数4: 其他子节点
 */
const domElement = React.createElement("td",{id:"appp","title":"zhangqingxing"},"hello td");

/**
 * ReactDOM 负责将虚拟DOM 挂在容器上
 */
ReactDOM.render(domElement,document.getElementById(root));




