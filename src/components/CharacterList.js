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
  return (
    <section>
      <ul className='main__list'>{listElement}</ul>
    </section>
  );
};

export default CharacterList;
