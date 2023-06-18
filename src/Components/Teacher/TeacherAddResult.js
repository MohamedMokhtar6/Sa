import React from 'react'
import { Table } from 'react-bootstrap'
import TableBodyResult from './TableBodyResult'
function TeacherAddResult() {
    return (
        <div style={{ overflowX: 'auto' }}>
            <Table striped bordered hover className='bg-main text-main'>
                <thead>
                    <tr>
                        <th>#</th>
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
                <TableBodyResult Id={'1'} Name={"Mohamed"} />
                <TableBodyResult Id={'2'} Name={"Ahmed"} />
                <TableBodyResult Id={'3'} Name={"Ali"} />
                <TableBodyResult Id={'4'} Name={"Amr"} />
                <TableBodyResult Id={'5'} Name={"Eid"} />
                <TableBodyResult Id={'6'} Name={"Omar"} />
                <TableBodyResult Id={'7'} Name={"Yousef"} />
                <TableBodyResult Id={'8'} Name={"Waled"} />
                <TableBodyResult Id={'9'} Name={"Khalid"} />
                <TableBodyResult Id={'10'} Name={"Emad"} />
            </Table>
        </div>
    )
}

export default TeacherAddResult