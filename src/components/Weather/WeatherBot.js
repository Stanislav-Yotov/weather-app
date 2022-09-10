import Feels from "../Feels/Feels";
import Humidity from "../Humidity/Humidity";
import Wind from "../Wind/Wind";

function WeatherBot(props) {
    return (
        <div className='bottom'>
            <Feels>
                <p>{props.feels}</p>
                <p className='bold'>Feels Like</p>
            </Feels>
            <Humidity>
                <p>{props.humidity}</p>
                <p className='bold'>Humidity</p>
            </Humidity>
            <Wind>
                <p>{props.wind}</p>
                <p className='bold'>Wind</p>
            </Wind>
        </div>
    );
}

export default WeatherBot;