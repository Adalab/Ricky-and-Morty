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
  useEffect(() => {
    getInfoFromApi().then((data) => setCharacters(data));
  }, []);

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

  const renderDatail = (props) => {
    console.log(props);
    const id = parseInt(props.match.params.id);
    const selectcharacter = characters.find((character) => {
      return character.id === id;
    });
    return <CardDetails character={selectcharacter} />;
  };
  return (
    <>
      <Header />
      <main>
        <Button />
        <Switch>
          <Route path='/character/:id' render={renderDatail} />
          <Route exact path='/'>
            <Filter name={name} handleFilter={handleFilter} />
            <CharacterList characters={filterCharacters} name={name} />
          </Route>
        </Switch>
      </main>
      <Footer />
    </>
  );
};
export default App;
