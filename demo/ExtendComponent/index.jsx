import React from 'react'
// 需要安装prop-types包
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

class Btn extends React.Component {
    render() {
        return (
            <button>{this.props.btnlabel}</button>
        )
    }
}
// 默认属性
Btn.defaultProps = {btnlabel: 'default'}

// 参数验证
Btn.propTypes = {
    btnlabel: PropTypes.string
}

sessionStorage.setItem('username', 'malin')

class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            label: ["Success", "Danger", "Primary"]
        }
    }
    render() {
        return (
            <div>
                <Btn btnlabel={this.state.label[0]}/>
                <Btn btnlabel={this.state.label[1]}/>
                <Btn btnlabel={this.state.label[2]}/>
                <Btn />
                {/* 渲染子组件,类似于插槽 */}
                {this.props.children}
                {React.Children.count(this.props.children)}
            </div>
        )
    }
}

class Welcome extends React.Component {
    render() {
        return (
            <div>Welcome to zhike, {this.props.username}</div>
        )
    }
}

class Intro extends React.Component {
    render() {
        return (
            <div>请简单介绍一下, {this.props.username}</div>
        )
    }
}

const getName = (Component) => {
    class NewComp extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                username: ''
            }
        }
        componentDidMount() {
            let username = sessionStorage.getItem('username')
            this.setState({
                username: username
            })
        }
        render() {
            return <Component {...this.state} {...this.props} />
        }
    }
    return NewComp
}

const HOCWelcome = getName(Welcome)
const HOCIntro = getName(Intro)

ReactDOM.render(
    <Container>
        <h3>Hello, React.js</h3>
        <p>Welcome to duli!</p>
        <HOCWelcome/>
        <HOCIntro/>
    </Container>,
    document.getElementById('root')
)