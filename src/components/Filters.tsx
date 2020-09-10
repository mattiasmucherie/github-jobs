import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Checkbox from './Checkbox'
import Location from './Location'
import { buildUrl, FilterCities } from '../utils/filterUtils'

const FilterContainer = styled.div`
  margin: 25px 0;
`

const initStateCities: FilterCities[] = [
  { city: 'London', checked: false, index: 0 },
  { city: 'Amsterdam', checked: false, index: 1 },
  { city: 'New York', checked: false, index: 2 },
  { city: 'Berlin', checked: false, index: 3 },
]
interface FiltersProps {
  handleFilter: (url: string) => void
  onEnterLocation: () => void
}

const Filters = (props: FiltersProps) => {
  const { handleFilter, onEnterLocation } = props
  const [fullTime, setFullTime] = useState(false)
  const [userLocationSearch, setUserLocationSearch] = useState('')
  const [cities, setCities] = useState(initStateCities)

  useEffect(() => {
    const url = buildUrl({ cities, fullTime, userLocationSearch })
    handleFilter(url)
  }, [cities, fullTime, handleFilter, userLocationSearch])

  const handleLocationSearch = (userSearch: string | null) => {
    if (userSearch) {
      setUserLocationSearch(userSearch)
    } else {
      setUserLocationSearch('')
    }
    onEnterLocation()
  }
  const handleClick = (checked: boolean, index?: number) => {
    console.log(checked, index)
    if (index !== undefined) {
      const newState = initStateCities
      newState[index].checked = checked
      console.log(newState)
      setCities(newState)
    }
  }

  return (
    <FilterContainer>
      <Checkbox checked={fullTime} setFunction={setFullTime} labelText="Full Time" />
      <Location onSearch={handleLocationSearch} />
      {cities.map((city) => {
        return <Checkbox city={city} setFunction={handleClick} key={city.city} checked={city.checked} />
      })}
      {/*// <Checkbox checked={london} setFunction={setLondon} labelText="London" />*/}
      {/*// <Checkbox checked={amsterdam} setFunction={setAmsterdam} labelText="Amsterdam" />*/}
      {/*// <Checkbox checked={newYork} setFunction={setNewYork} labelText="New York" />*/}
      {/*// <Checkbox checked={berlin} setFunction={setBerlin} labelText="Berlin" />*/}
    </FilterContainer>
  )
}

export default Filters
