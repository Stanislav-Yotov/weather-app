import { useState } from 'react';

function SearchBar(props) {
    const [data, setData] = useState({});
    const [location, setLocation] = useState('');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7353222a869376e12fb1f3204590cae3`;

}

export default SearchBar;