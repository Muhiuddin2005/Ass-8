import { useEffect, useState } from 'react'
import axios from 'axios'

const useApps = () => {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [apps, setApps] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios('../apps.json')
        setApps(response.data)
      } 
      catch (err) {
        setError(err)
      } 
      finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { loading, error, apps }
}

export default useApps
