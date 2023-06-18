import React from 'react'
import { Row } from 'react-bootstrap'
import AdminCreateUser from '../../Components/Admin/AdminCreateUser'
import AdminSidBar from '../../Components/Admin/AdminSidBar'
import Navs from '../../Components/NavBar/Navs'
function AdminCreateUserPage() {
    return (
        <>
            <Navs />
            <Row className=' m-0 justify-content-center'>
                <Row className='justify-content-center'>
                    <AdminSidBar />
                </Row>
                <Row className='justify-content-center'>
                    <AdminCreateUser />
                </Row>
            </Row>
        </>
    )
}

export default AdminCreateUserPage