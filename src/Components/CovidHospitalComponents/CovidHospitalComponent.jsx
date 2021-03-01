import React, { useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";

import "./CovidHospitalComponent.css";
import { Table } from "react-bootstrap";

function CovidHospitalComponent() {
  const [datas, setDatas] = useState([]);
  const [options2, setOptions2] = useState(null);
  const [hospitalData, sethospitalData] = useState([]);
  const [flag, setFlag] = useState(false);
  const [selectedOption, setselectedOption] = useState(null);

  let options1 = [
    { value: "Kerala", label: "Kerala" },
    { value: "Goa", label: "Goa" },
    { value: "Gujarat", label: "Gujarat" },
  ];

  const handleChange = (selectOption) => {
    setselectedOption(selectOption.value);

    //console.log(selectOption)

    fetchData();
    
  };

  async function fetchData() {
    const request = await axios.get(
      "https://api.rootnet.in/covid19-in/hospitals/medical-colleges"
    );
    let arr, arr2, arr3;
    arr = request.data.data.medicalColleges.map((individual) => ({
      value: individual.state,
      city: individual.city,
      label: individual.name,
      admissionCapacity: individual.admissionCapacity,
      hospitalBeds: individual.hospitalBeds,
    }));
    console.log(arr);

    arr2 = arr.filter((data) => {
      return data.value === selectedOption;
    });
    //console.log(arr2)
    sethospitalData(arr2);

    setFlag(true);
    
  }

  return (
    <div className="container">
      <h1 className="covid__hospital__heading text-light text-center">
        Covid hospital details
      </h1>
      <Select
        placeholder="Select state:"
        onChange={handleChange}
        options={options1}
      />

      {flag ? (
        <Table className="mt-3 covid__hospital__Table" responsive striped borderless hover>
          <thead style={{ background: "#7ED8F2" }}>
            <tr>
              <th>State</th>
              <th>Hospital</th>
              <th>Hospital beds</th>
              <th>Admission Capacity</th>
              
            </tr>
          </thead>
          <tbody style={{ background: "#B6E9FC" }}>
            {hospitalData.map((hospital) => {
              return (
                <tr>
                  <td>{hospital.value}</td>
                  <td>{hospital.label}</td>
                  <td>{hospital.hospitalBeds}</td>
                  <td>{hospital.admissionCapacity}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <>
        <p className="text-center text-light mt-4">Please select a state from the dropdown and reselect it to confirm your selection!</p>
        </>
      )}
    </div>
  );
}

export default CovidHospitalComponent;
