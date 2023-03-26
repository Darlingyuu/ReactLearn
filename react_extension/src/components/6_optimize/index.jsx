import React, { PureComponent } from 'react'
import './index.css'

export default class Parent extends PureComponent {
  state = {carName:'奔驰C63'}

  changeCar = ()=>{
    this.setState({carName:'迈巴赫'})

    //不要直接修改数据，而是要产生新对象
    //PureComponent只是进行state和props数据的浅比较, 如果只是数据对象内部数据变了
    //shouldComponentUpdate返回false,不会更新
    // const obj = this.state
    // obj.carName = '迈巴赫'
    // console.log(obj === this.state)  //true
    // this.setState(obj)
  }

  // shouldComponentUpdate(nextProps,nextSate){
  //   // console.log(this.props,this.state) //目前的props和state
  //   // console.log(nextProps,nextSate) //接下来要变化的目标props，目标state
  //   return !this.state.carName===nextSate.carName
  // }

  render() {
    console.log('Parent---render')

    const {carName}= this.state;
    return (
      <div className='parent'>
        <h3>我是Parent组件</h3>
        <span>我的车的名字是：{carName}</span> <br />
        <button onClick={this.changeCar}>点我换车</button>
        {/* <Child carName={carName}/> */}
        <Child carName='奧托'/>
      </div>
    )
  }
}

class Child extends PureComponent {

  // shouldComponentUpdate(nextProps,nextSate){
  //   // console.log(this.props,this.state) //目前的props和state
  //   // console.log(nextProps,nextSate) //接下来要变化的目标props，目标state
  //   return !this.props.carName===nextProps.carName
    
  // }


  
  render() {
    console.log('Child---render')

    return (
      <div className='child'>
        <h3>我是Child组件</h3>
        <span>我接到的车的名字是：{this.props.carName}</span> <br />
      </div>
    )
  }
}
