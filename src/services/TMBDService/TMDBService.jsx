const tokenMDB = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDJjNGE5OWEyYjU2YzI1N2FhMzI4OTQ1MmI1NzNiYyIsInN1YiI6IjYyNGYzNjE0NjhiNzY2MTBkMzVkNzIwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R02WEIYrsizTU8a8aJWQB6bDd3V1x_z_aDMbUHeWDRo`;
const BASE_API_MDB = "https://api.themoviedb.org/3";

export const BASE_IMG = "https://image.tmdb.org/t/p/w500"



export const httpGet = (path) => {
   return fetch( BASE_API_MDB + path, {
      headers: {
        Authorization: 
        `Bearer ${tokenMDB}`,
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((result) => result.json())
}