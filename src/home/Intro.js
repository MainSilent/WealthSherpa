import React, { Component } from 'react'
import stJamesPlaceLogo from '../assets/images/st_james_place_logo.png'
import Preview1 from '../assets/images/preview1.png'
import Preview2 from '../assets/images/preview2.png'

import gsap from "gsap"
import ScrollMagic from 'scrollmagic'
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap"
ScrollMagicPluginGsap(ScrollMagic, gsap)

class Intro extends Component {
    setScrollAnimation() {
        const controller = new ScrollMagic.Controller()
        const first = gsap.to(".intro .preview .first", { opacity: 0, top: '-50%' })
        const second = gsap.to(".intro .preview .second", { opacity: 1 })
        const first_shadow = gsap.to(".intro .preview .first", { filter: 'drop-shadow(0 0 4px rgba(0, 0, 0, 0.2))' })
        const second_shadow = gsap.to(".intro .preview .second", { filter: 'drop-shadow(6px 6px 4px rgba(0, 0, 0, 0.2))' })

        new ScrollMagic.Scene({
            offset: 0,
            duration: 1200
        })
        .setPin("body")
        .addTo(controller)

        new ScrollMagic.Scene({
            offset: 0,
            duration: 100
        })
        .setTween(first_shadow)
        .addTo(controller)

        new ScrollMagic.Scene({
            offset: 100,
            duration: 1000
        })
        .setTween(first)
        .addTo(controller)

        new ScrollMagic.Scene({
            offset: 200,
            duration: 1000
        })
        .setTween(second)
        .addTo(controller)

        new ScrollMagic.Scene({
            offset: 1000,
            duration: 200
        })
        .setTween(second_shadow)
        .addTo(controller)
    }
    componentDidMount() {
        document.querySelector('html').style.overflow = 'hidden'
        document.onreadystatechange = _ => {
            if (document.readyState === "complete") {
                window.scrollTo({ top: 0 })
                document.querySelector('html').style.overflow = 'auto'
                this.setScrollAnimation()
            }
        }
    }
    render() {
        return (
            <div className="intro">
                <div>
                    <h1 className="title">Save time on fund<br/>switch letters</h1>

                    <p className="description">Reduce the time to write a fund switch letter down to a couple of minutes, so each meeting is more profitable.</p>

                    <span className="stjamesplace">
                        Trusted by
                        <img src={stJamesPlaceLogo} alt="stjamesplace"/>
                        partners
                    </span>

                    <a href={process.env.PUBLIC_URL+'/'}>Start now</a>
                </div>

                <div className="preview">
                    <img className="first" src={Preview1} alt="preview"/>
                    <img className="second" src={Preview2} alt="preview"/>
                </div>

                <div className="background"></div>
            </div>
        )
    }
}

export default Intro