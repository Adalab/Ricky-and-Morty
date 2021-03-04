const getInfoFromApi = () => {
  return fetch(
    'https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json'
  )
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((eCharacter) => {
        return {
          id: eCharacter.id,
          name: eCharacter.name,
          status: eCharacter.status,
          specie: eCharacter.species,
          origin: eCharacter.origin.name,
          image: eCharacter.image,
          episodes: eCharacter.episode.length,
        };
      });
    });
};
export default getInfoFromApi;
