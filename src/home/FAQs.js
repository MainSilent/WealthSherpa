import React, { Component } from 'react'
import Plus from '../assets/images/plus.svg'
import Minus from '../assets/images/minus.svg'
import faqs from '../data/FAQs.json'

class FAQs extends Component {
    constructor() {
        super()
        this.state = {
            states: []
        }
    }
    toggle(i) {
        const newStates = this.state.states
        newStates[i] = !newStates[i]
        this.setState({
            states: newStates,
        })
    }
    componentDidMount() {
        this.setState({
            states: Array(faqs.length).fill(false)
        })
    }
    render() {
        return (
            <div className="faqs-container">
                <h2 className="title">FAQs</h2>
                <p className="description">Everything you need to know about our product</p>

                <div className="faqs">
                {faqs.map((faq, i) => 
                    <div className="faq-container" key={i}>
                        <div className="toggle" onClick={() => this.toggle(i)}>
                            {this.state.states[i] ?
                                <img src={Minus} alt="Minus"/> :
                                <img src={Plus} alt="Plus"/>
                            }
                        </div>

                        <div className="faq">
                            <p className="title" onClick={() => this.toggle(i)}>{faq.question}</p>
                            {this.state.states[i] && 
                                <p className="content">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                </p>
                            }
                        </div>
                    </div> 
                )}
                </div>
            </div>
        )
    }
}

export default FAQs