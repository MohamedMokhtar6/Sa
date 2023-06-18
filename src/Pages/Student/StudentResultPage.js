import React from 'react'
import { Row } from 'react-bootstrap'
import Navs from '../../Components/NavBar/Navs'
import StudentResult from '../../Components/Student/StudentResult'
import StudentSidBar from '../../Components/Student/StudentSidBar'
function StudentResultPage() {
    return (
        <>
            <Navs />
            <Row className='mx-0 my-3 justify-content-center' style={{ minHeight: '85vh' }}>
                <Row className='justify-content-center fit'>
                    <StudentSidBar />
                </Row>
                <Row className='justify-content-center'>
                    <StudentResult />
                </Row>
            </Row>
        </>
    )
}

export default StudentResultPage