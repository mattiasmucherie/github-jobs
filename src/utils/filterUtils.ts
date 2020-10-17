interface BuildUrlPara {
  fullTime: boolean
  userLocationSearch: string
}
export const buildUrl = ({ fullTime, userLocationSearch }: BuildUrlPara): string => {
  let url: string = ''
  if (userLocationSearch) {
    return `location=${userLocationSearch}`
  }
  if (url.endsWith(',')) url = url.slice(0, -1)
  if (fullTime) {
    url += url.length ? '&full_time=true' : 'full_time=true'
  }
  return url
}
export interface FilterCities {
  city: string
  checked: boolean
  index: number
}
