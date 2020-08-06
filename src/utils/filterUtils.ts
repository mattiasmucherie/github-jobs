interface BuildUrlPara {
  amsterdam: boolean
  london: boolean
  newYork: boolean
  berlin: boolean
  fullTime: boolean
  userLocationSearch: string
}
export const buildUrl = ({
  amsterdam,
  london,
  newYork,
  berlin,
  fullTime,
  userLocationSearch,
}: BuildUrlPara): string => {
  let url: string = ''
  if (amsterdam || london || newYork || berlin || userLocationSearch) {
    url += 'location='
    if (amsterdam) url += 'amsterdam,'
    if (london) url += 'london,'
    if (newYork) url += 'new york,'
    if (berlin) url += 'berlin,'
    if (userLocationSearch) url += userLocationSearch
  }
  if (url.endsWith(',')) url = url.slice(0, -1)
  if (fullTime) {
    url += url.length ? '&full_time=true' : 'full_time=true'
  }
console.log(url)
  return url
}
