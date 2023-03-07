import React, { Component } from 'react'

export default class Count extends Component {

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
