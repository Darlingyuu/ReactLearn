import React, {Component} from 'react';
import Header from "./components/Header";
import List from "./components/List";

import './App.css'
import Footer from "./components/Footer";


class App extends Component {
    //状态在哪里，修改状态的方法就在哪里

    //初始化状态
    state = {
        todos: [
            {id: '001', name: '吃饭', done: true},
            {id: '002', name: '睡觉', done: true},
            {id: '003', name: '打代码', done: false},
        ]
    };

    //addTodo用于添加一个todo，接收的参数是todo对象
    addTodo = (todoObj) => {
        //获取原todos
        const {todos} = this.state;
        //追加一个todo
        const newTodo = [todoObj, ...todos];
        //更新状态
        this.setState({todos: newTodo});
    };

    //用于更新一个todo对象
    updateTodo = (id,done) => {
        //获取状态中的todos
        const {todos} = this.state;
        //匹配处理数据
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id) return {...todoObj, done};
            else return todoObj
        });

        this.setState({todos:newTodos})
    };

    //用于删除一个todo对象
    deleteTodo = (id)=>{
        const {todos} = this.state;
        const newTodos = todos.filter((todoObj)=>{
            return todoObj.id !== id;
        });

        this.setState({todos:newTodos});
    };

    //checkAllTodo用于全选
    checkAlltodo=(done)=>{
        //获取原来的todos
        const {todos} = this.state;
        //加工数据
        const newTodos=todos.map((todoObj)=>{
            return{...todoObj,done}
        })
        this.setState({todos:newTodos});
    };

    //clearAllDone用于清除所有已完成的
    clearAllDone=()=>{
        //获取原来的todos
        const {todos} = this.state
        //过滤数据
        const newTodos=todos.filter((todoObj)=>{
            return !todoObj.done  //只留下done为false的数据
        })
        this.setState({todos:newTodos});
    };

    render() {
        const {todos} = this.state;
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={todos} checkAlltodo={this.checkAlltodo} clearAllDone={this.clearAllDone}/>
                </div>
            </div>
        );
    }
}

export default App;
