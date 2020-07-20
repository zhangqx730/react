import React from 'react'

import ReactDOM from 'react-dom'
import ListItem from './listItem'
/**
 * 评论列表组件
 */
class Clist extends React.Component {
    constructor() {
        super()
        this.status = {
            commlist: [
                {
                    name: "zhangqing",
                    sex: "男"
                },
                {
                    name: "baijiayi",
                    sex: "女"
                }
            ]
        }
    }
    render() {
        return <div>{this.state.commlist.forEach(element => {
            <ListItem>{element}</ListItem>
        })}</div>
    }
}
export default Clist;
