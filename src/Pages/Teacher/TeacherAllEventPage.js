import React from 'react'
import { Row } from 'react-bootstrap'
import Navs from '../../Components/NavBar/Navs'
import TeacherAllEvent from '../../Components/Teacher/TeacherAllEvent'
import TeacherSidBar from '../../Components/Teacher/TeacherSidBar'

function TeacherAllEventPage() {
    return (
        <>
            <Navs />
            <Row className='mx-0 my-3 justify-content-center' style={{ minHeight: '83.5vh' }}>
                <Row className='justify-content-center'>
                    <TeacherSidBar />
                </Row>
                <Row className='justify-content-center'>
                    <TeacherAllEvent />
                </Row>
            </Row>
        </>
    )
}

export default TeacherAllEventPage