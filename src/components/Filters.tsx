import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Checkbox from './Checkbox'
import Location from './Location'

const FilterContainer = styled.div`
  margin: 25px 0;
`

interface FiltersProps {}
const Filters = (props: FiltersProps) => {
  const [fullTime, setFullTime] = useState(false)
  const [london, setLondon] = useState(false)
  const [amsterdam, setAmsterdam] = useState(false)
  const [newYork, setNewYork] = useState(false)
  const [berlin, setBerlin] = useState(false)

  const handleLocationSearch = () => {
    console.log('LOCATION SEARCH')
  }
  useEffect(() => {

  })
  return (
    <FilterContainer>
      <Checkbox checked={fullTime} setFunction={setFullTime} labelText="Full Time" />
      <Location onSearch={handleLocationSearch} />
      <Checkbox checked={london} setFunction={setLondon} labelText="London" />
      <Checkbox checked={amsterdam} setFunction={setAmsterdam} labelText="Amsterdam" />
      <Checkbox checked={newYork} setFunction={setNewYork} labelText="New York" />
      <Checkbox checked={berlin} setFunction={setBerlin} labelText="Berlin" />
    </FilterContainer>
  )
}

export default Filters
