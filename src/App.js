
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import React, { useState,useEffect } from 'react';
import axios from 'axios';

function App() {
  
  const [breweries, setBreweries] = useState([])
  const [state, setState] = useState("ohio")
  const states=[
    "Alaska",
    "Alabama",
    "Arkansas",
    "American Samoa",
    "Arizona",
    "California",
    "Colorado",
    "Connecticut",
    "District of Columbia",
    "Delaware",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Iowa",
    "Idaho",
    "Illinois",
    "Indiana",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Massachusetts",
    "Maryland",
    "Maine",
    "Michigan",
    "Minnesota",
    "Missouri",
    "Mississippi",
    "Montana",
    "North Carolina",
    " North Dakota",
    "Nebraska",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "Nevada",
    "New York",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Virginia",
    "Virgin Islands",
    "Vermont",
    "Washington",
    "Wisconsin",
    "West Virginia",
    "Wyoming"]
    useEffect(() => {
      console.log("useEffect")
      axios.get(`https://api.openbrewerydb.org/breweries?by_state=${state}`)
      .then(res => {
        console.log(res)
        setBreweries(res.data)
      })
      .catch(errors => console.log(errors))
    },[state])
  const fetchBreweryInfo = (event) => {
    axios.get(`https://api.openbrewerydb.org/breweries?by_state=${state}`)
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
      {/* <div container>
        <input className="form-control m-5 mx-auto center w-50" type="text" placeholder="city" onChange={(event)=>setState(event.target.value)}/>
      </div> */}
      {/* <button className="btn btn-primary btn-lg mt-1" onClick={fetchBreweryInfo}>Fetch Info information</button> */}
      <select onChange={(event)=>setState(event.target.value)}>
        {states.map((item, i)=><option value={item} key={i}>{item}</option>)}
      </select>
      {
        breweries.map((item, i) => <h1 key={i}>{item.name},{item.state}</h1>)
      }
      
    </div>
  );

}
export default App;
