import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import backgroundImage from '../assets/backgroundImg.png'
import { Job } from '../types'
import { get } from '../utils/http'
import JobCard from './JobCard'
import JobView from './JobView'
import { Loader } from './styled-components'
import Filters from './Filters'

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
  const [filterUrl, setFilterUrl] = useState('')

  const onEnterLocation = async () => {
    setLoading(true)
    await getJobs()
    setLoading(false)
  }
  const handleFilter = (url: string) => {
    setFilterUrl(url)
  }

  const resetSelectedJob = () => {
    setSelectedJob(null)
    setTimeout(function () {
      window.scrollTo(0, scrollPosition)
    }, 1)
  }
  const getJobs = async () => {
    let url = 'https://jobs.github.com/positions.json?description='
    if (filterUrl) url += `&${filterUrl}`
    get(url)
      .then((r) => {
        setJobs(r.data)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
      })
  }

  useEffect(() => {
    if (!selectedJob && jobs.length < 1) {
      setLoading(true)
      get('https://jobs.github.com/positions.json')
        .then((r) => {
          setJobs(r.data)
          setLoading(false)
        })
        .catch((err) => {
          console.error(err)
          setLoading(false)
        })
    }
  }, [jobs, selectedJob])

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
          ) : (
            <div>No Job Found</div>
          )}
        </>
      )}
    </>
  )
}

export default SearchSection
