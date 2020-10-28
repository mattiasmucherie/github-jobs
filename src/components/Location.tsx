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
  font-size: 16px;
  line-height: 14px;
  color: #b9bdcf;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  height: 48px;
  width: 100%;
  padding: 0 10px;
  outline: none;
`
interface LocationProps {
  onSearch: (userSearch: string | null) => void
}
const Location = (props: LocationProps) => {
  const { onSearch } = props
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (event.currentTarget.value) {
        onSearch(event.currentTarget.value)
      } else {
        onSearch(null)
      }
    }
  }
  return (
    <LocationContainer>
      <LocationText>Location</LocationText>
      <LocationInput type="text" onKeyDown={handleKeyPress} />
    </LocationContainer>
  )
}

export default Location
