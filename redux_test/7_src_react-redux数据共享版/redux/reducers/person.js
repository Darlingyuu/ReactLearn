import { ADD_PERSON } from "../constant"

//初始化人的列表
const initState = []
export default function personReducer(preState=initState,action){
  const {type,data}=action
  switch(type){
    case ADD_PERSON: //将新添加的人放在列表最前面
      return [data,...preState]
    default:
      return preState
  }
}