import '../stylesheets/components/CharacterCard.scss';
import { Link } from 'react-router-dom';
import dead from '../images/dead.png';
import alive from '../images/alive.png';
import human from '../images/human.png';
import alien from '../images/alien.png';
import unknown from '../images/unknown.png';
import PropTypes from 'prop-types';

const CharacterCard = (props) => {
  const species = () => {
    if (props.character.specie === 'Alien') {
      return alien;
    } else if (props.character.specie === 'Human') {
      return human;
    }
  };
  const status = () => {
    if (props.character.status === 'Dead') {
      return dead;
    } else if (props.character.status === 'Alive') {
      return alive;
    } else {
      return unknown;
    }
  };

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
          <div className='icons__box'>
            <h3 className='main__list-articleSpecie'></h3>
            <img
              className='icons__box--icon'
              src={species()}
              alt={`${props.character.species} icon`}
              title={`${props.character.species} icon`}
            />
          </div>
          <div className='icons__box'>
            <h3 className='main__list-articleSpecie'>
              <img
                className='icons__box--icon'
                src={status()}
                alt={`${props.character.status} icon`}
                title={`${props.character.status} icon`}
              />
            </h3>
          </div>
        </article>
      </Link>
    </li>
  );
};
CharacterCard.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  species: PropTypes.string,
};

export default CharacterCard;
