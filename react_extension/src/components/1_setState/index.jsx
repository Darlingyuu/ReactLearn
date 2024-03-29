import React, { Component } from 'react'

export default class Demo extends Component {
  state = {count:0}


  add = ()=>{
    //对象式的setState
    // //1.获取原来的count值
    // const {count}=this.state
    // //2.更新状态,react异步更新
    // this.setState({count:count+1},()=>{
    //   //callback是可选的回调函数, 它在状态更新完毕、界面也更新后(render调用后)才被调用
    //   console.log(this.state.count)
    // })

    //函数式的setState
    this.setState(state => ({count:this.state.count+1}))

  }

  render() {
    return (
      <div>
        <h1>当前求和为：{this.state.count}</h1>
        <button onClick={this.add}>点我+1</button>
      </div>
    )
  }
}
