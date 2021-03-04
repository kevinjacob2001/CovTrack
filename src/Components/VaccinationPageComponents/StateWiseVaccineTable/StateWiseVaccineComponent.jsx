import React, { useState, useEffect } from "react";
import axios from "axios";
import {  Table, Button } from "react-bootstrap";
import "./StateWiseVaccineComponent.css";
import GetAppIcon from '@material-ui/icons/GetApp';
import NumberFormat from "react-number-format";

function StateWiseVaccineComponent() {
  const [stateData, setstateData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        "https://india-covid19vaccine.github.io/api/state_latest.json"
      );
      //console.log(request.data);
      setstateData(request.data);
    }
    fetchData();
  }, [stateData]);
  return (
    <>
      <h1 className="text-center text-light vaccine__heading">
        State wise vaccine details
      </h1>
      <div className="download__btn__Section">
        <Button className="m-2 download__btn" href="https://india-covid19vaccine.github.io/csv/national_timeline.csv"><GetAppIcon/> National timeline</Button>
        <Button className="m-2 download__btn" href="https://india-covid19vaccine.github.io/csv/state_timeline.csv"><GetAppIcon/> Statewise timeline</Button>
      </div>
      <Table responsive striped hover borderless className="vaccine__table">
        <thead style={{ background: "#7ED8F2" }}>
          <tr>
            <th>State</th>
            <th>Population</th>
            <th>Total Vaccinated</th>
            <th>Total fully vaccinated</th>
            <th>Total doses</th>
          </tr>
        </thead>
        <tbody style={{ background: "#B6E9FC" }}>
          {stateData.map((state) => {
            return (
              <tr>
                <td>{state?.state}</td>
                <NumberFormat
                  value={state?.population}
                  displayType={"text"}
                  thousandsGroupStyle="lakh"
                  thousandSeparator={true}
                  renderText={(value) => <td>{value}</td>}
                />
                <NumberFormat
                  value={state?.total_vaccinated}
                  displayType={"text"}
                  thousandsGroupStyle="lakh"
                  thousandSeparator={true}
                  renderText={(value) => <td>{value}</td>}
                />
                <NumberFormat
                  value={state?.total_fully_vaccinated}
                  displayType={"text"}
                  thousandsGroupStyle="lakh"
                  thousandSeparator={true}
                  renderText={(value) => <td>{value}</td>}
                />
                <NumberFormat
                  value={state?.total_doses}
                  displayType={"text"}
                  thousandsGroupStyle="lakh"
                  thousandSeparator={true}
                  renderText={(value) => <td>{value}</td>}
                />
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default StateWiseVaccineComponent;
