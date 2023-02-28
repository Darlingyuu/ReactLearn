import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

class MyNacLink extends Component {
    render() {
        return (
            <NavLink activeClassName="mylight" className="list-group-item" {...this.props}/>
        );
    }
}

export default MyNacLink;
