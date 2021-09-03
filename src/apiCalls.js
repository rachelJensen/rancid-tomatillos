const url = "https://rancid-tomatillos.herokuapp.com/api/v2/movies/"

export const fetchData = (endpoint) => {
  let formatEndpoint = endpoint ? endpoint : ''

  return fetch(`${url}${formatEndpoint}`)
  .then(res => {
    if(res.ok) {
      return res.json()
    } else if (res.status >= 500){
      throw new Error('500 error')
    } else {
      throw new Error('400 error')
    }
  })
  .then(data => data)
}
