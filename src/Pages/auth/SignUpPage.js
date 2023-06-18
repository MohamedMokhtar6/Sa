import React from 'react'
import SignUpForm from '../../Components/Login/SignUpForm'
import Navs from '../../Components/NavBar/Navs'
import Navs2 from '../../Components/NavBar/Navs2'

function SignUpPage() {
    return (
        <div className='backg'>
            <Navs2 />
            <SignUpForm />
        </div>
    )
}

export default SignUpPage