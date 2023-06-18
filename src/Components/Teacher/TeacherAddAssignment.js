import React from 'react'
import { Button, Row } from 'react-bootstrap'

function TeacherAddAssignment() {
    return (
        <>
            <Row className="mx-3 flex-column align-items-center text-center " >
                <div className=" fw-bold fs-4 mb-4 ">Add New Assignment</div>
                <label htmlFor="Assignment">Assignment Name </label>
                <input
                    id='Assignment'
                    placeholder="Assignment Name"
                    type={"text"}
                    className="fit reduce my-2"
                />
                <label htmlFor='q1'>َQuestion 1?</label>
                <textarea id='q1' placeholder='Your Answer' rows={'5'} className="w-50 mb-2" style={{ resize: 'none' }} />
                <label htmlFor='q2'>َQuestion 2?</label>
                <textarea id='q2' placeholder='Your Answer' rows={'5'} className="w-50 mb-2" style={{ resize: 'none' }} />
                <label htmlFor='q3'>َQuestion 3?</label>
                <textarea id='q3' placeholder='Your Answer' rows={'5'} className="w-50 mb-2" style={{ resize: 'none' }} />
                <label htmlFor='q4'>َQuestion 4?</label>
                <textarea id='q4' placeholder='Your Answer' rows={'5'} className="w-50 mb-2" style={{ resize: 'none' }} />
                <label htmlFor="AssignmentStart">Assignment Start Date</label>
                <input
                    id='AssignmentStart'
                    placeholder="Assignment Start Date"
                    type={"date"}
                    className="fit reduce my-2"
                />
                <label htmlFor="AssignmentEnd">Assignment End Date</label>
                <input
                    id='AssignmentEnd'
                    placeholder="Assignment End Date"
                    type={"date"}
                    className="fit reduce my-2"
                />
                <select className='my-2 reduce fit ' >
                    <option value={'0'}>Select Student</option>
                    <option value={'1'} >Ahmed</option>
                    <option value={'2'}>Mohamed</option>
                    <option value={'3'}>Ali</option>
                </select>

                <Button variant="dark" className="fit m-3" >
                    Save
                </Button>

            </Row>

        </>
    )
}

export default TeacherAddAssignment