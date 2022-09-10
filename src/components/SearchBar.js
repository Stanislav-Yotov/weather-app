import { useState } from 'react';

function SearchBar(props) {
    const [data, setData] = useState({});
    const [location, setLocation] = useState('');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7353222a869376e12fb1f3204590cae3`;

    async function searchLocation(e) {
        if (e.key === 'Enter') {
            const response = await fetch(url);
            const responseData = await response.json();
            setData(responseData);
            console.log(responseData);
            setLocation('');
        }
    }

    return (
        <div className='search'>
            <input
                type='text'
                value={location}
                onChange={e => setLocation(e.target.value)}
                onKeyPress={searchLocation}
                placeholder='Enter Location'
            />
        </div>
    );

}

export default SearchBar;