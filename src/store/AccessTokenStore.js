export const ACCESS_TOKEN_KEY = 'access_token';


export const setAccessToken = (token) => {
  localStorage.setItem(ACCESS_TOKEN_KEY, token)
}

export const getAccessToken = () => {
  return localStorage.getItem(ACCESS_TOKEN_KEY)
}

export const logout = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY)
}