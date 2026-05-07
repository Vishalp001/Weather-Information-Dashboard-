import { useEffect, useState } from 'react'
import searchIcon from '../../assets/images/icon-search.svg'
import loading from '../../assets/images/icon-loading.svg'
import './searchBar.scss'
import SearchBarFunction from './SearchBarFunction'

const SearchBar = ({ onSelectedLoation }) => {
  const {
    handleOnChange,
    searchBarDropdown,
    isLoading,
    locationResult,
    handleCordinates,
    weatherData,
    cordinates,
  } = SearchBarFunction()

  useEffect(() => {
    if (cordinates && weatherData) {
      onSelectedLoation({ cordinates, weatherData })
    }
  }, [cordinates, weatherData])

  console.log(weatherData, 'weatherData')

  return (
    <div className='searchBar z-10'>
      <h1>How's the sky looking today?</h1>
      <div className='searchBar'>
        <div className='inputAndButton'>
          <div className='searchContainer'>
            <img src={searchIcon} alt='' />
            <input
              onChange={handleOnChange}
              type='text'
              placeholder='Search for a place...'
            />
          </div>
          <button>Search</button>
        </div>
        {searchBarDropdown && (
          <>
            {isLoading ? (
              <div className='searchBarDropdown'>
                <span className='flex gap-2 px-2 '>
                  <img className='loadingIcon' src={loading} alt='' />
                  Search in Progress
                </span>
              </div>
            ) : (
              <div className='searchBarDropdown'>
                {locationResult?.length > 0 ? (
                  locationResult?.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleCordinates(item.id)}
                      className='option'
                    >
                      <p>{item.name}</p>
                      <span>
                        {item.admin2}, {item.admin1}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className='option'>
                    <p>No Result Found</p>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default SearchBar
