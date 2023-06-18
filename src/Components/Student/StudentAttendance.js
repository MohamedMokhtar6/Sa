import React from 'react'
import { Table } from 'react-bootstrap'
import StudentTableBody from './StudentTableBody'

function StudentAttendance() {
    return (
        <div style={{ overflowX: 'auto' }}>
            <Table striped bordered hover className='bg-main text-main'>
                <thead>
                    <tr>

                        <th>Student Name</th>
                        <th>SunDay</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th className='bg-danger'>Days Missed</th>

                    </tr>
                </thead>
                <StudentTableBody Id={'1'} Name={"Mohamed"} />

            </Table>
        </div>
    )
}

export default StudentAttendance