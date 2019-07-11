import config from '../config'

const ResultsApiService = {
  getResults(query) {
    return fetch(`${config.API_ENDPOINT}/${query}`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
        )
  }
  
}

export default ResultsApiService