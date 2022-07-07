import { useState, useEffect } from "react"
import styled from "styled-components"
import { cities } from "./cities"
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
export const Searchbar = ({currentCity}) => {
    const [cityName, setCityName] = useState("")
  

    useEffect(()=>{
        if(cityName!=""){

            let filteredCities = cities.filter(data=>{
               let poss = true;
               for(let i = 0; i<cityName.length; i++){
                   if(cityName.toLowerCase()[i]!=data.cityName.toLowerCase()[i]){
                       poss = false;
                       break;
                   }
               }
               if(poss) return data
            })
            console.log(filteredCities)
        }
    },[cityName])
    return (
        <div>
            <SearchContainer className="searchContainer">
                <LocationPin><img src="/img/pin.png" /></LocationPin>
                <input type="text" placeholder="Search" onChange={e => setCityName( e.target.value)} value={cityName.cityname || currentCity} />
                <Button ><img src="/img/search.png" /></Button>
            </SearchContainer>
            <section>
                <div id="search-results">

                </div>
            </section>
        </div>
    )
}