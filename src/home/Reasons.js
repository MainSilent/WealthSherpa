import React, { Component } from 'react'
import Reason1 from '../assets/images/profit_benefit.svg'
import Reason2 from '../assets/images/efficiency_benefit.svg'
import Reason3 from '../assets/images/peace_benefit.svg'

class Reasons extends Component {
    constructor() {
        super()
        this.state = {
            width: document.documentElement.clientWidth
        }
        this.onScroll = this.onScroll.bind(this)
    }
    showFeature(f) {
        f.style.opacity = '1'
        f.style.transform = 'scale(1, 1)'
        
        setTimeout(() => f.style.transition = '0.2s', 200)
    }
    onScroll(e) {
        const reasons = document.querySelectorAll(".reasons div")
        reasons.forEach((feature, i) => {
            if (this.props.inViewport(feature)) {
                if (this.state.width <= 800) 
                    this.showFeature(feature)
                else
                    setTimeout(() => this.showFeature(feature),  200*i)
            } 
            else if (this.state.width <= 300)
                this.showFeature(feature)
        })
    }
    checkTop() {
        const height = document.documentElement.clientHeight
        const features = document.querySelector('.reasons-container')

        if ((height-800) > 150) {
            features.style.marginTop = `${height-800}px`
            return
        }

        features.style.marginTop = '150px'
    }
    componentDidMount() {
        this.checkTop()
        this.state.width <= 800 && this.onScroll()
        window.onresize = () => {
            this.checkTop()
            this.onScroll()
        }
        document.addEventListener("scroll", this.onScroll)
    }
    render() {
        return (
            <div className="reasons-container">
                <h2 className="title">Nurture more profitable relationships</h2>
                <p className="description">Why advisers who value their time and client relationships choose us</p>

                <div className="reasons">
                    <div>
                        <img src={Reason1} alt="Reason 1"/>
                        <p className="name">More profit</p>
                        <p className="content">Reduce the time spent on<br/>creating letters to improve<br/>your bottom line</p>
                    </div>

                    <div>
                        <img src={Reason2} alt="Reason 2"/>
                        <p className="name">Efficiency</p>
                        <p className="content">Automatically extract data<br/>straight from your St James<br/>Place PDFs to save time</p>
                    </div>

                    <div>
                        <img src={Reason3} alt="Reason 3"/>
                        <p className="name">Peace of mind</p>
                        <p className="content">Completely secure because<br/>data never leaves your<br/>desktop</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default  Reasons