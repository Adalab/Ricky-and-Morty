import Header from './Header';
import Filter from './Filter';
import Button from './Button';
import CardDetails from './CardDetails';
import CharacterList from './CharacterList';
import Footer from './Footer';
import getInfoFromApi from '../services/getDataFromApi';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState('');
  const [status, setStatus] = useState('all');
  useEffect(() => {
    getInfoFromApi().then((data) => setCharacters(data));
  }, []);

  //Escuchar eventos del input (Componente Filter)
  const handleFilter = (inputChange) => {
    if (inputChange.key === 'name') {
      setName(inputChange.value);
    } else if (inputChange.key === 'status') {
      setStatus(inputChange.value);
    }
  };
  const filterCharacters = characters
    .filter((character) => {
      return character.name.toUpperCase().includes(name.toUpperCase());
    })
    .filter((character) => {
      if (status === 'all') {
        return true;
      } else {
        return character.status === status;
      }
    });
  console.log(filterCharacters);
  return (
    <>
      <Header />
      <main>
        <Filter name={name} handleFilter={handleFilter} />
        <CharacterList
          characters={filterCharacters}
          // characters={characters}
          name={name}
        />
        <Button />
        <CardDetails />
      </main>
      <Footer />
    </>
  );
};
export default App;
