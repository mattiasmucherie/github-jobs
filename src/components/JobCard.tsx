import React, { MouseEventHandler } from 'react'
import { Job } from '../types'
import styled from 'styled-components'
import { JobImage, JobNotFoundImage } from './styled-components'
import { daysAgo } from '../utils/cardUtils'

interface JobCardProp {
  job: Job
  onClick: MouseEventHandler<HTMLElement>
}
const Card = styled.div`
  background: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  margin: 16px 0;
  padding: 12px;
  font-family: 'Roboto', sans-serif;
  display: flex;
  color: #334680;
  cursor: pointer;
`
const JobInfo = styled.div`
  padding: 0 16px;
  width: 100%;
`
const JobCompany = styled.div`
  font-weight: bold;
  font-size: 12px;
  padding-bottom: 8px;
`
const JobTitle = styled.div`
  font-weight: normal;
  font-size: 16px;
  margin-bottom: 14px;
`
const JobType = styled.div`
  padding: 6px 8px;
  border: 1px solid #334680;
  border-radius: 4px;
  box-sizing: border-box;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  width: max-content;
  min-width: max-content;
  height: max-content;
  margin: 0 26px 0 0;
  @media only screen and (min-width: 771px) {
    margin: 0 26px 0 0;
  }
`
const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  align-items: flex-start;
  gap: 12px;
`
const LocationAndDate = styled.div`
  color: #b9bdcf;
  font-size: 12px;
  display: flex;
  align-items: center;
  padding-top: 6px;
`
const Icon = styled.i<{ left?: boolean }>`
  font-size: 18px;
  padding-left: ${(props) => (props.left ? '28.5px' : 0)};
  padding-right: 7.5px;
`
const Location = styled.span``
const Date = styled.span`
  min-width: 65px;
`
const JobCard = (props: JobCardProp) => {
  const { job, onClick } = props
  const renderImage = (url: string | null) => {
    if (url) {
      return <JobImage url={url} />
    }
    return <JobNotFoundImage />
  }
  return (
    <Card onClick={onClick}>
      {renderImage(job.company_logo)}
      <JobInfo>
        <JobCompany>{job.company}</JobCompany>
        <JobTitle>{job.title}</JobTitle>
        <FlexContainer>
          <JobType>{job.type}</JobType>
          <LocationAndDate>
            <Icon className="material-icons">public</Icon>
            <Location>{job.location}</Location>
            <Icon left className="material-icons">
              access_time
            </Icon>
            <Date>{daysAgo(job.created_at)}</Date>
          </LocationAndDate>
        </FlexContainer>
      </JobInfo>
    </Card>
  )
}

export default JobCard
