import { useState, useEffect } from "react"
import styled from "styled-components"
import { cities } from "./cities";
import axios from "axios";

const LocationPin = styled.span`
& > img{
        width:20px;
        heigth:20px;
}
`
const Button = styled.button`
border:none;
background-color:#fff;
cursor:pointer;
& > img{
width:20px;
heigth:20px;
}
`
const SearchContainer = styled.div`
    width:50%;
    height:auto;
    min-width:350px;
    
    padding:15px;
    border-radius:5px;
    margin:15px auto;
    
    display:flex;
    justify-content:space-between;
    align-items:center;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    &:active:{
        border:2px solid black;
    }
    & > input{
        margin:2px;
        flex:1;
        font-size:20px;
        border:none;
        outline:none;
    }
`



export const Searchbar = ({currLocation})=> {
    const [city, setCity] = useState("")
    const [currWeather,setCurrWeather] = useState(null)
 //function to get the current weather for given location
const getCurrentWeather = (location) =>{
    console.log(location)
    const link = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&exclude=hourly,daily&appid=2141e98491d6c0500256dd9b58a5c440`
    axios.get(link)
         .then(res=>{
         // console.log(res.data)
         setCurrWeather(res.data)
         setCity(res.data.name)
        })
         .catch(err=>console.log(err))

}

    useEffect( ()=>{
        if(!currWeather){
         getCurrentWeather(currLocation);
      
        }else{
            filterCities(city.toLowerCase())
        }
    },[city])



function filterCities (city){
   
   console.log(city)
}


const handleChange = (e)=>{
    setCity(e.target.value);
}
    return (
        <div>
            <SearchContainer className="searchContainer">
                <LocationPin><img src="/img/pin.png" /></LocationPin>
                <input type="text" placeholder="Search" onChange={handleChange} value={city} />
                <Button ><img src="/img/search.png" /></Button>
            </SearchContainer>
            <section id="search-cities">
                <div >

                </div>
            </section>
        </div>
    )
}



  const getWeather = ()=>{
    const link = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}"
  }