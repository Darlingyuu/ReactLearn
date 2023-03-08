import React, { Component } from 'react'
//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
//引入action
import {createDecrementAction, createIncrementAction, createIncrementAsyncAction} from '../../redux/count_action'

//定义UI组件
class Count extends Component {

  increment = () => {
    const { value } = this.selectNumber
    this.props.jia(value)
  }
  decrement = () => {
    const { value } = this.selectNumber
    this.props.jian(value)
  }
  incrementIfOdd = () => {
    const { value } = this.selectNumber
    if(this.props.count % 2 !== 0){
      this.props.jia(value)
    }

  }
  incrementAsync = () => {
    const { value } = this.selectNumber
    this.props.jiaAsync(value,500)
  }

  render() {
    return (
      <div>
        <h1>当前求和为：{this.props.count}</h1>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}



//使用connect()()创建并暴露一个Count的容器组件
export default connect(
  state=>({count:state}),
  //mapDispatchToProps一般写法
  // dispatch=>({
  //    jia:number => dispatch(createIncrementAction(number)),
  //    jian: number => dispatch(createDecrementAction(number)),
  //    jiaAsync: (number,time) => dispatch(createIncrementAsyncAction(number,time))
  //  })

  //mapDispatchToProps简写
  {
    jia:createIncrementAction,
    jian:createDecrementAction,
    jiaAsync:createIncrementAsyncAction,
  }
  )(Count)
