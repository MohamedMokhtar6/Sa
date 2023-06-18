import React from 'react'
import { Button } from 'react-bootstrap'

function ContactUs() {
    return (
        <div className="contact" id="Contact">
            <div className="container">
                <div className="spical-heading">
                    <h2>CONTACT US</h2>
                    <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt.</p>
                </div>
                <div className="cont text-center">
                    <form action="">
                        <input type="text" placeholder="YOUR NAME" />
                        <input type="email" placeholder="YOUR MAIL" />
                        <input type="text" placeholder="YOUR MESSAGE" />
                    </form>
                    <Button className='bg-main text-main border-0'>Send</Button>

                </div>

            </div>
        </div>
    )
}

export default ContactUs