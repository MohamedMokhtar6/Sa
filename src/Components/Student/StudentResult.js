import React from 'react'
import { Table } from 'react-bootstrap'
import StudentTableBodyResult from './StudentTableBodyResult'

function StudentResult() {
    return (
        <div style={{ overflowX: 'auto' }}>
            <Table striped bordered hover className='bg-main text-main '>
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Subject1</th>
                        <th>Subject2</th>
                        <th>Subject3</th>
                        <th>Subject4</th>
                        <th>Subject5</th>
                        <th>Subject6</th>
                        <th>Subject7</th>

                        <th className='bg-success'>Total Degrees</th>

                    </tr>
                </thead>
                <StudentTableBodyResult Id={'1'} Name={"Mohamed"} />
            </Table>
        </div>
    )
}

export default StudentResult