export const getMovies = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then(data => data.results)
    .catch(error => console.log('error', error))
}