import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from './redux/store'

ReactDOM.render(<App/>,document.getElementById('root'))

//检测redux中状态的变化，只要变化，整个App就调用render
store.subscribe(()=>{
  ReactDOM.render(<App/>,document.getElementById('root'))
})