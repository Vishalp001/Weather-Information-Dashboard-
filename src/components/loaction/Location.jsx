import bgImage from '../../assets/images/bg-today-large.svg'
import './loaction.scss'
const Location = (selectedLocation) => {
  console.log(selectedLocation, 'selectedLocation')
  return (
    <div className='locationContainer'>
      <div
        className='locationNameDegContainer'
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className='locationNameDeg'>
          <div>
            <h1 className='locName'>
              {selectedLocation?.locationdata?.cordinates?.locationName},{' '}
              {selectedLocation?.locationdata?.cordinates?.locationName !==
                selectedLocation?.locationdata?.cordinates?.district &&
                ` ${selectedLocation?.locationdata?.cordinates?.district},`}
              <br />
              {selectedLocation?.locationdata?.cordinates?.state},{' '}
              {selectedLocation?.locationdata?.cordinates?.country}
            </h1>
            <p className='date'>
              {new Date(
                selectedLocation?.locationdata?.weatherData?.current?.time,
              ).toLocaleString()}
              {}
            </p>
          </div>
          <div>
            <h1 className='deg'>
              {
                selectedLocation?.locationdata?.weatherData?.current
                  ?.temperature_2m
              }
              &deg;
            </h1>
          </div>
        </div>
      </div>

      <div className='locationData'>
        <div className='dataContainer'>
          <p className='name'>Feels Like</p>
          <p className='result'>18&deg;</p>
        </div>

        <div className='dataContainer'>
          <p className='name'>Humidity</p>
          <p className='result'>46%</p>
        </div>
        <div className='dataContainer'>
          <p className='name'>Wind</p>
          <p className='result'>
            {
              selectedLocation?.locationdata?.weatherData?.current
                ?.wind_speed_10m
            }{' '}
            km/hr
          </p>
        </div>
        <div className='dataContainer'>
          <p className='name'>Precipitation</p>
          <p className='result'>
            {
              selectedLocation?.locationdata?.weatherData?.current
                ?.precipitation
            }{' '}
            mm
          </p>
        </div>
      </div>
    </div>
  )
}

export default Location
