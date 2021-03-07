import Header from './Header';
import Filter from './Filter';
import Button from './Button';
import CardDetails from './CardDetails';
import CharacterList from './CharacterList';
import Footer from './Footer';
import getInfoFromApi from '../services/getDataFromApi';
import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState('');
  const [status, setStatus] = useState('all');
  const [sorting, setSorting] = useState(false);
  useEffect(() => {
    getInfoFromApi().then((data) => setCharacters(data));
  }, []);

  const handleFilter = (inputChange) => {
    if (inputChange.key === 'name') {
      setName(inputChange.value);
    } else if (inputChange.key === 'status') {
      setStatus(inputChange.value);
    } else if (inputChange.key === 'sorting') {
      setSorting(true);
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
  if (sorting) {
    filterCharacters.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
    });
  }

  const renderDatail = (props) => {
    const id = parseInt(props.match.params.id);
    const selectcharacter = characters.find((character) => {
      return character.id === id;
    });
    return <CardDetails character={selectcharacter} />;
  };
  const handleBackClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Header />
      <main className='main'>
        <Switch>
          <Route path='/character/:id' render={renderDatail} />
          <Route exact path='/'>
            <Filter name={name} handleFilter={handleFilter} />
            <CharacterList characters={filterCharacters} name={name} />
          </Route>
        </Switch>
        <Button handleBackClick={handleBackClick} name={name} />
      </main>
      <Footer />
    </>
  );
};
export default App;
