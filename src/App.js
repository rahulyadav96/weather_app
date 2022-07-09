import './App.css';
import { Searchbar } from './components/Searchbar';
import {useState,useEffect} from "react"
function App() {
  const [location,setLocation] = useState(null)

    // function to get the current location
function getLocation(){
   
    if ("geolocation" in navigator) {
      // check if geolocation is supported/enabled on current browser
      navigator.geolocation.getCurrentPosition(
       function success(position) {
         // for when getting location is a success
         console.log('latitude', position.coords.latitude, 'longitude', position.coords.longitude);
        let currLocation = {latitude:position.coords.latitude,longitude:position.coords.longitude}
        setLocation(currLocation); 
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

  useEffect(()=>{
    getLocation();
  },[])
  return (
    <div className="App">{
      
      location ? <Searchbar currLocation={location} /> : <div></div>
    
    }
     
    </div>
  );
}

export default App;
