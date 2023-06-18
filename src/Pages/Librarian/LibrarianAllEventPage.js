import React from 'react'
import { Row } from 'react-bootstrap'
import LibrarianSidBar from '../../Components/Librarian/LibrarianSidBar'
import Navs from '../../Components/NavBar/Navs'
import TeacherAllEvent from '../../Components/Teacher/TeacherAllEvent'

function LibrarianAllEventPage() {
    return (
        <>
            <Navs />
            <Row className='mx-0 my-3 justify-content-center' style={{ minHeight: '85vh' }}>
                <Row className='justify-content-center fit'>
                    <LibrarianSidBar />
                </Row>
                <Row className='justify-content-center'>
                    <TeacherAllEvent />
                </Row>
            </Row>
        </>
    )
}

export default LibrarianAllEventPage