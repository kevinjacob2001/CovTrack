import React from "react";
import "./Home.css";

import NavBar from "../../Components/NavBar/NavBar";
import FourCards from "../../Components/FourCards/FourCards";
import StateData from "../../Components/StateData/StateData";
import ThemedExample from "../../Components/ChatBot/Themed";

function Home() {
  return (
    <>
      {/* Navbar */}
        <NavBar />

      <div className="container ">
        {/* 4  CARDS SECTION */}
        <FourCards />
        <StateData />
        <ThemedExample />
      </div>
    </>
  );
}

export default Home;
