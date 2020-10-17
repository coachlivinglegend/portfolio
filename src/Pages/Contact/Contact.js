import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div className="home__wrapper">
                <div className="home__intro">
                    <figure>
                        <img src="https://res.cloudinary.com/favourcodes/image/upload/v1598125526/profile-min.png" alt='Home'/>
                    </figure>
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
