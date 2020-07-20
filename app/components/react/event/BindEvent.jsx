import React from 'react'

export default class BindEventComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "zhangqingxing"
        }
    }
    render() {
        return
        <div>
            <button onClick={this.BindInvoke}></button>
            /**
            箭头函数写法
             */
            <button onMouseDown={() => { this.BindInvoke() }}></button>
        </div>
    }

    BindInvoke() {
        console.log("ok.................")
        /**
         * 异步执行、执行完成之后有callback
         */
        this.setState({ name: "11" },()=>{

        });
    }
    componentWillMount(){

    }

    shouldComponentUpdate(){
        
    }
}