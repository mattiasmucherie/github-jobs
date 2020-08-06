import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Checkbox from './Checkbox'
import Location from './Location'
import { buildUrl } from '../utils/filterUtils'

const FilterContainer = styled.div`
  margin: 25px 0;
`

const initStateCities = [
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
  const [london, setLondon] = useState(false)
  const [amsterdam, setAmsterdam] = useState(false)
  const [newYork, setNewYork] = useState(false)
  const [berlin, setBerlin] = useState(false)
  const [userLocationSearch, setUserLocationSearch] = useState('')
  const [cities, setCities] = useState(initStateCities)

  useEffect(() => {
    const url = buildUrl({ amsterdam, berlin, london, newYork, fullTime, userLocationSearch })
    handleFilter(url)
  }, [cities, amsterdam, berlin, fullTime, handleFilter, london, newYork, userLocationSearch])

  const handleLocationSearch = (userSearch: string | null) => {
    if (userSearch) {
      setUserLocationSearch(userSearch)
    } else {
      setUserLocationSearch('')
    }
    onEnterLocation()
  }
  const handleClick = (checked: boolean, index?: number) => {
    if (index) {
      const newState = initStateCities
      newState[index].checked = checked
      console.log(newState)
      setCities(newState)
    }
  }

  useEffect(() => {})
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
