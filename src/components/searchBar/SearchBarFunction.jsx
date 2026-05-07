import { useEffect, useState } from 'react'
import useLocationStore from '../../store/useLocationStore.js'
const SearchBarFunction = () => {
  const [isLoading, setisLoading] = useState(false)
  const [searchBarDropdown, setSearchBarDropdown] = useState(false)

  // For location search
  const [location, setLocation] = useState('')

  // For location result
  const [locationResult, setLocationResult] = useState([])

  // For cordinates
  const [cordinates, setCordinates] = useState({
    latitude: 20.73933,
    longitude: 78.59784,
    locationName: 'Wardha',
    country: 'India',
    state: 'Maharashtra',
    district: 'Wardha',
  })

  const [weatherData, setWeatherData] = useState(null)

  const { setLocationStore } = useLocationStore()

  const locationAPi = `https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=5`

  const openMetroApi = `https://api.open-meteo.com/v1/forecast?latitude=${cordinates.latitude}&longitude=${cordinates.longitude}&hourly=temperature_2m,wind_speed_10m,apparent_temperature,is_day&current=is_day,temperature_2m,precipitation,wind_speed_10m,weather_code&timezone=auto`

  useEffect(() => {
    setSearchBarDropdown(true)
    setisLoading(true)
    fetch(locationAPi)
      .then((res) => res.json())
      .then((data) => {
        setLocationResult(data.results)
        setisLoading(false)
      })
  }, [locationAPi, location])

  const handleOnChange = (e) => {
    setLocation(e.target.value)
  }

  const handleCordinates = (id) => {
    locationResult.find((item) => {
      if (item.id === id) {
        setCordinates((prev) => ({
          ...prev,
          longitude: item.longitude,
          latitude: item.latitude,
          locationName: item.name,
          country: item.country,
          state: item.admin1,
          district: item.admin2,
        }))
        return true
      }
      return false
    })
  }

  useEffect(() => {
    setisLoading(true)
    fetch(openMetroApi)
      .then((res) => res.json())
      .then((data) => {
        setWeatherData(data)
        setLocationStore(data)
        setisLoading(false)
        setSearchBarDropdown(false)
      })
  }, [cordinates, openMetroApi, setLocationStore])
  return {
    handleOnChange,
    searchBarDropdown,
    isLoading,
    locationResult,
    handleCordinates,
    cordinates,
    weatherData,
  }
}

export default SearchBarFunction
