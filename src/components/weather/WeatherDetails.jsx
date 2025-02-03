import { useContext } from 'react';
import { weatherContext } from "../../context-api/WeatherContext";
import './weather-details.css';

function WeatherDetails() {
    const { weatherData } = useContext(weatherContext);

    if (!weatherData || Object.keys(weatherData).length === 0) {
        return null;
    }

    return (
        <div className="weather-card">
            <header className="weather-card__header">
                <h2 className="weather-card__title">
                    {weatherData.location.name}, {weatherData.location.country}
                </h2>
                <p className="weather-card__region">{weatherData.location.region}</p>
            </header>

            <div className="weather-card__main">
                <div className="weather-card__condition">
                    <img 
                        className="weather-card__icon"
                        src={`https:${weatherData.current.condition.icon}`}
                        alt={weatherData.current.condition.text}
                    />
                    <p className="weather-card__condition-text">
                        {weatherData.current.condition.text}
                    </p>
                </div>

                <div className="weather-card__stats">
                    <div className="weather-card__temp-group">
                        <span className="weather-card__label">Temperature</span>
                        <span className="weather-card__value">
                            {weatherData.current.temp_c}°C ({weatherData.current.temp_f}°F)
                        </span>
                    </div>
                    
                    <div className="weather-card__temp-group">
                        <span className="weather-card__label">Feels Like</span>
                        <span className="weather-card__value">
                            {weatherData.current.feelslike_c}°C ({weatherData.current.feelslike_f}°F)
                        </span>
                    </div>
                </div>
            </div>

            <footer className="weather-card__footer">
                <div className="weather-card__info-group">
                    <span className="weather-card__label">Location</span>
                    <span className="weather-card__value">
                        {weatherData.location.lat}°, {weatherData.location.lon}°
                    </span>
                </div>

                <div className="weather-card__info-group">
                    <span className="weather-card__label">Local Time</span>
                    <span className="weather-card__value">{weatherData.location.localtime}</span>
                </div>
            </footer>
        </div>
    );
}

export default WeatherDetails;