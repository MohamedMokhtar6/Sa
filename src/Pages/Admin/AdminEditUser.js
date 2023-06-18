import React from 'react'
import { Row } from 'react-bootstrap'
import AdminSidBar from '../../Components/Admin/AdminSidBar'
import EditUser from '../../Components/Admin/EditUser'
import Navs from '../../Components/NavBar/Navs'

function AdminEditUser() {
    return (
        <>
            <Navs />
            <Row className=' m-0 justify-content-center'>
                <Row className='justify-content-center'>
                    <AdminSidBar />
                </Row>
                <Row className='justify-content-center'>
                    <EditUser />
                </Row>
            </Row>
        </>
    )
}

export default AdminEditUser