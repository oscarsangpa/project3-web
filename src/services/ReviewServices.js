import createHttp from './BaseService'

const http = createHttp(true)

export const createReview = (data) => http.post('/review/new', data)

export const getReviews = (id) => http.get(`/review/${id}`)

export const getAllReviews = (id) => http.get(`/reviews?itemId=${id}`)

// export const updatePost = (id, data) => http.patch(`/review/${id}`, data)

export const deleteReview = (id) => http.delete(`/review/${id}`)