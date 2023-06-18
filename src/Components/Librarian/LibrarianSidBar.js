import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function LibrarianSidBar() {
    return (
        <>
            <Row className="  p-0 text-center mx-0 bg-main justify-content-center gap-3" >

                <Link to={"/librarian/allevent"} className="fit my-3 bord hov link text-main "  >
                    All Event
                </Link>
                <Link to={"/librarian/addBook"} className="fit my-3 bord hov link text-main"  >
                    Add Book
                </Link>
                <Link to={"/librarian/viewRequestBook"} className="fit my-3 bord hov link text-main"  >
                    View Books Requests
                </Link>
            </Row>
        </>
    )
}

export default LibrarianSidBar