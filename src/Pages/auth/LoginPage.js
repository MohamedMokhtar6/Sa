import React from 'react'
import Navs from '../../Components/NavBar/Navs'
import LoginForm from '../../Components/Login/LoginForm'
import Navs2 from '../../Components/NavBar/Navs2'

function LoginPage() {
    return (
        <div className='backg'>

            <Navs2 />
            <LoginForm />
        </div>
    )
}

export default LoginPage