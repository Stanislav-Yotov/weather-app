import Feels from "../Feels/Feels";
import Humidity from "../Humidity/Humidity";
import Wind from "../Wind/Wind";

function WeatherBot(props) {
    return (
        <div className='bottom'>
            <Feels>
                {props.feels}
                <p className='bold'>Feels Like</p>
            </Feels>
            <Humidity>
                {props.humidity}
                <p className='bold'>Humidity</p>
            </Humidity>
            <Wind>
                {props.wind}
                <p className='bold'>Wind</p>
            </Wind>
        </div>
    );
}

export default WeatherBot;