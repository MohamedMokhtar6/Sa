import React from 'react'
import { Row } from 'react-bootstrap'
import Navs from '../../Components/NavBar/Navs'
import StudentAssignment from '../../Components/Student/StudentAssignment'
import StudentSidBar from '../../Components/Student/StudentSidBar'
function StudentAssignmentPage() {
    return (
        <>
            <Navs />
            <Row className='mx-0 my-3 justify-content-center' style={{ minHeight: '85vh' }}>
                <Row className='justify-content-center'>
                    <StudentSidBar />
                </Row>
                <Row className='justify-content-center'>
                    <StudentAssignment />
                </Row>
            </Row>
        </>
    )
}

export default StudentAssignmentPage