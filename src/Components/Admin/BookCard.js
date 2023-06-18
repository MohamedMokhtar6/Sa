import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function BookCard({ img, name, rate, num }) {
    return (
        <Col xs='12' sm='6' md='4' lg='3' className='text-center bookcard m-3 justify-content-center'>
            <Link to={`/book/:${num}`} className='link text-black'>
                <img src={img} alt={name} className='my-3' />
                <h4 className='my-3'>{name}</h4>
                <div className=''><span>{rate}/5</span> <i className="fa-solid fa-star gold"></i></div>
            </Link>
        </Col>

    )
}

export default BookCard