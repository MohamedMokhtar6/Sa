import React from 'react'
import { Row } from 'react-bootstrap'
import Navs from '../../Components/NavBar/Navs'
import StudentSidBar from '../../Components/Student/StudentSidBar'
import TeacherAllEvent from '../../Components/Teacher/TeacherAllEvent'

function StudentAllEventPage() {
    return (
        <>
            <Navs />
            <Row className='mx-0 my-3 justify-content-center' style={{ minHeight: '85vh' }}>
                <Row className='justify-content-center fit'>
                    <StudentSidBar />
                </Row>
                <Row className='justify-content-center'>
                    <TeacherAllEvent />
                </Row>
            </Row>
        </>
    )
}

export default StudentAllEventPage