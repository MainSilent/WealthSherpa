import React, { Component } from 'react'
import Logo from './assets/images/logo.png'

function Items() {
    return (
        <>
            <a href='/'>How it works</a>
            <a href='/'>FAQ</a>

            <a href='/signup' className="signup">Sign up</a>
            <a href='/login' className="login">Log in</a>
        </>
    )
}

class Topbar extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }
    render() {
        return (
            <div className="navbar-container">
                <div className="navbar">
                    <div className="logo">
                        <a href="/"><img src={Logo} alt="Logo" /></a>
                        <a href="/"><h1>Wealth Sherpa</h1></a>
                    </div>
                    
                    <div className="items">
                        <Items />
                    </div>

                    {/* Responsive Menu */}
                    <div id="nav-icon" onClick={() => this.setState({ isOpen: !this.state.isOpen })} className={this.state.isOpen ? "open" : ''}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul className="items-rwd" style={this.state.isOpen ? { width: document.documentElement.clientWidth >= 350 ? '300px' : '100%'} : {}}>
                        <Items />
                    </ul>
                </div>
            </div>
        )
    }
}

export default Topbar