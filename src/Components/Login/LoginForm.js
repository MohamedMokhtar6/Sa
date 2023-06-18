import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bounce } from 'react-reveal'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import notify from '../util/useNoti'

export var islogin = false
export var link = ''
export var user = ''
function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const onChangeEmail = (e) => {
        e.persist();
        setEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        e.persist();
        setPassword(e.target.value)
    }

    const validation = () => {

        if (email === '') {
            notify('Enter Email', 'warn')
            return;
        }

        if (password === '') {
            notify('Enter Password', 'warn')
            return;
        }


    }
    const onSubmit = async () => {
        validation()
        if (email === 'admin@gmail.com' && password === '1234') {
            notify("Login Success", 'Success')
            setTimeout(() => {

                islogin = true
                link = '/admin/allusers'
                user = 'admin'
                navigate("/home")
            }, 1000);
        }
        else if (email === 'student@gmail.com' && password === '1234') {
            notify("Login Success", 'Success')
            setTimeout(() => {
                islogin = true
                link = '/student/allevent'
                user = 'Student'
                navigate("/home")
            }, 1000);
        }
        else if (email === 'teacher@gmail.com' && password === '1234') {
            notify("Login Success", 'Success')
            setTimeout(() => {
                islogin = true
                link = '/teacher/allevent'
                user = 'Teacher'
                navigate("/home")
            }, 1000);
        }
        else if (email === 'librarian@gmail.com' && password === '1234') {
            notify("Login Success", 'Success')
            setTimeout(() => {
                islogin = true
                link = '/librarian/allevent'
                user = 'Librarian'
                navigate("/home")
            }, 1000);
        }

        else if (email !== "" && password !== '') { notify("enter valid  email or password", 'warn') }




    }
    return (
        <Container style={{ minHeight: '83vh' }}>
            <Bounce left>

                <Row className=' m-5 justify-content-center '>
                    <Col style={{ width: '400px', height: "500px", flex: "none" }} className='bg-white p-0 reduceL d-flex flex-column text-center align-items-center  '>
                        <h2 className='fw-bold' style={{ marginTop: "150px" }}>Sign In</h2>
                        <input type={'email'} placeholder='User Email' className='my-3 inp' value={email} onChange={onChangeEmail} />
                        <input type={'password'} placeholder='Password' className='my-3 inp' value={password} onChange={onChangePassword} />
                        <Link className='link text-dark mt-4 ' to={'/forgotpassword'}>Forgot your password?</Link>
                        <button className='text-main my-3 bt2 bg-main my-4' onClick={onSubmit}>SING IN</button>

                    </Col>
                    <Col style={{ width: '400px', height: "500px", flex: "none" }} className='bg-main p-0 reduceR creame  d-flex flex-column align-items-center justify-content-center '>
                        <h2 className='my-2 text-main'>Sign Up</h2>
                        <p className='my-2 text-main'>Sign up here if you don't have account.</p>
                        <Link to={'/signup'} className='link'>

                            <button className='border-main bt my-3 text-main' >SING UP</button>
                        </Link>
                    </Col>
                </Row>
            </Bounce>
            <ToastContainer />
        </Container>
    )
}

export default LoginForm