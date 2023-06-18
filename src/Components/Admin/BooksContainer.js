import React from 'react'
import { Row } from 'react-bootstrap'
import BookCard from './BookCard'
import book1 from '../../Images/book1.jpg'
import book2 from '../../Images/book2.png'
import book3 from '../../Images/book3.png'
import book4 from '../../Images/book4.png'
import book5 from '../../Images/book5.jpg'
import book6 from '../../Images/book6.jpg'
import book7 from '../../Images/book7.jpg'
import book8 from '../../Images/book8.jpg'
import book9 from '../../Images/book9.jpg'
import book10 from '../../Images/book10.jpg'
import book11 from '../../Images/book11.jpg'
import book12 from '../../Images/book12.jpg'
import book13 from '../../Images/book13.jpg'
import book14 from '../../Images/book14.jpg'
import book15 from '../../Images/book15.jpg'


function BooksContainer() {
    // const navigate = useNavigate()

    // const getPage = (page) => {
    //     navigate(`/book/${page}`)
    // };
    return (
        <>

            <Row className='justify-content-center'>
                <BookCard num={'1'} rate={'4'} img={book1} name={'Room 207'} />
                <BookCard num={'2'} rate={'4.5'} img={book2} name={'Great Houses of London'} />
                <BookCard num={'3'} rate={'4.4'} img={book3} name={'Steve Jobs The Man Who Thought Different'} />
                <BookCard num={'4'} rate={'4'} img={book4} name={'Working Backward'} />
                <BookCard num={'5'} rate={'3.8'} img={book5} name={'Rich Table'} />
                <BookCard num={'6'} rate={'4.8'} img={book6} name={'Ancient Egypt An Artist’s Colo'} />
                <BookCard num={'7'} rate={'4.7'} img={book7} name={'Women in ancient Egypt'} />
                <BookCard num={'8'} rate={'3.2'} img={book8} name={'BKS Iyengar Yoga The Path to H'} />
                <BookCard num={'9'} rate={'4.6'} img={book9} name={'Skincare'} />
                <BookCard num={'10'} rate={'4.1'} img={book10} name={'The Spy And The Traitor'} />
                <BookCard num={'11'} rate={'4.4'} img={book11} name={'The Gates Of Europe'} />
                <BookCard num={'12'} rate={'4.9'} img={book12} name={'Robin Wood Tarot'} />
                <BookCard num={'13'} rate={'4.2'} img={book13} name={'IELTS Advantage Speaking and'} />
                <BookCard num={'14'} rate={'4.3'} img={book14} name={'Writing Arabic'} />
                <BookCard num={'15'} rate={'2.1'} img={book15} name={'On the Nile in the Golden Age'} />
            </Row>
            {/* <Pagi count={2} onPress={getPage} /> */}
        </>
    )
}

export default BooksContainer