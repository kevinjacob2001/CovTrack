import React,{useEffect,useState} from "react";
import axios from 'axios'

import { Card } from "react-bootstrap";

import "./Styles/FourCards.css";
import NumberFormat from 'react-number-format';

function FourCards() {
    let now = new Date().toString().substring(0,25)
    const [datas,setDatas]=useState([])

    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get("https://corona.lmao.ninja/v2/countries/india");
            //console.log(request.data)
            setDatas(request.data);
            return request;
        }
        fetchData();
    },[])

  return (
    <div className="container">
          <p className="date_text">{now}</p>
      <div className="row card_section ">
    
        <Card className="card_single">
          <Card.Body>
            <Card.Title><h3 className="card__mainText">TOTAL CASES</h3></Card.Title>
            <Card.Subtitle className="mb-2 text-muted text-center">
            India
            </Card.Subtitle>
            <Card.Text className="card__caseCount">
            
              <NumberFormat className="total_cases"  value={datas.cases} displayType={'text'} thousandsGroupStyle="lakh" thousandSeparator={true} renderText={value => <div  className="card__number">{value}</div>} />
            
            </Card.Text>
            <h5 className="img__description mr-2">Cases today:{datas.todayCases}</h5>
          </Card.Body>
        </Card>

        <Card className="card_single">
          <Card.Body>
            <Card.Title><h3 className="card__mainText">ACTIVE CASES</h3></Card.Title>
            <Card.Subtitle className="mb-2 text-muted text-center">
            India
            </Card.Subtitle>
            <Card.Text className="card__caseCount">
          
             <NumberFormat value={datas.active} displayType={'text'} thousandsGroupStyle="lakh" thousandSeparator={true} renderText={value => <div  className="card__number">{value}</div>} /> 
            </Card.Text>
            <h5 className="img__description mr-2">Critical:{datas.critical}</h5>
          </Card.Body>
        </Card>
     
        <Card className="card_single">
          <Card.Body>
            <Card.Title><h3 className="card__mainText">RECOVERED <span className="removed__text">CASES</span></h3></Card.Title>
            <Card.Subtitle className="mb-1 text-muted text-center">
            India
            </Card.Subtitle>
            <Card.Text className="card__caseCount">
              <NumberFormat value= {datas.recovered} displayType={'text'} thousandsGroupStyle="lakh" thousandSeparator={true} renderText={value => <div  className="card__number">{value}</div>} />
            </Card.Text>
            <h5 className="img__description mr-2">Recovered today:{datas.todayRecovered}</h5>
          </Card.Body>
        </Card>
        <Card className="card_single">
          <Card.Body>
            <Card.Title><h3 className="card__mainText">TOTAL DEATHS</h3></Card.Title>
            <Card.Subtitle className="mb-1 text-muted text-center">
            India
            </Card.Subtitle>
            <Card.Text className="card__caseCount">
              <NumberFormat value= {datas.deaths} displayType={'text'} thousandsGroupStyle="lakh" thousandSeparator={true} renderText={value => <div  className="card__number">{value}</div>} />
            </Card.Text>
            <h5 className="img__description mr-2">Deaths today:{datas.todayDeaths}</h5>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default FourCards;
