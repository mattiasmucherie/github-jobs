import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Checkbox from './Checkbox'
import Location from './Location'
import { buildUrl } from '../utils/filterUtils'

const FilterContainer = styled.div`
  margin: 25px 0;
`
interface FiltersProps {
  handleFilter: (url: string) => void
  onEnterLocation: () => void
}

const Filters = (props: FiltersProps) => {
  const { handleFilter, onEnterLocation } = props
  const [fullTime, setFullTime] = useState(false)
  const [userLocationSearch, setUserLocationSearch] = useState('')
  const [city, setCity] = useState('')

  useEffect(() => {
    const url = buildUrl({ fullTime, userLocationSearch })
    handleFilter(url)
  }, [fullTime, handleFilter, userLocationSearch])

  const setCheckbox = (checked: boolean, label?: string) => {
    if (label) {
      setCity(label)
      setUserLocationSearch(label)
    }
  }
  const handleLocationSearch = (userSearch: string | null) => {
    if (userSearch) {
      setUserLocationSearch(userSearch)
    } else {
      setUserLocationSearch('')
    }
    onEnterLocation()
  }

  return (
    <FilterContainer>
      <Checkbox checkedProps={fullTime} setFunction={setFullTime} labelText="Full Time" />
      <Location onSearch={handleLocationSearch} />
      <div>
        <Checkbox currentCity={city} setFunction={setCheckbox} labelText="London" />
        <Checkbox currentCity={city} setFunction={setCheckbox} labelText="Amsterdam" />
        <Checkbox currentCity={city} setFunction={setCheckbox} labelText="New York" />
        <Checkbox currentCity={city} setFunction={setCheckbox} labelText="Berlin" />
      </div>
    </FilterContainer>
  )
}

export default Filters
