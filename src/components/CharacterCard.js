import '../stylesheets/components/Card.scss';
import { Link } from 'react-router-dom';
function CharacterCard(props) {
  return (
    <li>
      <Link to={`/character/${props.character.id}`}>
        <img
          src={props.character.image}
          alt={`Foto de ${props.character.name}`}
          title={`Foto de ${props.character.name}`}
        />
        <h2>Nombre:{props.character.name}</h2>
        <h3>Especie:{props.character.specie}</h3>
        <h3>Estado: {props.character.status}</h3>
      </Link>
    </li>
  );
}

export default CharacterCard;
