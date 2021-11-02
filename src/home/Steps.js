import React, { Component } from 'react'
import step1Image from '../assets/images/step1.png'
import step2Image from '../assets/images/step2.png'
import step3Image from '../assets/images/step3.png'

class Steps extends Component {
    constructor() {
        super()
        this.state = {
            width: document.documentElement.clientWidth
        }
        this.onScroll = this.onScroll.bind(this)
    }
    onScroll(e) {
        const steps = document.querySelectorAll('.steps > div:not(.line)')
        steps.forEach((step, i) => {
            if (this.props.inViewport(step)) {
                step.querySelector('p').style.animation = `${i === 1 ? 'odd_step_animation' : 'even_step_animation'} 0.7s forwards, step_animation 0.7s forwards`
                step.querySelector('img').style.animation = `${i === 1 ? 'even_step_animation' : 'odd_step_animation'} 0.7s forwards, step_animation 0.7s forwards`
            }
        })
    }
    componentDidMount() {
        this.onScroll()
        document.addEventListener("scroll", this.onScroll)
    }
    render() {
        return (
            <div className="steps-container">
                <h2 className="title">How it works</h2>
                <h2 className="description">Create personalised letters in</h2>

                <div className="steps">
                    <div className="step1">
                        <p className="detail">{this.state.width <= 800 ? '1- ' : ''}Add in client and meeting details to customise letter creation</p>
                        <span className="number">01</span>
                        <img src={step1Image} alt="Step 1"/>
                    </div>

                    <div className="step2">
                        {this.state.width > 800 ?
                            <>
                                <img src={step2Image} alt="Step 2"/>
                                <span className="number">02</span>
                                <p className="detail">Simply upload the fund switch and wealth account PDFs to automatically extract necessary data to save time</p>
                            </>
                            :
                            <>
                                <p className="detail">2- Simply upload the fund switch and wealth account PDFs to automatically extract necessary data to save time</p>
                                <img src={step2Image} alt="Step 2"/>
                            </>
                        }

                    </div>

                    <div className="step3">
                        <p className="detail">{this.state.width <= 800 ? '3- ' : ''}Automatically tailors’ details based on context. Reduces human error</p>
                        <span className="number">03</span>
                        <img src={step3Image} alt="Step 3"/>
                    </div>

                    <div className="line"></div>
                </div>
            </div>
        )
    }
}


export default Steps