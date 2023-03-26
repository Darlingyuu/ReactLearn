import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// class Demo extends Component {

//   state = {count:0}

//   add=()=>{
//     this.setState(state=>({count:this.state.count+1}))
//   }

//   render() {
//     return (
//       <div>
//         <h1>当前求和为：{this.state.count}</h1>
//         <button onClick={this.add}>点我+1</button>
//       </div>
//     )
//   }
// }

function Demo(){
  const [count,setCount] = React.useState(0)
  const myRef = React.useRef();

  React.useEffect(()=>{
    let timer = setInterval(()=>{
      setCount(count=>count+1)
    },1000)
    return ()=>{
      clearInterval(timer)
    }
  },[])

  function add(){
    // setCount(count+1)  //第一种写法
    setCount((count)=>count+1)
  }

  //提示输入胡的回调
  function show(){
    console.log(myRef.current.value)
  }


  //卸载组件的回调
  function unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  }

  return (
    <div>
      <input type="text" ref={myRef}/>
      <h1>当前求和为：{count}</h1>
      <button onClick={add}>点我+1</button>
      <button onClick={unmount}>卸载组件</button>
      <button onClick={show}>点我提示数据</button>
    </div>
  )
}



export default Demo
