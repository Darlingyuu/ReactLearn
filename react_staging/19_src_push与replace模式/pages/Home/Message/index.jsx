import React, {Component} from 'react';
import Detail from './Detail';
import {Link,Route} from 'react-router-dom'

class Message extends Component {
    state = {
        messageArr:[
            {id:"01",title:"消息1"},
            {id:"02",title:"消息2"},
            {id:"03",title:"消息3"},
        ]
    }
    render() {
        const {messageArr} = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map((msgObj)=>{
                            return (
                                <li key={msgObj.id}>
                                    {/* 向路由组件传递params参数 */}
                                    {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp; */}

                                    {/* 向路由组件传递search参数 */}
                                    {/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}

                                    {/* 向路由组件传递state参数 */}
                                    {/* 默认为push模式(压栈)，浏览器回退能进入之前的页面(出栈)，当时设置replace模式时，会将当前url替换栈顶url */}
                                    {/* 若将各组件均改为replace模式，则不会留下浏览痕迹(浏览器上的左右箭头为灰) */}
                                    <Link replace to={{pathname:'/home/message/detail',state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
                {/* 声明接收params参数 */}
                {/* <Route path="/home/message/detail/:id/:title" component={Detail}/> */}

                {/* search参数无需声明接收，正常注册路由即可 */}
                {/* <Route path="/home/message/detail" component={Detail}/> */}

                {/* state参数无需声明接收，正常注册路由即可 */}
                <Route path="/home/message/detail" component={Detail}/>

                
            </div>
           
        );
    }
}

export default Message;
