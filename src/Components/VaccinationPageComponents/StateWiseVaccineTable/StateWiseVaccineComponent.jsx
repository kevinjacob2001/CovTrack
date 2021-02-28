import React,{useState,useEffect} from "react";
import axios from 'axios';
import { Accordion, Card, Table } from "react-bootstrap";
import './StateWiseVaccineComponent.css'


function StateWiseVaccineComponent() {
    const [stateData,setstateData]=useState([])

    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get("https://india-covid19vaccine.github.io/api/state_latest.json");
            console.log(request.data)
            setstateData(request.data);
        }
        fetchData();
    },[stateData])
  return (
    <>
    <h1 className="text-center text-light vaccine__heading">State wise vaccine details</h1>
     <Table responsive striped  hover borderless className="vaccine__table">
            <thead style={{background:"#7ED8F2"}}>
              <tr>
                <th>State</th>
                <th>Total doses</th>
                <th>Total Vaccinated</th>
                <th>Total fully vaccinated</th>
                <th>Population</th>
              </tr>
            </thead>
            <tbody style={{background:"#B6E9FC"}}>
           
               {stateData.map((state)=>{
                   return(
                   
                       <tr>
                    <td>{state?.state}</td>
                    <td>{state?.total_doses}</td>
                    <td>{state?.total_vaccinated}</td>
                    <td>{state?.total_fully_vaccinated}</td>
                    <td>{state?.population}</td>
                       </tr>
                   
                   )
               })}
           
            </tbody>
          </Table>
         
  
    </>
  );
}

export default StateWiseVaccineComponent;
