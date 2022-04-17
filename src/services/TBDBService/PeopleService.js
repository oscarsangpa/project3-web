import http from './TMBDService';

export const apiKey = '?api_key=e02c4a99a2b56c257aa3289452b573bc';

export const  getSearch = () => http.get(`/search/multi/${apiKey}`)

// export const getPerson = () => http.get(`/person/latest${apiKey}`)