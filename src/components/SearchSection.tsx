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
const JobFilterContainer = styled.div`
  @media only screen and (min-width: 1100px) {
    display: grid;
    grid-template-columns: minmax(231px, 20%) 1fr;
    column-gap: 77px;
  }
`

const SearchInput = styled.input``
const SearchButton = styled.button`
  border: none;
`

const SearchSection = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [filterUrl, setFilterUrl] = useState('')

  const { jobs, loading } = useInitRequest(`https://jobs.github.com/positions.json${filterUrl ? `?${filterUrl}` : ''}`)

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
          <JobFilterContainer>
            <div>
              <Filters handleFilter={handleFilter} onEnterLocation={onEnterLocation} />
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
                <div>No Job Found</div>
              )}
            </div>
          </JobFilterContainer>
        </>
      )}
    </>
  )
}

export default SearchSection
