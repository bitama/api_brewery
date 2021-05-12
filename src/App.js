
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import React, { useState,useEffect } from 'react';
import axios from 'axios';

function App() {
  useEffect(() => {
    console.log("useEffect")
    axios.get(`https://api.openbrewerydb.org/breweries?by_city=${city}`)
      .then(res => {
        console.log(res)
        setBreweries(res.data)
      })
      .catch(errors => console.log(errors))
},[])
  
  const [breweries, setBreweries] = useState([])
  const[city,setCity] = useState("chicago")
  const fetchBreweryInfo = (event) => {
    axios.get(`https://api.openbrewerydb.org/breweries?by_city=${city}`)
      .then(res => {
        console.log(res)
        setBreweries(res.data)
      })
      .catch(errors=>console.log(errors))
  //   fetch("https://api.openbrewerydb.org/breweries")
  //     .then(response => response.json())
  //     .then(response => {
  //       console.log(response);
  //       setBreweries(response);
  // })
  //     .catch(errors=>console.log(errors)) 
        
      }
  
  return (
    <div className="App">
      <div container>
        <input className="form-control m-5 mx-auto center w-50" type="text" placeholder="city" onChange={(event)=>setCity(event.target.value)}/>
      </div>
      <button className="btn btn-primary btn-lg mt-1" onClick={fetchBreweryInfo}>Fetch Info information</button>
      {
        breweries.map((item, i) => <h1 key={i}>{item.name},{item.city}</h1>)
      }
      
    </div>
  );

}
export default App;
