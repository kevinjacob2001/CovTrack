import axios from 'axios';
import React , {useEffect, useState} from 'react'

import {Card,Accordion,Button} from 'react-bootstrap'

import './StateData.css'

function StateData() {
   const [stateData,setstateData]=useState([])

        useEffect(()=>{
            async function fetchData(){
                const request=await axios.get("https://api.covid19india.org/state_district_wise.json");
                
                setstateData(request.data);
            }
            fetchData();
        },[stateData])

        let keys = Object.keys(stateData);
        //console.log(keys)

    return (
      
            <div className="row mt-5">
                  
                <div className="col-md-12">
                <h1 className="text-center text-light state__data__Text">State wise data</h1>
            <Accordion>
              {keys.map((item, ky) => {
                let districts = stateData[item].districtData;
              

                let total_active = 0;
                let total_confirmed = 0;
                let total_deaths = 0;
                let total_recover = 0;

                let district_list = [];

                for (let x in districts) {
                  total_active += districts[x].active;
                  total_confirmed += districts[x].confirmed;
                  total_deaths += districts[x].deceased;
                  total_recover += districts[x].recovered;
                  let ob = districts[x];
                  ob["district_name"] = x;
                  district_list.push(ob);
                }

               
                return (
                  <div className="container " >
                    <Card className="mb-2 "  >
                      <Card.Header className="accordian">
                        <Accordion.Toggle
                          as={Button}
                          variant="primary"

                          eventKey={ky}
                          style={{background:"#354762",border:"0"}}
                        >
                          {item}-{" "}
                          <span className=" btn btn-outline-light p-1 mr-2">
                            Total Cases-{total_confirmed}
                          </span>{" "}
                          <span className="btn-outline-light btn p-1 mr-2">
                            {" "}
                            Active-{total_active}{" "}
                          </span>{" "}
                          <span className="btn-outline-light btn p-1 mr-2">
                            Recovered-{total_recover}
                          </span>{" "}
                          <span className="btn-outline-light btn p-1 mr-2">
                            Death-{total_deaths}{" "}
                          </span>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey={ky} >
                        <Card.Body >
                         <div >
                         <table className="table table-bordered table-responsive-sm table-stripped " >
                            <thead>
                              <tr>
                                <td>District</td>
                                <td>Confirmed</td>
                                <td>Active</td>
                                <td>Recovered</td>
                              </tr>
                            </thead>
                            <tbody>
                              {district_list.map((itm, ky) => {
                                return (
                                  <tr>
                                    <td>{itm.district_name}</td>
                                    <td>{itm.confirmed}</td>
                                    <td>{itm.active}</td>
                                    <td>{itm.recovered}</td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                         </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </div>
                );
              })}
            </Accordion>
            </div>
            </div>

   
    )
}

export default StateData
