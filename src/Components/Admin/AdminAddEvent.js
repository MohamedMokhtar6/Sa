import React from 'react'
import { Button, Row } from 'react-bootstrap'

function AdminAddEvent() {
    return (
        <>
            <Row className="m-3 flex-column   align-items-center text-center " style={{ minHeight: '74vh' }}>
                <div className=" fw-bold fs-4 my-3">Add New Event</div>
                <label htmlFor="eventName">Event Name </label>
                <input
                    id='eventName'
                    placeholder="Event Name"
                    type={"text"}
                    className="fit reduce my-2"
                />
                <label htmlFor="eventStart">Event Start Date</label>
                <input
                    id='eventStart'
                    placeholder="Event Start Date"
                    type={"date"}
                    className="fit reduce my-2"
                />
                <label htmlFor="eventEnd">Event End Date</label>
                <input
                    id='eventEnd'
                    placeholder="Event End Date"
                    type={"date"}
                    className="fit reduce my-2"
                />

                <Button variant="dark" className="fit m-3" >
                    Save
                </Button>

            </Row>

        </>
    )
}

export default AdminAddEvent