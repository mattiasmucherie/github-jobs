import React from 'react'
import styled from 'styled-components'

const LocationContainer = styled.div`
  margin-top: 35px;
  margin-bottom: 27px;
  color: #b9bdcf;
`
const LocationText = styled.div`
  font-family: Poppins, sans-serif;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  text-transform: uppercase;
  color: #b9bdcf;
`
const LocationInput = styled.input`
  font-family: Roboto, sans-serif;
  font-size: 12px;
  line-height: 14px;
  color: #b9bdcf;
`
interface LocationProps {
  onSearch: () => void
}
const Location = (props: LocationProps) => {
  const { onSearch } = props
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.charCode === 13) {
      onSearch()
    }
  }
  return (
    <LocationContainer>
      <LocationText>Location</LocationText>
      <LocationInput type="text" onKeyPress={handleKeyPress} />
    </LocationContainer>
  )
}

export default Location
