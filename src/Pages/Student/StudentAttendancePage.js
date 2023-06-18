import React from 'react'
import { Row } from 'react-bootstrap'
import Navs from '../../Components/NavBar/Navs'
import StudentAttendance from '../../Components/Student/StudentAttendance'
import StudentSidBar from '../../Components/Student/StudentSidBar'

function StudentAttendancePage() {
    return (
        <>
            <Navs />
            <Row className='mx-0 my-3 justify-content-center' style={{ minHeight: '85vh' }}>
                <Row className='justify-content-center fit'>
                    <StudentSidBar />
                </Row>
                <Row className='justify-content-center'>
                    <StudentAttendance />
                </Row>
            </Row>
        </>
    )
}

export default StudentAttendancePage