import React from "react";
import Navs from "../../Components/NavBar/Navs";
import Landing from "../../Components/Home/Landing";
import HomeBooksContainer from "../../Components/Home/HomeBooksContainer";
import ContactUs from "../../Components/Home/ContactUs";
import State from "../../Components/Home/State";

function HomePage() {
  return (
    <>
      <Navs />
      <Landing />
      <HomeBooksContainer />
      <State />
      <ContactUs />
    </>
  );
}

export default HomePage;
