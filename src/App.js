import './App.css';
import { Searchbar } from './components/Searchbar';
import {useState,useEffect} from "react";
import axios from "axios";
function App() {
 const [location,setLocation] = useState({
   lat:"",
   long:""
 });

 const [currCity,setCurrCity] = useState("")

  useEffect(()=>{
    if(location.lat == "" || location.long == ""){
      getLocation();
    }else{

      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.long}&appid=2141e98491d6c0500256dd9b58a5c440`)
       .then(res=>{
        setCurrCity(res.data.name)
        console.log(res.data)
      })
       .catch(err=>console.log(err))
    }
  
  },[location])

  const getLocation = ()=>{
    if ("geolocation" in navigator) {
      // check if geolocation is supported/enabled on current browser
      navigator.geolocation.getCurrentPosition(
       function success(position) {
         // for when getting location is a success
         console.log('latitude', position.coords.latitude, 'longitude', position.coords.longitude);
         setLocation({...location,lat:position.coords.latitude,long:position.coords.longitude})
         //return [position.coords.latitude,position.coords.longitude]
         
       },
      function error(error_message) {
        // for when getting location results in an error
        console.error('An error has occured while retrieving location', error_message)
      });  
    }else {
      // geolocation is not supported
      // get your location some other way
      console.log('geolocation is not enabled on this browser')
    }
  }
  return (
    <div className="App">
      <Searchbar currentCity={currCity} />
    </div>
  );
}

export default App;
