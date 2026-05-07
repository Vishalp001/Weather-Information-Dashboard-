import React, { useEffect, useRef, useState } from 'react'
import dropdownIcon from '../../assets/images/icon-dropdown.svg'
import './hourlyForecast.scss'
import snowIcon from '../../assets/images/icon-snow.webp'
import stromIcon from '../../assets/images/icon-storm.webp'
import sunnyIcon from '../../assets/images/icon-sunny.webp'
import rainIcon from '../../assets/images/icon-rain.webp'
import partlyCloudyIcon from '../../assets/images/icon-partly-cloudy.webp'
import fogIcon from '../../assets/images/icon-fog.webp'
import drizzleIcon from '../../assets/images/icon-drizzle.webp'
import iconUnits from '../../assets/images/icon-units.svg'
import iconArrow from '../../assets/images/icon-dropdown.svg'
const HourlyForecast = () => {
  const [isOpen, setisOpen] = useState(false)
  const dropdownRef = useRef(null)
  const toggleDropdown = () => {
    setisOpen((prev) => !prev)
  }
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setisOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  return (
    <div className='hourlyForecast'>
      <div className='hourlyForecastDropdown'>
        <h2>Hourly Forecast</h2>
        <div className='hFdropDown' ref={dropdownRef}>
          <div onClick={toggleDropdown} className='dropdownTab'>
            <p>Tuesday</p>
            <img className=' ml-2' src={iconArrow} alt='' />
          </div>
          {isOpen && (
            <div className='hFOption'>
              <p>Tuesday</p>
              <p>Tuesday</p>
              <p>Tuesday</p>
              <p>Tuesday</p>
              <p>Tuesday</p>
              <p>Tuesday</p>
              <p>Tuesday</p>
            </div>
          )}
        </div>
      </div>

      <div className='hFData'>
        <div>
          <img src={snowIcon} alt='' />
          <p> 3 PM </p>
        </div>
        <p>20&deg;</p>
      </div>
      <div className='hFData'>
        <div>
          <img src={snowIcon} alt='' />
          <p> 3 PM </p>
        </div>
        <p>20&deg;</p>
      </div>
      <div className='hFData'>
        <div>
          <img src={snowIcon} alt='' />
          <p> 3 PM </p>
        </div>
        <p>20&deg;</p>
      </div>
      <div className='hFData'>
        <div>
          <img src={snowIcon} alt='' />
          <p> 3 PM </p>
        </div>
        <p>20&deg;</p>
      </div>
      <div className='hFData'>
        <div>
          <img src={snowIcon} alt='' />
          <p> 3 PM </p>
        </div>
        <p>20&deg;</p>
      </div>
      <div className='hFData'>
        <div>
          <img src={snowIcon} alt='' />
          <p> 3 PM </p>
        </div>
        <p>20&deg;</p>
      </div>
    </div>
  )
}

export default HourlyForecast
