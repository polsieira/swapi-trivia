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
    .then(character => {
      const { name } = character;
      getHomeworld(character.homeworld)
        .then(response => console.log(response))
      getAllSpecies(character.species)
      getRelatedFilms(character.films)
    })
    .catch(error => console.log('error', error))
}

const getHomeworld = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then(homeworld => ({homeworld: homeworld.name, population: homeworld.population}))
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
    .then(species => ({species: species.name}))
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
    .then(film => console.log(({film: film.title})))
}