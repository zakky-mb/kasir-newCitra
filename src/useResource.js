import { useEffect, useState } from 'react'
import api from './api/axios'

// Fetches a list resource from the API, falling back to provided mock data
// when the backend is unavailable so pages remain browsable in development.
export function useResource(endpoint, fallback = []) {
  const [rows, setRows] = useState(fallback)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    setLoading(true)
    api
      .get(endpoint)
      .then(({ data }) => {
        if (!active) return
        const list = Array.isArray(data) ? data : data?.data
        if (Array.isArray(list)) setRows(list)
      })
      .catch(() => {
        // Keep fallback data.
      })
      .finally(() => {
        if (active) setLoading(false)
      })
    return () => {
      active = false
    }
  }, [endpoint])

  return { rows, loading }
}
