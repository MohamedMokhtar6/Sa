import React from 'react'
import { Carousel, } from 'react-bootstrap'
import back1 from '../../Images/back1.png'
import back2 from '../../Images/back2.png'
import back3 from '../../Images/back3.png'

function Landing() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={back1}
                    alt="First slide"
                    style={{ height: '90vh' }}

                />
                <Carousel.Caption className='centext'>
                    <h3>End-to-End School Management System</h3>
                    <p>School Management made easy.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={back2}
                    alt="Second slide"
                    style={{ height: '90vh' }}
                />

                <Carousel.Caption className='centext'>
                    <h3>End-to-End School Management System</h3>
                    <p>School Management made easy.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={back3}
                    alt="Third slide"
                    style={{ height: '90vh' }}
                />

                <Carousel.Caption className='centext'>
                    <h3>End-to-End School Management System</h3>
                    <p>School Management made easy.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Landing