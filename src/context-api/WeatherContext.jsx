import { createContext, useState } from "react";

export const weatherContext = createContext();

function WeatherContext (props) {
    const [weatherData, setWeatherData] = useState([]);

    return (
        <weatherContext.Provider
            value={{
                weatherData,
                setWeatherData
            }}
        >
            { props.children }
        </weatherContext.Provider>
    )
}

export default WeatherContext;