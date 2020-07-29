import React from 'react'
import styled from 'styled-components'
import SearchSection from './components/SearchSection'

const Header = styled.header`
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 32px;
`
const Bold = styled.b`
  font-weight: 700;
`
function App() {
  return (
    <div>
      <Header>
        <Bold>Github </Bold>Jobs
      </Header>
      <SearchSection />
    </div>
  )
}

export default App
