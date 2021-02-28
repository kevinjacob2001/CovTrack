import React from "react";
import './Home.css'

import NavBar from '../../Components/NavBar/NavBar'
import FourCards from '../../Components/FourCards/FourCards'
import StateData from "../../Components/StateData/StateData";


function Home() {


  return (
    <>
{/* Navbar */}
    <NavBar/>


{/* 4  CARDS SECTION */}
        <FourCards/>
        <StateData/>

    </>
  );
}

export default Home;
