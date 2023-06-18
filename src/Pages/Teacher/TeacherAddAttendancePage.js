import React from 'react'
import { Row } from 'react-bootstrap'
import Navs from '../../Components/NavBar/Navs'
import TeacherAddAttendance from '../../Components/Teacher/TeacherAddAttendance'
import TeacherSidBar from '../../Components/Teacher/TeacherSidBar'

function TeacherAddAttendancePage() {
    return (
        <>
            <Navs />
            <Row className='mx-0 my-3 justify-content-center' style={{ minHeight: '85vh' }}>
                <Row className='justify-content-center'>
                    <TeacherSidBar />
                </Row>
                <Row className='justify-content-center'>
                    <TeacherAddAttendance />
                </Row>
            </Row>
        </>
    )
}

export default TeacherAddAttendancePage