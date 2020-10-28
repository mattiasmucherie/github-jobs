import React, { useState } from 'react'
import styled from 'styled-components'
import backgroundImage from '../assets/backgroundImg.png'
import { Job } from '../types'
import JobCard from './JobCard'
import JobView from './JobView'
import { Loader } from './styled-components'
import Filters from './Filters'
import useInitRequest from '../utils/useInitRequest'
import SearchBar from './SearchBar'

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
const SearchContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  background: #ffffff;
  padding: 12px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  font-family: Roboto, sans-serif;
`
const JobFilterContainer = styled.div`
  @media only screen and (min-width: 1100px) {
    display: grid;
    grid-template-columns: minmax(231px, 20%) 1fr;
    column-gap: 77px;
  }
`

const SearchButton = styled.button`
  border: none;
  background: #1e86ff;
  color: white;
  border-radius: 4px;
  font-size: 16px;
  padding: 0 30px;
`
const NoJobContainer = styled.div`
  margin-top: 2rem;
`

const SearchSection = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [filterUrl, setFilterUrl] = useState('')
  const [locationFilter, setLocationFilter] =useState('')
  const [searchBarFilter, setSearchBarFilter] = useState('')

  const { jobs, loading } = useInitRequest(`https://jobs.github.com/positions.json${filterUrl ? `?${filterUrl}` : ''}`)

  const handleFilter = (url: string) => {
    setLocationFilter(url)
  }

  const handleSearchBar = (userSearch: string | null) => {
   if (userSearch) {
      setSearchBarFilter(userSearch)
  }
   // TODO:  MAKE A FUNCTION THAT ONLY UPDATES FILTER URL WHEN SEARCHBAR OR LOCATIONFILTER |HAS BEEN CHANGED

  const resetSelectedJob = () => {
    setSelectedJob(null)
    setTimeout(function () {
      window.scrollTo(0, scrollPosition)
    }, 1)
  }

  return (
    <>
      {selectedJob ? (
        <JobView job={selectedJob} onClick={resetSelectedJob} />
      ) : (
        <>
          <BannerContainer>
            <BackgroundImage src={backgroundImage} alt="Background" />
            <SearchContainer>
              <SearchBar onSearch={handleSearchBar} />
              <SearchButton>Search</SearchButton>
            </SearchContainer>
          </BannerContainer>
          <JobFilterContainer>
            <div>
              <Filters handleFilter={handleFilter} />
            </div>
            <div>
              {loading ? (
                <Loader>
                  <div />
                </Loader>
              ) : jobs.length > 0 ? (
                jobs.map((job) => (
                  <JobCard
                    key={job.id}
                    job={job}
                    onClick={() => {
                      setSelectedJob(job)
                      setScrollPosition(window.scrollY)
                      window.scrollTo(0, 0)
                    }}
                  />
                ))
              ) : (
                <NoJobContainer>No Job Found</NoJobContainer>
              )}
            </div>
          </JobFilterContainer>
        </>
      )}
    </>
  )
}

export default SearchSection
