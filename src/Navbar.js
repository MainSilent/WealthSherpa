import React, { Component, useState } from 'react'
import Logo from './assets/images/logo.png'
import ModalDialog from './Form'

function Items() {
    const [open, setOpen] = useState(false)
    const [type, setType] = useState('')

    const handleOpen = (_type) => {
        setOpen(true);
        setType(_type);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
            <p>How it works</p>
            <p>FAQ</p>

            <p className="signup" onClick={() => handleOpen('signup')}>Sign up</p>
            <p className="login" onClick={() => handleOpen('login')}>Log in</p>

            <ModalDialog open={open} type={type} handleClose={handleClose} />
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