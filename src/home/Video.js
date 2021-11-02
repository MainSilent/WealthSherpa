import React, { Component } from 'react'
import Thumbnail from '../assets/images/thumbnail.png'

class Video extends Component {
    render() {
        return (
            <div className="video-container">
                <p className="play-btn">
                    <svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26 13.2679C27.3333 14.0377 27.3333 15.9622 26 16.732L3.5 29.7224C2.16667 30.4922 0.499999 29.53 0.499999 27.9904L0.5 2.00962C0.5 0.470019 2.16667 -0.492234 3.5 0.277567L26 13.2679Z" fill="white"/>
                    </svg>
                </p>
                <img src={Thumbnail} className="thumbnail" alt="Thumbnail"/>
            </div>
        )
    }
}

export default Video