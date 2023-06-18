import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function AdminSidBar() {
  return (
    <>
      <Row className="my-1  p-0 text-center mx-0 bg-main justify-content-center gap-2 fit" >

        <Link to={"/admin/allusers"} className="fit my-3 bord hov link text-main "  >
          All Users
        </Link>
        <Link to={"/admin/allbooksrequests"} className="fit my-3 bord hov link text-main"  >
          All Books Requests
        </Link>
        <Link to={"/admin/allbooks"} className="fit my-3 bord hov link text-main"  >
          All Books
        </Link>
        <Link to={"/admin/createuser"} className="fit my-3 bord hov link text-main"  >
          Create User
        </Link>
        <Link to={"/admin/createevent"} className="fit my-3 bord hov link text-main"  >
          Create Event
        </Link>
      </Row>
    </>
  );
}

export default AdminSidBar;
