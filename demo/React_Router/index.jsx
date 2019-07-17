import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router-dom'
import Content from './jsx/app.jsx'
import Blog from './jsx/blog.jsx'
import ContactUs from './jsx/contactus.jsx'
import Login from './jsx/login.jsx'
import About from './jsx/about.jsx'

ReactDOM.render(
    <Router>
        <Route path='/' component={Content}>
            <Route path='blog' component={Blog}></Route>
            <Route path='about' component={About}></Route>
            <Route path='contactus' component={ContactUs}></Route>
        </Route>
        <Route path='/login' component={Login}></Route>
    </Router>,
    document.getElementById('root')
)