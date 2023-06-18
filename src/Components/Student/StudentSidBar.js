import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function StudentSidBar() {
    return (
        <>
            <Row className="  p-0 text-center mx-0 bg-main justify-content-center gap-3" >
                <Link to={"/student/allevent"} className="fit my-3 bord hov link text-main "  >
                    All Event
                </Link>
                <Link to={"/student/assignment"} className="fit my-3 bord hov link text-main"  >
                    Assignment
                </Link>
                <Link to={"/student/result"} className="fit my-3 bord hov link text-main"  >
                    Result
                </Link>
                <Link to={"/student/attendance"} className="fit my-3 bord hov link text-main"  >
                    Attendance
                </Link>
            </Row>
        </>
    )
}

export default StudentSidBar