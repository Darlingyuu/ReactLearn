import React, {Component} from 'react';

class News extends Component {
    //过两秒自动跳转
    // componentDidMount(){
    //     setInterval(()=>{
    //         this.props.history.push('/home/message')
    //     },2000)
    // }

    render() {
        return (
            <ul>
                <li>news001</li>
                <li>news002</li>
                <li>news003</li>
            </ul>
        );
    }
}

export default News;
