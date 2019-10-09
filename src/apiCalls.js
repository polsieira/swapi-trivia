export const getMovies = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then(movies => movies.results)
    .catch(error => console.log('error', error))
}

export const getCharacters = (characters) => {
  const characterData = characters.map(character => {
    return getCharacter(character)
      .then(character => ({
        name: character[0],
        homeworld: character[1],
        population: character[2],
        species: character[3],
        films: character[4],
      }))
  })

  return Promise.all(characterData);
}

const getCharacter = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then(character => {
      const { name } = character;
      const homeworld = getHomeworld(character.homeworld);
      const population = getPopulation(character.homeworld);
      const species = getAllSpecies(character.species);
      const films = getRelatedFilms(character.films);
      return Promise.all([name, homeworld, population, species, films])
    })
    .catch(error => console.log('error', error))
}

const getHomeworld = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then(homeworld => homeworld.name)
}

const getPopulation = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then(homeworld => homeworld.population)
}

const getAllSpecies = (allSpecies) => {
  const speciesData = allSpecies.map(specie => {
    return getSpecies(specie)
      .then(specie => specie)
  })

  return Promise.all(speciesData);
}

const getSpecies = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then(species => species.name)
}

const getRelatedFilms = (films) => {
  const filmsData = films.map(film => {
    return getFilmTitle(film)
      .then(film => film)
  })

  return Promise.all(filmsData)
}

const getFilmTitle = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then(film => film.title)
}