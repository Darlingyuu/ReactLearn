import React, { Component } from 'react'
// import qs from 'qs'

//key=value&key=value    urlencoded风格
// let obj = {name:'tom',age:18}; //name=tom&age=18  
// console.log(qs.stringify(obj));  //将json格式转成urlencoded格式     name=tom&age=18
// let str="carName=奔驰&price=199"
// console.log(qs.parse(str))  //{carName:'奔驰',price:199}

const DetailData = [
  {id:"01",content:"你好北京"},
  {id:"02",content:"你好上海"},
  {id:"03",content:"你好深圳"},
]

export default class Detail extends Component {
  render() {
    console.log(this.props);

    // 接收params参数
    // const {id,title} = this.props.match.params

    // 接收search参数
    // const {search}=this.props.location
    // const {id,title} = qs.parse(search.slice(1))

    //接收search参数
    const {id,title}=this.props.location.state || {}

    const findResult = DetailData.find((detailObj)=>{
      return detailObj.id === id
    }) || {}
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{findResult.content}</li>
      </ul>
    )
  }
}
