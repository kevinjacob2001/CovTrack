import axios from 'axios';
import React , {useEffect, useState} from 'react'

function StateData() {
   const [stateData,setstateData]=useState([])
   
        useEffect(()=>{
            async function fetchData(){
                const request=await axios.get("https://api.covid19india.org/state_district_wise.json");
                console.log(request.data)
                setstateData(request.data);
            }
            fetchData();
        },[stateData])


    return (
        <div className="container">
            <div className="row">
                
            </div>
        </div>
    )
}

export default StateData
