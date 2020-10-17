import { useState, useEffect } from 'react'
import { Job } from '../types'
import { get } from './http'

const useInitRequest = (initUrl: string) => {
  const [data, setData] = useState<Job[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<any>({})

  useEffect(() => {
    let ignore = false
    const fetchProduct = async () => {
      try {
        setLoading(true)
        const response = await get(initUrl)
        if (!ignore) setData(response.data)
      } catch (err) {
        setError(err)
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
    return () => {
      ignore = true
    }
  }, [initUrl])

  return { jobs: data, loading, error }
}

export default useInitRequest
