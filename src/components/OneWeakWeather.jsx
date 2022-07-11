import axios from "axios";
import { useEffect, useState } from "react";

export const OneWeakWeather = ({ coords }) => {
    const [forcast, setForcast] = useState(null);
    const [show,setShow] = useState(null);

    //api link to fetch the weather forcast
    const weatherLink =`https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.long}&exclude=current,minutelyalerts&units=metric&appid=e4c70ce6a6821649a416cb9521d5f4f8`
    
    useEffect(()=>{
        axios.get(weatherLink)
        .then(res=>{
            console.log(res.data);
            setForcast(res.data);
        })
        .catch(err=>console.log(err))
    },[coords])

    const handleClick = (weather)=>{
        setShow(weather);
    }
  return <>
        <div className="weak-container">
            <div className="wrapper">
                    <div className="weather-box" onClick={()=>handleClick()}></div>
                    <div className="weather-box"></div>
                    <div className="weather-box"></div>
                    <div className="weather-box"></div>
                    <div className="weather-box"></div>
                    <div className="weather-box"></div>
                    <div className="weather-box"></div>
                    <div className="weather-box"></div>
            </div>
        </div>
        
  </>;
};
