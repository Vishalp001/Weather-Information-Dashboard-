import { useEffect, useRef, useState } from 'react'

const HeaderFunction = () => {
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

  const [unit, setUnits] = useState({
    temperature: 'C',
    windSpeed: 'kh/h',
    precipitation: 'mm',
  })

  const updateUnit = (key, value) => {
    setUnits((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  return {
    isOpen,
    setisOpen,
    dropdownRef,
    toggleDropdown,
    unit,
    setUnits,
    updateUnit,
  }
}

export default HeaderFunction
