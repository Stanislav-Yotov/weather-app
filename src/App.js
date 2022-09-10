import { useState } from "react";
import WeatherBot from "./components/Weather/WeatherBot";
import WeatherTop from "./components/Weather/WeatherTop";


function App() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=7353222a869376e12fb1f3204590cae3`;

  async function searchLocation(e) {
    if (e.key === 'Enter') {
      const response = await fetch(url);
      const responseData = await response.json();
      setData(responseData);
      console.log(responseData);
      setLocation('');
    }
  }

  let temperature = data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null;
  let description = data.weather ? <p>{data.weather[0].main}</p> : null;
  let feelsLike = data.main ? <p>{data.main.feels_like.toFixed()}°C</p> : null;
  let humidityData = data.main ? <p>{data.main.humidity.toFixed()}%</p> : null;
  let windData = data.wind ? <p>{data.wind.speed.toFixed()} KM/H</p> : null;

  return (
    <div className='app'>
      <div className='container'>
        <div className='search'>
          <input
            type='text'
            value={location}
            onChange={e => setLocation(e.target.value)}
            onKeyPress={searchLocation}
            placeholder='Enter Location'
          />
        </div>

        <WeatherTop
          city={data.name}
          temp={temperature}
          description={description} />
        {data.name !== undefined &&
          <WeatherBot
            feels={feelsLike}
            humidity={humidityData}
            wind={windData} />}

      </div>
    </div>
  );
}

export default App;
