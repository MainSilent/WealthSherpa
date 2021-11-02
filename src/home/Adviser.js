import React, { Component } from 'react'
import stJamesPlaceLogo from '../assets/images/st_james_place_logo.png'
import AdviserPicture from '../assets/images/edward_hudson.png'
import QuoteUp from '../assets/images/quote_up.png'
import QuoteDown from '../assets/images/quote_down.png'

class Adviser extends Component {
    render() {
        return (
            <div className="adviser-container">
                <h2 className="title">SJP advisers love us</h2>

                <div className="adviser">
                    <img className="picture" src={AdviserPicture} alt="Edward Hudson" />

                    <div className="comment">
                        <div className="content">
                            <img src={QuoteUp} alt="quote_up" />
                            <p className="text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            </p>
                            <img src={QuoteDown} alt="quote_down" />
                        </div>

                        <p className="name">Edward Hudson, <span>Financial adviser</span></p>

                        <img className="stJamesPlaceLogo" src={stJamesPlaceLogo} alt="stjamesplace"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default  Adviser