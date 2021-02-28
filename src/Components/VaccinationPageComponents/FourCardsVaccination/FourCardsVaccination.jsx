import React,{useEffect,useState} from 'react'
import axios from 'axios'
import NumberFormat from 'react-number-format';
import {Card} from 'react-bootstrap'
import './FourCardsVaccination.css'

function FourCardsVaccination() {
    const [datas,setDatas]=useState([])
    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get("https://india-covid19vaccine.github.io/api/national_latest.json");
            console.log(request.data)
            setDatas(request.data);
            return request;
        }
        fetchData();
    },[])

    return (

        
        <div className="four__cards__vaccine">
            <div className="container">
            <h1 className="text-light text-center">Vaccination details</h1>
      <div className="row card_section ">
    
        <Card className="card_single">
          <Card.Body>
            <Card.Title><h3 className="card__mainText">TOTAL VACCINATED</h3></Card.Title>
            <Card.Subtitle className="mb-2 text-muted text-center">
            India
            </Card.Subtitle>
            <Card.Text className="card__caseCount">
            
              <NumberFormat  value={datas[0]?.total_vaccinated} displayType={'text'} thousandsGroupStyle="lakh" thousandSeparator={true} renderText={value => <div  className="card__number">{value}</div>} />
            
            </Card.Text>
            
          </Card.Body>
        </Card>

        <Card className="card_single">
          <Card.Body>
            <Card.Title><h3 className="card__mainText">TOTAL FULLY VACCINATED</h3></Card.Title>
            <Card.Subtitle className="mb-2 text-muted text-center">
            India
            </Card.Subtitle>
            <Card.Text className="card__caseCount">
          
             <NumberFormat  displayType={'text'} thousandsGroupStyle="lakh" value={datas[0]?.total_fully_vaccinated} thousandSeparator={true} renderText={value => <div  className="card__number">{value}</div>} /> 
            </Card.Text>
            <h5 className="img__description mr-2">Out of:{datas[0]?.population}</h5>
          </Card.Body>
        </Card>
     
        <Card className="card_single">
          <Card.Body>
            <Card.Title><h3 className="card__mainText">TOTAL DOSES  <span className="removed__text">CASES</span></h3></Card.Title>
            <Card.Subtitle className="mb-1 text-muted text-center">
            India
            </Card.Subtitle>
            <Card.Text className="card__caseCount">
              <NumberFormat value={datas[0]?.total_doses} displayType={'text'} thousandsGroupStyle="lakh" thousandSeparator={true} renderText={value => <div  className="card__number">{value}</div>} />
            </Card.Text>

          </Card.Body>
        </Card>
        <Card className="card_single">
          <Card.Body>
            <Card.Title><h3 className="card__mainText">TOTAL SESSIONS</h3></Card.Title>
            <Card.Subtitle className="mb-1 text-muted text-center">
            India
            </Card.Subtitle>
            <Card.Text className="card__caseCount">
              <NumberFormat value={datas[0]?.total_sessions} displayType={'text'} thousandsGroupStyle="lakh" thousandSeparator={true} renderText={value => <div  className="card__number">{value}</div>} />
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
        </div>
    )
}

export default FourCardsVaccination
