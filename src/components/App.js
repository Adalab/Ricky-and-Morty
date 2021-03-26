import Header from './Header';
import Filter from './Filter';
import Button from './Button';
import CardDetails from './CardDetails';
import CharacterList from './CharacterList';
import Footer from './Footer';
import getInfoFromApi from '../services/getDataFromApi';
import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { number } from 'prop-types';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState('');
  const [status, setStatus] = useState('all');
  const [sorting, setSorting] = useState(false);
  const [number, setNumber] = useState('');
  useEffect(() => {
    getInfoFromApi().then((data) => setCharacters(data));
  }, []);

  const handleFilter = (inputChange) => {
    if (inputChange.key === 'name') {
      setName(inputChange.value);
    } else if (inputChange.key === 'status') {
      setStatus(inputChange.value);
    } else if (inputChange.key === 'checked') {
      console.log(inputChange);
      if (inputChange.value === true) {
        setSorting(false);
      } else {
        setSorting(true);
      }
    } else if (inputChange.key === 'number') {
      setNumber(inputChange.value);
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
    })
    .filter((character) => {
      if (number === '') {
        return true;
      } else {
        return character.episodes === parseInt(number);
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
  const resetHandler = () => {
    setName('');
    setStatus('all');
    setNumber('');
  };
  return (
    <>
      <Header />
      <main className='main'>
        <Switch>
          <Route path='/character/:id' render={renderDatail} />
          <Route exact path='/'>
            <Filter name={name} handleFilter={handleFilter} number={number} />
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
