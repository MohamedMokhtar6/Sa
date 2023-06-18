import React from 'react'
import { Row } from 'react-bootstrap'
import AllBooksRequest from '../../Components/Admin/AllBooksRequest'
import LibrarianSidBar from '../../Components/Librarian/LibrarianSidBar'
import Navs from '../../Components/NavBar/Navs'

function LibrarianRequestBookPage() {
    return (
        <>
            <Navs />
            <Row className='mx-0 my-3 justify-content-center' style={{ minHeight: '85vh' }}>
                <Row className='justify-content-center'>
                    <LibrarianSidBar />
                </Row>
                <Row className='justify-content-center'>
                    <AllBooksRequest />
                </Row>
            </Row>
        </>
    )
}

export default LibrarianRequestBookPage