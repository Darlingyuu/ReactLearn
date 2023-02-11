import React, {Component} from 'react';
import axios from 'axios'
import PubSub from 'pubsub-js'

class Search extends Component {
    search=()=>{
        //获取用户的输入(连续解构赋值+重命名)
        const {keyWordElement:{value:keyword}} = this;
        //发送请求前通知List更新状态
        // this.props.updateAppState({isFirst:false,isLoading:true})
        PubSub.publish('github',{isFirst:false,isLoading:true});
        //发送网络请求
        axios.get(`/api1/search/users?q=${keyword}`).then(
            response=>{
                //请求成功后通知List更新状态
                PubSub.publish('github',{isLoading:false,users:response.data.items});
                // this.props.updateAppState({isLoading:false,users:response.data.items})
            },
            error=>{
                //请求失败后通知List更新状态
                PubSub.publish('github',{isLoading:false,err:error.message});
                // this.props.updateAppState({isLoading:false,err:error.message})
            }
        )
    };

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c=>{this.keyWordElement = c}} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        );
    }
}

export default Search;
