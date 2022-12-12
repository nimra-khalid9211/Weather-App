import React, {useState, useEffect} from 'react';
import { FaCloudMoon } from 'react-icons/fa';
export default function Weather() {

  const [weatherApi , setWeatherApi] = useState()  
  const [Search , setSearch] = useState('Sialkot')

  function handleClick(e){
    console.log(e.target.value);
    setSearch(e.target.value);
    }
    
    useEffect(()=>{
      getCurrentWeather()
      // eslint-disable-next-line
     },[]) 
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${Search}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
     const getCurrentWeather = ()=>{
      fetch(url)
      .then(response => response.json())
      .then(response => 
        setWeatherApi({main:response.main,name:response?.name}))
       .catch(err => console.error(err));
       console.log(weatherApi)
     }
     
  return (
    <>
        <h1>WHEATHER APP...</h1>
        <div className="search-here">
          <form onSubmit={(e)=>{e.preventDefault();getCurrentWeather()}}>
            <input 
              type="search" 
              value={Search} 
              onChange={handleClick}/>
          </form>
        </div>
        {weatherApi.name ?(
          <div>
              <div className="temp-area d-flex">
                <FaCloudMoon className="weather-icon"/>
                <h1 className="wheather-area">{weatherApi.name}</h1>
                <h1 className="temperature">{weatherApi.main.temp}&deg;C</h1>
              </div>
             <div className="max-min d-flex">
                <h3 className="max-temp">Max temp {weatherApi.main.temp_max}&deg;C</h3>
                <h3 className="min-temp"> Min temp {weatherApi.main.temp_min}&deg;C</h3>
              </div>
          </div>
        ):(<p className='error'>not found</p>)

        }
    </>
  )
}
