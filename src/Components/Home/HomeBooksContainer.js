import React from 'react'
import { Container, Row } from 'react-bootstrap'
import BookCard from '../Admin/BookCard'
import SubTitle from '../util/SubTitle'
import book1 from '../../Images/book1.jpg'
import book2 from '../../Images/book2.png'
import book3 from '../../Images/book3.png'
import book4 from '../../Images/book4.png'
import book5 from '../../Images/book5.jpg'

function HomeBooksContainer() {
    return (
        <Container>

            <Row>
                <SubTitle btnTitle={'More'} path={"/allBooks"} title={'Top Books'} />
                <Row className='justify-content-center'>
                    <BookCard num={'1'} rate={'4'} img={book1} name={'Room 207'} />
                    <BookCard num={'2'} rate={'4.5'} img={book2} name={'Great Houses of London'} />
                    <BookCard num={'3'} rate={'4.4'} img={book3} name={'Steve Jobs The Man Who Thought Different'} />
                    <BookCard num={'4'} rate={'4'} img={book4} name={'Working Backward'} />
                    <BookCard num={'5'} rate={'3.8'} img={book5} name={'Rich Table'} />
                </Row>

            </Row>
        </Container>
    )
}

export default HomeBooksContainer