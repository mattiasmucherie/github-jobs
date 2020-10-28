import React from 'react'
import styled from 'styled-components'

const SearchBarInput = styled.input`
  font-size: 16px;
  line-height: 14px;
  color: #b9bdcf;
  border: none;
  border-radius: 4px;
  height: 31px;
  padding: 0 10px;
  outline: none;
`
interface SearchBarProps {
  onSearch: (userSearch: string | null) => void
}
const SearchBar = (props: SearchBarProps) => {
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
  return <SearchBarInput type="text" onKeyDown={handleKeyPress} placeholder="Title, companies, expertise or benefits" />
}

export default SearchBar
