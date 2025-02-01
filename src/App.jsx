import Weather from './components/Weather/Weather'
import WeatherContext from './context/WeatherContext'

import './App.css'

function App() {
  return (
    <WeatherContext>
      <Weather />
    </WeatherContext>
  )
}

export default App