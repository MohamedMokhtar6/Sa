import React from 'react'
import { Container } from 'react-bootstrap'
import BooksContainer from '../../Components/Admin/BooksContainer'
import Navs from '../../Components/NavBar/Navs'

function BooksPage() {
    return (
        <>

            <Navs />
            <Container>
                <BooksContainer />
            </Container>
        </>
    )
}

export default BooksPage