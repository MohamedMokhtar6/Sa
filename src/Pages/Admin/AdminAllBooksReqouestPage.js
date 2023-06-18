import React from 'react'
import { Row } from 'react-bootstrap'
import AdminSidBar from '../../Components/Admin/AdminSidBar'
import AllBooksRequest from '../../Components/Admin/AllBooksRequest'
import Navs from '../../Components/NavBar/Navs'
function AdminAllBooksReqouestPage() {
    return (
        <>
            <Navs />
            <Row className='m-0 justify-content-center' style={{ minHeight: '88vh' }}>
                <Row className='justify-content-center'>
                    <AdminSidBar />
                </Row>
                <Row className='justify-content-center'>
                    <AllBooksRequest />
                </Row>
            </Row>
        </>
    )
}

export default AdminAllBooksReqouestPage