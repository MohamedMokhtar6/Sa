import React from 'react'
import { Row } from 'react-bootstrap'
import AdminAllBooks from '../../Components/Admin/AdminAllBooks'
import AdminSidBar from '../../Components/Admin/AdminSidBar'
import Navs from '../../Components/NavBar/Navs'
function AdminAllBooksPage() {
    return (
        <>
            <Navs />
            <Row className='m-0 justify-content-center'>
                <Row className='justify-content-center'>
                    <AdminSidBar />
                </Row>
                <Row className='justify-content-center'>
                    <AdminAllBooks />
                </Row>
            </Row>
        </>
    )
}

export default AdminAllBooksPage