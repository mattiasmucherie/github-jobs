interface BuildUrlPara {
  cities: FilterCities[]
  fullTime: boolean
  userLocationSearch: string
}
export const buildUrl = ({ cities, fullTime, userLocationSearch }: BuildUrlPara): string => {
  let url: string = ''
  if (cities || userLocationSearch) {
    url += 'location='
    if (cities[0].checked) url += 'amsterdam,'
    if (cities[1].checked) url += 'london,'
    if (cities[2].checked) url += 'new york,'
    if (cities[3].checked) url += 'berlin,'
    if (userLocationSearch) url += userLocationSearch
  }
  if (url.endsWith(',')) url = url.slice(0, -1)
  if (fullTime) {
    url += url.length ? '&full_time=true' : 'full_time=true'
  }
  console.log(url)
  return url
}
export interface FilterCities {
  city: string
  checked: boolean
  index: number
}
