import logo from '../../assets/images/logo.svg'

import iconCheck from '../../assets/images/icon-checkmark.svg'
import iconUnits from '../../assets/images/icon-units.svg'
import iconArrow from '../../assets/images/icon-dropdown.svg'
import './header.scss'
import HeaderFunction from './HeaderFunction.jsx'

const Header = () => {
  const { isOpen, dropdownRef, toggleDropdown, unit, updateUnit, setUnits } =
    HeaderFunction()

  return (
    <div className='header'>
      <img src={logo} alt='' />
      <div className='dropdown' ref={dropdownRef}>
        <div onClick={toggleDropdown} className='dropdownTab'>
          <img className='gearIcon' src={iconUnits} alt='' />
          <p>Units</p>
          <img className=' ml-2' src={iconArrow} alt='' />
        </div>
        {isOpen && (
          <div className='dropdownContent'>
            <p className='heading'>Switch to Imperial</p>
            <div>
              <span>Temperature</span>
              <p
                className={`option , ${unit.temperature === 'C' && 'bgHover'} `}
                onClick={() => updateUnit('temperature', 'C')}
              >
                Celcius (&deg;C){' '}
                {unit.temperature === 'C' && <img src={iconCheck} alt='' />}
              </p>
              <p
                className={`option , ${unit.temperature === 'F' && 'bgHover'} `}
                onClick={() => updateUnit('temperature', 'F')}
              >
                Fahrenheit (&deg;F){' '}
                {unit.temperature === 'F' && <img src={iconCheck} alt='' />}
              </p>
            </div>
            <hr />
            <div>
              <span>Wind Speed</span>
              <p
                className={`option , ${unit.windSpeed === 'kh/h' && 'bgHover'} `}
                onClick={() => updateUnit('windSpeed', 'kh/h')}
              >
                km/h{' '}
                {unit.windSpeed === 'kh/h' && <img src={iconCheck} alt='' />}
              </p>
              <p
                className={`option , ${unit.windSpeed === 'mph' && 'bgHover'} `}
                onClick={() => updateUnit('windSpeed', 'mph')}
              >
                mph {unit.windSpeed === 'mph' && <img src={iconCheck} alt='' />}
              </p>
            </div>
            <hr />
            <div>
              <span>Precipitaion</span>
              <p
                className={`option , ${unit.precipitation === 'mm' && 'bgHover'} `}
                onClick={() => updateUnit('precipitation', 'mm')}
              >
                Millimeters (mm)
                {unit.precipitation === 'mm' && <img src={iconCheck} alt='' />}
              </p>
              <p
                className={`option , ${unit.precipitation === 'cm' && 'bgHover'} `}
                onClick={() => updateUnit('precipitation', 'cm')}
              >
                Centimeters (cm)
                {unit.precipitation === 'cm' && <img src={iconCheck} alt='' />}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
