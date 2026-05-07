import './App.css'
import Header from './components/header/Header'
import Location from './components/loaction/Location'
import DailyForecast from './components/dailyForecast/DailyForecast'
import HourlyForecast from './components/hourlyForecast/HourlyForecast'
import SearchBar from './components/searchBar/SearchBar'
import { useState } from 'react'
import useLocationStore from './store/useLocationStore'

function App() {
  // const { location } = useLocationStore()
  // console.log('Location Data', location)
  const [selectedLocation, setselectedLocation] = useState(null)
  return (
    <div className='app-container'>
      <Header />
      <SearchBar onSelectedLoation={setselectedLocation} />
      <div className='locationData'>
        <Location locationdata={selectedLocation} />
        {/* <DailyForecast /> */}
        {/* <div className='flex-1'>
          <HourlyForecast />
        </div> */}
      </div>
    </div>
  )
}

export default App
