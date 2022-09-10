import WeatherBot from "./components/Weather/WeatherBot";
import WeatherTop from "./components/Weather/WeatherTop";
import SearchBar from "./components/SearchBar";

function App() {

  return (
    <div className='app'>
      <div className='container'>
      <SearchBar />
        <WeatherTop
          city={'Vratsa'}
          temp={23}
          description={'Clouds'} />
        <WeatherBot feels={22} humidity={50} wind={24} />
      </div>
    </div>
  );
}

export default App;
