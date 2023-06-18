import React from 'react'
import { Row } from 'react-bootstrap'
import LibrarianAddBook from '../../Components/Librarian/LibrarianAddBook'
import LibrarianSidBar from '../../Components/Librarian/LibrarianSidBar'
import Navs from '../../Components/NavBar/Navs'
function LibrarianAddBookPage() {
    return (
        <>
            <Navs />
            <Row className='mx-0 my-3 justify-content-center' >
                <Row className='justify-content-center'>
                    <LibrarianSidBar />
                </Row>
                <Row className='justify-content-center'>
                    <LibrarianAddBook />
                </Row>
            </Row>
        </>
    )
}

export default LibrarianAddBookPage