import React, { Component } from 'react'
import OwnerPicture from '../assets/images/simon_dunkelman.png'
import QuoteUp from '../assets/images/quote_up.png'
import QuoteDown from '../assets/images/quote_down.png'

class Owner extends Component {
    render() {
        return (
            <div className="owner-container">
                <h2 className="title">Our story</h2>
                <p className="description">How I came to make this product</p>

                <div className="owner">
                    <div className="comment">
                        <div className="content">
                            <img src={QuoteUp} alt="quote_up" />
                            <p className="text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <img src={QuoteDown} alt="quote_down" />
                        </div>

                        <p className="name">Simon Dunkelman, <span>Owner</span></p>
                    </div>

                    <img className="picture" src={OwnerPicture} alt="Simon Dunkelman" />
                </div>
            </div>
        )
    }
}

export default Owner