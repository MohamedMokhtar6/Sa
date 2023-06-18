import React from 'react'
import { Table } from 'react-bootstrap'

function TeacherAllEvent() {
    return (
        <Table striped bordered hover className='bg-main text-main'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Event Name</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='text-main'>1</td>
                    <td className='text-main'>Event 1</td>
                    <td className='text-main'>22/12/2022</td>
                    <td className='text-main'>30/12/2022</td>
                </tr>
                <tr>
                    <td className='text-main'>2</td>
                    <td className='text-main'>Event 2</td>
                    <td className='text-main'>5/1/2023</td>
                    <td className='text-main'>30/2/2023</td>
                </tr>
                <tr>
                    <td className='text-main'>3</td>
                    <td className='text-main'>Event 3</td>
                    <td className='text-main'>22/5/2023</td>
                    <td className='text-main'>30/6/2023</td>
                </tr>
                <tr>
                    <td className='text-main'>3</td>
                    <td className='text-main'>Event 3</td>
                    <td className='text-main'>22/7/2023</td>
                    <td className='text-main'>30/8/2023</td>
                </tr>

            </tbody>
        </Table>
    )
}

export default TeacherAllEvent