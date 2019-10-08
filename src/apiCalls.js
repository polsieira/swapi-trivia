export const getMovies = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then(movies => movies.results)
    .catch(error => console.log('error', error))
}

export const getCharacters = (characters) => {
  const characterData = characters.map(character => {
    return getCharacter(character)
      .then(character => character)
  })

  return Promise.all(characterData);
}

const getCharacter = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log('error', error))
}