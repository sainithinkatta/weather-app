import { useContext, useState } from 'react';
import { weatherContext } from "../../context-api/WeatherContext";
import Input from '../Input/Input';
import WeatherDetails from './WeatherDetails';
import { fetchWeatherData } from "../../api/weatherApi.js";
import './weather.css';

function Weather() {
    const { setWeatherData } = useContext(weatherContext);
    const [locationInput, setLocationInput] = useState('');

    async function handleInputSearch() {
        if (locationInput.trim()) {
            const data = await fetchWeatherData(locationInput);
            setWeatherData(data);
        }
    }


    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleInputSearch();
        }
    };

    return (
        <div className="weather">
            <div className="weather__container">
                <h1 className="weather__title">Weather App</h1>
                
                <div className="weather__search">
                    <Input 
                        setLocationInput={setLocationInput} 
                        onKeyPress={handleKeyPress} 
                    />

                    <button className="weather__search-button" onClick={handleInputSearch}>
                        Search
                    </button>
                </div>

                <WeatherDetails />
            </div>
        </div>
    );
}

export default Weather;