import React from 'react'
import Navs from '../../Components/NavBar/Navs'
import Landing from '../../Components/Home/Landing'
import { Slide } from 'react-reveal'
import HomeBooksContainer from '../../Components/Home/HomeBooksContainer'
import ContactUs from '../../Components/Home/ContactUs'
import State from '../../Components/Home/State'



function HomePage() {
    return (
        <>
            <Navs />
            <Landing />
            <Slide left >
                <HomeBooksContainer />
            </Slide>
            <Slide left >
                <State />
            </Slide>
            <Slide left >
                <ContactUs />
            </Slide>

        </>
    )
}

export default HomePage