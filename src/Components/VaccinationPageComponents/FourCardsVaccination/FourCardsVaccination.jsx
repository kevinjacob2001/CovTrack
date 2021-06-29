import React,{useEffect,useState} from 'react'
import axios from 'axios'
import NumberFormat from 'react-number-format';
import {Card} from 'react-bootstrap'
import './FourCardsVaccination.css'

function FourCardsVaccination() {
    const [datas,setDatas]=useState([])
    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get("https://www.mygov.in/sites/default/files/covid/vaccine/vaccine_counts_today.json");
            
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
            <Card.Title><h3 className="card__mainText">COUNTRY</h3></Card.Title>
            <Card.Subtitle className="mb-2 text-muted text-center">
            .
            </Card.Subtitle>
            <Card.Text className="card__caseCount">
            
              <NumberFormat  displayType={'text'} thousandsGroupStyle="lakh" thousandSeparator={true} renderText={value => <div  className="card__number">INDIA</div>} />
            
            </Card.Text>
            
          </Card.Body>
        </Card>

      <Card className="card_single">
          <Card.Body>
            <Card.Title><h3 className="card__mainText">DOSE 1</h3></Card.Title>
            <Card.Subtitle className="mb-2 text-muted text-center">
            India
            </Card.Subtitle>
            <Card.Text className="card__caseCount">
            
              <NumberFormat  value={datas["india_dose1"]} displayType={'text'} thousandsGroupStyle="lakh" thousandSeparator={true} renderText={value => <div  className="card__number">{value}</div>} />
            
            </Card.Text>
            
          </Card.Body>
        </Card>
        <Card className="card_single">
          <Card.Body>
            <Card.Title><h3 className="card__mainText">DOSE 2</h3></Card.Title>
            <Card.Subtitle className="mb-2 text-muted text-center">
            India
            </Card.Subtitle>
            <Card.Text className="card__caseCount">
            
              <NumberFormat  value={datas["india_dose2"]} displayType={'text'} thousandsGroupStyle="lakh" thousandSeparator={true} renderText={value => <div  className="card__number">{value}</div>} />
            
            </Card.Text>
            
          </Card.Body>
        </Card>

        <Card className="card_single">
          <Card.Body>
            <Card.Title><h3 className="card__mainText">TOTAL DOSES</h3></Card.Title>
            <Card.Subtitle className="mb-2 text-muted text-center">
            India
            </Card.Subtitle>
            <Card.Text className="card__caseCount">
            
              <NumberFormat  value={datas["india_total_doses"]} displayType={'text'} thousandsGroupStyle="lakh" thousandSeparator={true} renderText={value => <div  className="card__number">{value}</div>} />
            
            </Card.Text>
            
          </Card.Body>
        </Card>


     
      
      </div>
    </div>
        </div>
    )
}

export default FourCardsVaccination
