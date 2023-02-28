import React, {Component} from 'react';
import News from "./News";
import Message from "./Message";
import MyNacLink from "../../components/MyNavLink";
import {Route,Redirect} from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div>
                <h3>我是Home的内容</h3>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            {/*<a className="list-group-item" href="./home-news.html">News</a>*/}
                            <MyNacLink to="/home/news">News</MyNacLink>
                        </li>
                        <li>
                            {/*<a className="list-group-item active" href="./home-message.html">Message</a>*/}
                            <MyNacLink to="/home/message">Message</MyNacLink>
                        </li>
                    </ul>

                    {/*注册路由*/}
                    <Route path="/home/news" component={News}/>
                    <Route path="/home/message" component={Message}/>
                    <Redirect to="/home/news"/>
                </div>
            </div>
        );
    }
}

export default Home;
