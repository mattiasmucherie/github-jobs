import axios, { AxiosResponse } from 'axios'
import { Job } from '../types'

export const get = async (url: string): Promise<AxiosResponse<Job[]>> => {
  return axios.get(`https://cors-anywhere.herokuapp.com/${url}`)
}
