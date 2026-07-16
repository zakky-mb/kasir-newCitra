// Lightweight auth helpers backed by localStorage.

export const getToken = () => localStorage.getItem('token')

export const getUser = () => {
  try {
    const raw = localStorage.getItem('user')
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export const setSession = (token, user) => {
  if (token) localStorage.setItem('token', token)
  if (user) localStorage.setItem('user', JSON.stringify(user))
}

export const clearSession = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
}

export const isAuthenticated = () => Boolean(getToken())
