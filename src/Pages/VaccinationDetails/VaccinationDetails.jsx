import React from "react";
import ThemedExample from "../../Components/ChatBot/Themed";
import NavBar from "../../Components/NavBar/NavBar";
import FourCardsVaccination from "../../Components/VaccinationPageComponents/FourCardsVaccination/FourCardsVaccination";
import StateWiseVaccineComponent from "../../Components/VaccinationPageComponents/StateWiseVaccineTable/StateWiseVaccineComponent";

function VaccinationDetails() {
  return (
    <>
      <NavBar />
      <div className="container">
        <FourCardsVaccination />
        <StateWiseVaccineComponent />
      </div>
      <ThemedExample/>
    </>
  );
}

export default VaccinationDetails;
