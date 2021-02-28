import React from "react";
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
    </>
  );
}

export default VaccinationDetails;
