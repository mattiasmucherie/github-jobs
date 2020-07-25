import React from 'react'
import styled from 'styled-components'
import backgroundImage from '../assets/backgroundImg.png'

const BannerContainer = styled.div`
  position: relative;
`
const BackgroundImage = styled.img`
  border-radius: 8px;
  object-fit: cover;
  object-position: 50%;
  width: 100%;
  height: 138px;
`
const SearchInput = styled.input`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const SearchSection = () => {
  return (
    <BannerContainer>
      <BackgroundImage src={backgroundImage} alt="Background" />
      <SearchInput />
    </BannerContainer>
  )
}

export default SearchSection
