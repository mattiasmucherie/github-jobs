import React from 'react'
import { Job } from '../types'
import styled from 'styled-components'
import { daysAgo } from '../utils/cardUtils'
import { JobImage, JobNotFoundImage } from './styled-components'

const JobViewContainer = styled.div`
  color: #334680;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-size: 14px;

  @media only screen and (min-width: 771px) {
    display: grid;
    grid-template-columns: minmax(231px, 20%) 1fr;
    column-gap: 77px;
  }
`
const BackButton = styled.div`
  font-family: Poppins, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #1e86ff;
  margin-bottom: 36px;
  display: flex;
  align-items: center;
  cursor: pointer;
`
const Apply = styled.div`
  margin-bottom: 36px;
  font-family: Poppins, sans-serif;
  font-weight: 500;
  line-height: 21px;
`
const ApplyTitle = styled.h3`
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  color: #b9bdcf;
  text-transform: uppercase;
`
const Title = styled.h1`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  margin: 0 17px 10px 0;
  @media only screen and (min-width: 771px) {
    margin: 0 17px 0px 0;
  }
`
const Type = styled.div`
  padding: 6px 8px;
  border: 1px solid #334680;
  border-radius: 4px;
  width: max-content;
  font-weight: bold;
  font-size: 12px;
  max-height: 15px;
`
const TitleAndType = styled.div`
  @media only screen and (min-width: 771px) {
    display: flex;
    flex-wrap: wrap;
  }
`
const LocationOrDate = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #b7bcce;
  margin: 10px 0 37px 0;
  display: flex;
  align-items: center;
`
const Icon = styled.i<{ flip?: boolean }>`
  font-size: 18px;
  margin-right: 8px;
  transform: ${(props) => (props.flip ? 'rotate(180deg)' : 0)};
`
const Company = styled.div`
  display: flex;
  align-items: flex-start;
`
const CompanyNameAndLocation = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 12px;
`
const CompanyName = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
`
interface JobViewProps {
  job: Job
  onClick: any
}
const JobView = (props: JobViewProps) => {
  const { job, onClick } = props
  return (
    <JobViewContainer>
      <div>
        <BackButton onClick={onClick}>
          <Icon flip className="material-icons">
            trending_flat
          </Icon>{' '}
          Back to Search
        </BackButton>
        <Apply>
          <ApplyTitle>How to apply</ApplyTitle>
          <div dangerouslySetInnerHTML={{ __html: job.how_to_apply }} />
        </Apply>
      </div>
      <div>
        <TitleAndType>
          <Title>{job.title}</Title>
          <Type>{job.type}</Type>
        </TitleAndType>
        <LocationOrDate>
          <Icon className="material-icons">access_time</Icon> {daysAgo(job.created_at)}
        </LocationOrDate>
        <Company>
          {job.company_logo ? <JobImage url={job.company_logo} small /> : <JobNotFoundImage small />}
          <CompanyNameAndLocation>
            <CompanyName>{job.company}</CompanyName>
            <LocationOrDate>
              <Icon className="material-icons">public</Icon> {job.location}
            </LocationOrDate>
          </CompanyNameAndLocation>
        </Company>
        <div dangerouslySetInnerHTML={{ __html: job.description }} />
      </div>
    </JobViewContainer>
  )
}

export default JobView
