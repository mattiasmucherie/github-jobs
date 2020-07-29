import axios, { AxiosResponse } from 'axios'

export const get = async (url: string): Promise<AxiosResponse<any>> => {
  return axios.get(`https://cors-anywhere.herokuapp.com/${url}`)
}
