import '../stylesheets/components/CharacterList.scss';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  const listElement = props.characters.map((character) => {
    return (
      <ul className='main__list-item' key={character.id}>
        <CharacterCard character={character} />
      </ul>
    );
  });
  if (listElement.length !== 0) {
    return <ul className='main__list'>{listElement}</ul>;
  } else if (props.character === undefined) {
    return (
      <section>
        <h2 className='main__errorMessage'>Usuario no encontrado</h2>
      </section>
    );
  }
};

export default CharacterList;
