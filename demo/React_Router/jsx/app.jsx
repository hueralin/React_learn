
import React from 'react'
import { Router, Route, Link } from 'react-router-dom'

export default class Content extends React.Component {
    render() {
        return (
            <div>
                <h1>Node.University</h1>
                <div className="navbar navbar-default">
                    <ul className="nav nav-pills navbar-nav">
                        <li><Link to='/about' activeClassName="active">About</Link></li>
                        <li><Link to='/blog' activeClassName="active">Blog</Link></li>
                        <li><Link to='/contactus' activeClassName="active">Contact Us</Link></li>
                        <li><Link to='/login' activeClassName="active">Login</Link></li>
                    </ul>
                </div>
                {/* 渲染子路由 */}
                {this.props.children}
            </div>
        )
    }
}
