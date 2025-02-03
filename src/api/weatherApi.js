const API_KEY = import.meta.env.VITE_WEATHER_APP_API_KEY;
const BASE_URL = 'https://api.weatherapi.com/v1/current.json';

export const fetchWeatherData = async (location) => {
    try {
        const url = `${BASE_URL}?key=${API_KEY}&q=${location}&aqi=no`;
        const response = await fetch(url);
        

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Failed to fetch weather data:', error);
        throw error;
    }
};