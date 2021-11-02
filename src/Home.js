import React, { Component } from 'react'
import Intro from './home/Intro'
import Reasons from './home/Reasons'
import Steps from './home/Steps'
import Video from './home/Video'
import Adviser from './home/Adviser'
import Banner from './home/Banner'
import Owner from './home/Owner'
import FAQs from './home/FAQs'

class Home extends Component {
    inViewport(element) {
        const rect = element.getBoundingClientRect()
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        )
    }
    render() {
        return (
            <div className="home">
                <Intro />
                <Reasons inViewport={this.inViewport}/>
                <Steps inViewport={this.inViewport}/>
                <Video />
                <Adviser />
                <Banner />
                <Owner />
                <FAQs />
            </div>
        )
    }
}

export default Home