import React from 'react'
import { Row } from 'react-bootstrap'
import UserCard from './UserCard'
import img from '../../Images/avatar-06.png'


function AdminAllUser() {
    return (
        <>
            <Row className='m-0 justify-content-center'>
                <UserCard img={img} Name={'Mohamed'} Role={"Student"} />
                <UserCard img={img} Name={'Ahmed'} Role={"Teacher"} />
                <UserCard img={img} Name={'Ali'} Role={"Student"} />
                <UserCard img={img} Name={'Amr'} Role={"Librarian"} />
                <UserCard img={img} Name={'Waled'} Role={"Student"} />
                <UserCard img={img} Name={'Omar'} Role={"Teacher"} />

            </Row>
        </>
    )
}

export default AdminAllUser