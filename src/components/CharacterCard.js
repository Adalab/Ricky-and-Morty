import '../stylesheets/components/CharacterCard.scss';
import { Link } from 'react-router-dom';
function CharacterCard(props) {
  return (
    <li>
      <Link
        title='Ir a detalle del personaje'
        className='main__list-link'
        to={`/character/${props.character.id}`}
      >
        <article className='main__list-article'>
          <img
            className='main__list-articleImg'
            src={props.character.image}
            alt={`Foto de ${props.character.name}`}
            title={`Foto de ${props.character.name}`}
          />
          <h2 className='main__list-articleName'>{props.character.name}</h2>
          <h3 className='main__list-articleSpecie'>
            Especie:{props.character.specie}
          </h3>
          <h3 className='main__list-articleSpecie'>
            Estado: {props.character.status}
          </h3>
        </article>
      </Link>
    </li>
  );
}

export default CharacterCard;
