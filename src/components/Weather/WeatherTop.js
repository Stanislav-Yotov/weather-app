import Location from "./Location/Location";
import Temperature from "./Temperature/Temperature";

function WeatherTop(props) {
    return (
            <div className='top'>
                <Location>
                    <p>{props.city}</p>
                </Location>
                <Temperature>
                    <h1>{props.temp}</h1>
                </Temperature>
                <div className='description'>
                    <p>{props.description}</p>
                </div>
            </div>
    );
}

export default WeatherTop;