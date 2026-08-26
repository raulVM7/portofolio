
import { useEffect, useState, useRef, use } from 'react';
import { getWeather } from "./weatherCodes";


 function WeatherCard(){
   
    const [oras, setOras] = useState("");  
   const [weather, setWeather] = useState(null);
  const [eroare, setEroare] = useState("");

   
   
   function OrasHandle(event){
      setOras(event.target.value);
   }

   async function weatherGET() {
    const raspuns = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${oras}&count=1&language=ro&format=json`);
    const date = await raspuns.json();
    if (!date.results) {
  setEroare("Introdu un oraș valid!");
  setWeather(null);        
  return;                  
   }
   setEroare("");  
    
  
   const lat = date.results[0].latitude;
   const lon = date.results[0].longitude;
   
    
   

   const raspunsVreme = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code`);
    const raspunsDate = await raspunsVreme.json();
    

    setWeather({
         name:date.results[0].name,
         temperatura: raspunsDate.current.temperature_2m,
         cod: raspunsDate.current.weather_code
   });
 
    
   
  }

   return(
   <div className="weather-app" >
      <h1>Weather App</h1>
      <input type="text" className="cityInput"  onChange={OrasHandle} placeholder='Enter a city' />
      
      {weather && (
   <>

      <h3 className='cityname'>{weather.name}</h3>
    <span className='emoji'>{getWeather(weather.cod).emoji}</span>
    <p className='descriere'>{getWeather(weather.cod).descriere}</p>
    <p className='temperatura'>{weather.temperatura}°C</p>
   </>
      )} 

      <button className='getBtn' onClick={weatherGET}>Cauta</button>
      
      {eroare && <p className='eroare'>{eroare}</p>}
   </div>

   )

}

function WeatherApp(){

    

   return(<>
      <div>
      <WeatherCard/>
      </div>

   </>)

}

export default WeatherApp;