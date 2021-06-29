import React, { useState,useEffect } from "react";
import Select from "react-select";
import axios from "axios";

import "./CovidHospitalComponent.css";
import { Table } from "react-bootstrap";

function CovidHospitalComponent() {
  const [hospitalData, sethospitalData] = useState([]);
  const [flag, setFlag] = useState(false);
  const [selectedOption, setselectedOption] = useState(null);

  let options1 = [
    { value: "Kerala", label: "Kerala" },
    { value: "Goa", label: "Goa" },
    { value: "Andhra Pradesh", label: "Andhra Pradesh" },
    { value: "Assam", label: "Assam" },
    { value: "Tripura", label: "Tripura" },
    { value: "Punjab", label: "Punjab" },
    { value: "Rajasthan", label: "Rajasthan" },
    { value: "Sikkim", label: "Sikkim" },
    { value: "Goa", label: "Goa" },
    { value: "Chandigarh", label: "Chandigarh" },
    { value: "Chhattisgarh", label: "Chhattisgarh" },
    { value: "Haryana", label: "Haryana" },
    { value: "Gujarat", label: "Gujarat" },
    { value: "Himachal Pradesh", label: "Himachal Pradesh" },
    { value: "Jammu & Kashmir", label: "Jammu & Kashmir" },
    { value: "Jharkhand", label: "Jharkhand" },
    { value: "Karnataka", label: "Karnataka" },
    { value: "Maharastra", label: "Maharastra" },
    { value: "Meghalaya", label: "Meghalaya" },
    { value: "Odisha", label: "Odisha" },
    { value: "Puducherry", label: "Puducherry" },
    { value: "Tamil Nadu", label: "Tamil Nadu" },
    { value: "Telangana", label: "Telangana" },
    { value: "Delhi", label: "Delhi" },
    { value: "Madhya Pradesh", label: "Madhya Pradesh" },
    { value: "Uttarakhand", label: "Uttarakhand" },
    { value: "Bihar", label: "Bihar" },
    { value: "Uttar Pradesh", label: "Uttar Pradesh" },
    { value: "West Bengal", label: "West Bengal" }

  ];

  const handleChange = (selectOption) => {
    setselectedOption(selectOption.value);

    //console.log(selectOption)
 
  };

  useEffect(()=>{
    async function fetchData() {
      const request = await axios.get(
        "https://api.rootnet.in/covid19-in/hospitals/medical-colleges"
      );
      let arr, arr2;
      arr = request.data.data.medicalColleges.map((individual) => ({
        value: individual.state,
        city: individual.city,
        label: individual.name,
        admissionCapacity: individual.admissionCapacity,
        hospitalBeds: individual.hospitalBeds,
      }));
      
  
      arr2 = arr.filter((data) => {
        return data.value === selectedOption;
      });
    
      sethospitalData(arr2);
  
      setFlag(true);
      
    }
    
    fetchData();
   
  },[selectedOption])
  

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
        <div>
      
        </div>
      )}
    </div>
  );
}

export default CovidHospitalComponent;
