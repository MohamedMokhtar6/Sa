import React from 'react'
import { Button, Row } from 'react-bootstrap'

function StudentAssignment() {
    return (
        <>
            <Row className="mx-3 flex-column  text-center align-items-center" >
                <div className=" fw-bold fs-4 mb-4 ">Your Assignment</div>
                <label htmlFor="Assignment">Your Name </label>
                <input
                    id='Assignment'
                    placeholder="Your Name"
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

                <Button variant="dark" className="fit m-3" >
                    Submit
                </Button>

            </Row>

        </>
    )
}

export default StudentAssignment