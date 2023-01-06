// 创建外壳组件APP
import React from 'react'
import Hello from "./components/Hello/index";
import Welcome from './components/Welcome/index'

// 创建并暴露App组件
export default class App extends React.Component{
    render(){
        return(
            <div>
                <Hello/>
                <Welcome/>
            </div>
        )
    }
}
