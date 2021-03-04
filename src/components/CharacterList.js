import '../stylesheets/components/List.scss';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  const listElement = props.characters.map((character) => {
    return (
      <li key={character.id}>
        <CharacterCard character={character} />
      </li>
    );
  });
  return (
    <section>
      <ul>{listElement}</ul>
    </section>
  );
};

export default CharacterList;
