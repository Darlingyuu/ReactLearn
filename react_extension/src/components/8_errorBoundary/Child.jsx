import React, { Component } from 'react'

export default class Child extends Component {
  state = {
    // users:[
    //   {id:'001',name:'tom',age:18},
    //   {id:'002',name:'jack',age:19},
    //   {id:'003',name:'marry',age:20}
    // ]
    users:'abc'  //演示错误数据
  }
  render() {
    return (
      <div>
        <h3>我是Child组件</h3>
        {
          this.state.users.map((userObj)=>{
            return <h4 key={userObj.id}>{userObj.name}----{userObj.age}</h4>
          })
        }
      </div>
    )
  }
}
