import React from 'react'
import { Table } from 'react-bootstrap'
import TableBody from './TableBody'

function TeacherAddAttendance() {
    return (
        <div style={{ overflowX: 'auto' }}>
            <Table striped bordered hover className='bg-main text-main'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Student Name</th>
                        <th>SunDay</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th className='bg-danger'>Days Missed</th>

                    </tr>
                </thead>
                <TableBody Id={'1'} Name={"Mohamed"} />
                <TableBody Id={'2'} Name={"Ahmed"} />
                <TableBody Id={'3'} Name={"Ali"} />
                <TableBody Id={'4'} Name={"Amr"} />
                <TableBody Id={'5'} Name={"Eid"} />
                <TableBody Id={'6'} Name={"Omar"} />
                <TableBody Id={'7'} Name={"Yousef"} />
                <TableBody Id={'8'} Name={"Waled"} />
                <TableBody Id={'9'} Name={"Khalid"} />
                <TableBody Id={'10'} Name={"Emad"} />
            </Table>
        </div>
    )
}

export default TeacherAddAttendance