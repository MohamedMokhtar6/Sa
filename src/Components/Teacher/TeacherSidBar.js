import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function TeacherSidBar() {
    return (
        <>
            <Row className="  p-0 text-center mx-0 bg-main  justify-content-center fit gap-3" >
                <Link to={"/teacher/allevent"} className="fit my-3 bord hov link text-main "  >
                    All Event
                </Link>
                <Link to={"/teacher/addresult"} className="fit my-3 bord hov link text-main"  >
                    Add Result
                </Link>
                <Link to={"/teacher/addattendance"} className="fit my-3 bord hov link text-main"  >
                    Add Attendance
                </Link>
                <Link to={"/teacher/addAssignment"} className="fit my-3 bord hov link text-main"  >
                    Add Assignment
                </Link>
            </Row>
        </>
    )
}

export default TeacherSidBar