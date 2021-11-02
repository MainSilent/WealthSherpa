import React, { Component } from 'react'
import Logo from './assets/images/logo.png'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <div className="footer">
                    <div className="logo">
                        <a href="/"><img src={Logo} alt="Logo" /></a>
                        <a href="/"><h1>Wealth Sherpa</h1></a>
                    </div>
                    
                    <p>© St. James’s Place Wealth Management Group</p>

                    <div className="items">
                        <a href="/">Terms of use</a>
                        <a href="/">Privacy Policy</a>
                    </div>
                </div>
            </div>
        )
    }
}
