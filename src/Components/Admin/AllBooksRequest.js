import React from 'react'
import { Row } from 'react-bootstrap'
import RequestCard from './RequestCard'
import book1 from '../../Images/book1.jpg'
import book4 from '../../Images/book4.png'
import book8 from '../../Images/book8.jpg'
import book15 from '../../Images/book15.jpg'
import book2 from '../../Images/book2.png'
import book3 from '../../Images/book3.png'

function AllBooksRequest() {
    return (
        <>
            <Row className='m-0 justify-content-center'>
                <RequestCard img={book1} Name={'Room 207'} Role={"Ahmed"} />
                <RequestCard img={book2} Name={'Great Houses of London'} Role={"Mohamed"} />
                <RequestCard img={book3} Name={'Steve Jobs The Man Who Thought Different'} Role={"Ali"} />
                <RequestCard img={book4} Name={'Working Backward'} Role={"Omar"} />
                <RequestCard img={book1} Name={'Room 207'} Role={"Sayed"} />
                <RequestCard img={book15} Name={'On the Nile in the Golden Age'} Role={"Emad"} />
                <RequestCard img={book8} Name={'BKS Iyengar Yoga The Path to H'} Role={"Ali"} />

            </Row>
        </>
    )
}

export default AllBooksRequest