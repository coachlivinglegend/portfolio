import React, { useEffect } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap"
import './Contact.css'

const Contact = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(".home__intro", {duration: 2, ease:"bounce", x: -300})
        if (window.innerWidth > 875) {
            gsap.from(".home__desc.contact", {duration: 2, ease:"bounce", x: 300})
        }
        gsap.from(".quotetext.small", {duration: 1, delay:0.5, opacity: 0})
        if (window.innerWidth <= 875) {
            gsap.from(".home__desc.contact", {duration: 2, scrollTrigger: {trigger: ".home__desc", start: "top 70%"}, ease:"bounce", opacity: 0, x: 300})            
        }
    }, [])

    return (
        <div>
            <div className="home__wrapper">
                <div className="home__intro">
                    <div>
                        <h1 className='quotetext small'>I can do all things through Christ, Google, StackOverflow and MDN docs which strengthens me.</h1>
                    </div>
                </div>
                <div className="home__desc contact">
                    <h2>GET IN TOUCH</h2>
                    <p>I am currently open for remote job opportunities. I'd love to join a team of excellent web developers to build seamless web solutions.
                    Send me a mail and I'll respond as soon as I can or if it's urgent, you can ring my mobile telephone number.
                    </p>

                    <br/>
                    <div>
                        <h3>Email</h3>
                        <p>
                            <a href='mailto:tomiwabeckley@gmail.com'>tomiwabeckley@gmail.com</a>
                        </p>
                    </div>

                    <br/>
                    <div>
                        <h3>Phone Number</h3>
                        <p>
                            <a href='tel:+2348109479237'>0810 947 9237</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact