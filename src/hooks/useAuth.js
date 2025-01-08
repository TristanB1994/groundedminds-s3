import { useState, useEffect } from 'react'

export const useAuth = () => {
  const [token, setToken] = useState(null)

  useEffect(() => {
    const jwt = localStorage.getItem('jwt')
    if (jwt) setToken(jwt)
  }, [])

  const logout = () => {
    localStorage.removeItem('jwt')
    setToken(null)
  }

  return { token, logout }
}

