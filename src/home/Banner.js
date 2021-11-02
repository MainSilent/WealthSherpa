import React, { Component } from 'react'
import MountainImage from '../assets/images/mountain_banner.png'

class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <div className="content">
                    <h2 className="title">Start saving time on letters now!</h2>
                    <p className="description">Tailored letters in just a few clicks. Save time and make relationships more profitable.</p>
                    <a className="increase-btn" href='/'>Increase my profit</a>
                </div>

                <div className="ellipse"></div>
                <img className="background" src={MountainImage} alt="background" />
            </div>
        )
    }
}

export default Banner