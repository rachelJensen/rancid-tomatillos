import { formatMovieDetails } from "./Utils"
const url = "https://rancid-tomatillos.herokuapp.com/api/v2/movies/"

export const fetchData = (endpoint) => {
  let formatEndpoint = endpoint ? endpoint : ''

  return fetch(`${url}${formatEndpoint}`)
  .then(res => {
    if(res.ok) {
      return res.json()
    } else {
      return Promise.reject(`error ${res.status}`)
    }
  })
}
