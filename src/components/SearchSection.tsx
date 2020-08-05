import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import backgroundImage from '../assets/backgroundImg.png'
import { Job } from '../types'
import { get } from '../utils/http'
import JobCard from './JobCard'
import JobView from './JobView'
import { Loader } from './styled-components'
import Filters from './Filters'
import { data } from '../utils/mockData'

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
  const [jobs, setJobs] = useState<Array<Job>>([])
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [loading, setLoading] = useState(false)
  const [fulltime, setFulltime] = useState(false)

  const resetSelectedJob = () => {
    setSelectedJob(null)
    setTimeout(function () {
      window.scrollTo(0, scrollPosition)
    }, 1)
  }

  useEffect(() => {
    function loadData() {
      if (!selectedJob && jobs.length < 1) {
        setLoading(true)
        // get('https://jobs.github.com/positions.json')
        //   .then((r) => {
        //     setJobs(r.data)
        //     setLoading(false)
        //   })
        //   .catch((err) => {
        //     console.error(err)
        //     setLoading(false)
        //   })
        setJobs(data)
      }
    }
    loadData()
  }, [jobs, selectedJob])

  const searchData = () => {
    let url: string
    if (fulltime) {
      // if (location) {
      //   if (description) {
      //     url = "https://jobs.github.com/positions.json"
      //   }
      // }
    }
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
          <Filters />
          {jobs.length > 0 ? (
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
          ) : loading ? (
            <Loader>
              <div />
            </Loader>
          ) : null}
        </>
      )}
    </>
  )
}

export default SearchSection
