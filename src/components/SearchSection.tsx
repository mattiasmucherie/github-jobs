import React, { useState } from 'react'
import styled from 'styled-components'
import backgroundImage from '../assets/backgroundImg.png'
import { Job } from '../types'
import JobCard from './JobCard'
import JobView from './JobView'
import { Loader } from './styled-components'
import Filters from './Filters'
import useInitRequest from '../utils/useInitRequest'

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
`
const SearchInput = styled.input``
const SearchButton = styled.button`
  border: none;
`

const SearchSection = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [filterUrl, setFilterUrl] = useState('')

  const { jobs, initLoading, initError } = useInitRequest(
    `https://jobs.github.com/positions.json${filterUrl ? '?' + filterUrl : ""}`
  )

  const loading = initLoading

  const onEnterLocation = async () => {}
  const handleFilter = (url: string) => {
    setFilterUrl(url)
  }

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
              <SearchInput />
              <SearchButton>Search</SearchButton>
            </SearchContainer>
          </BannerContainer>
          <Filters handleFilter={handleFilter} onEnterLocation={onEnterLocation} />
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
            <div>No Job Found</div>
          )}
        </>
      )}
    </>
  )
}

export default SearchSection
