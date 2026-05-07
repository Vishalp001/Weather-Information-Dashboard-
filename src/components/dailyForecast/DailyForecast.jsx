import React from 'react'
import snowIcon from '../../assets/images/icon-snow.webp'
import stromIcon from '../../assets/images/icon-storm.webp'
import sunnyIcon from '../../assets/images/icon-sunny.webp'
import rainIcon from '../../assets/images/icon-rain.webp'
import partlyCloudyIcon from '../../assets/images/icon-partly-cloudy.webp'
import fogIcon from '../../assets/images/icon-fog.webp'
import drizzleIcon from '../../assets/images/icon-drizzle.webp'
import './dailyForecast.scss'
const DailyForecast = () => {
  return (
    <div className='dialyForcast'>
      <h1>Dialy Forcast</h1>
      <div className='forcastContainer'>
        <div className='forcastCard'>
          <h3>Tue</h3>
          <img src={snowIcon} alt='' />
          <div className='forcastTemp'>
            <p>20&deg;</p>
            <p>40&deg;</p>
          </div>
        </div>
        <div className='forcastCard'>
          <h3>Tue</h3>
          <img src={stromIcon} alt='' />
          <div className='forcastTemp'>
            <p>20&deg;</p>
            <p>40&deg;</p>
          </div>
        </div>

        <div className='forcastCard'>
          <h3>Tue</h3>
          <img src={sunnyIcon} alt='' />
          <div className='forcastTemp'>
            <p>20&deg;</p>
            <p>40&deg;</p>
          </div>
        </div>
        <div className='forcastCard'>
          <h3>Tue</h3>
          <img src={rainIcon} alt='' />
          <div className='forcastTemp'>
            <p>20&deg;</p>
            <p>40&deg;</p>
          </div>
        </div>
        <div className='forcastCard'>
          <h3>Tue</h3>
          <img src={partlyCloudyIcon} alt='' />
          <div className='forcastTemp'>
            <p>20&deg;</p>
            <p>40&deg;</p>
          </div>
        </div>
        <div className='forcastCard'>
          <h3>Tue</h3>
          <img src={fogIcon} alt='' />
          <div className='forcastTemp'>
            <p>20&deg;</p>
            <p>40&deg;</p>
          </div>
        </div>
        <div className='forcastCard'>
          <h3>Tue</h3>
          <img src={drizzleIcon} alt='' />
          <div className='forcastTemp'>
            <p>20&deg;</p>
            <p>40&deg;</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DailyForecast
