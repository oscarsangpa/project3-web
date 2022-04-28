import createHttp from './BaseService'

const http = createHttp({ useAccessToken: true })

export const getCurrentUser = () => http.get('/users/me');
export const getUser = (id) => http.get(`/users/${id}`)
