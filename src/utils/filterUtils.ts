interface BuildUrlPara {
  fullTime: boolean
  userLocationSearch: string
}
export const buildUrl = ({ fullTime, userLocationSearch }: BuildUrlPara): string => {
  let url: string = ''
  if (userLocationSearch) {
    url = `location=${userLocationSearch}`
  }
  if (fullTime) {
    url += url.length ? '&full_time=true' : 'full_time=true'
  }
  return url
}
