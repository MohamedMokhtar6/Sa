import React from 'react'
import { Row } from 'react-bootstrap'
import AdminAllUser from '../../Components/Admin/AdminAllUser'
import AdminSidBar from '../../Components/Admin/AdminSidBar'
import Navs from '../../Components/NavBar/Navs'

function AdminAllUsersPage() {
    return (
        <>
            <Navs />
            <Row className='m-0 justify-content-center'>
                <Row className='justify-content-center'>
                    <AdminSidBar />
                </Row>
                <Row className='justify-content-center'>
                    <AdminAllUser />
                </Row>

            </Row>
        </>
    )
}

export default AdminAllUsersPage