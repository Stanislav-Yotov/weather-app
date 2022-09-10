import Location from "./Location/Location";
import Temperature from "./Temperature/Temperature";

function WeatherTop(props) {
    return (
            <div className='top'>
                <Location>
                    {props.city}
                </Location>
                <Temperature>
                    {props.temp}
                </Temperature>
                <div className='description'>
                    {props.description}
                </div>
            </div>
    );
}

export default WeatherTop;