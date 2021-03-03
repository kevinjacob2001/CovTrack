import React from 'react'
import ThemedExample from '../../Components/ChatBot/Themed'

import CovidHospitalComponent from '../../Components/CovidHospitalComponents/CovidHospitalComponent'
import NavBar from '../../Components/NavBar/NavBar'

function CovidHospitalDetails() {
    return (
        <>
            <NavBar/>
            <CovidHospitalComponent/>
            <ThemedExample/>
        </>
    )
}

export default CovidHospitalDetails
