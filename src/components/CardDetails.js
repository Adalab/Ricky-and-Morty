import '../stylesheets/components/CardDetail.scss';
import { Link } from 'react-router-dom';

const CardDetails = (props) => {
  console.log(props.character);
  if (props.character === undefined) {
    return (
      <section>
        <h2>Usuario no encontrado</h2>
      </section>
    );
  } else {
    return (
      <section>
        <img
          className='card__img'
          src={props.character.image}
          alt={`Foto de ${props.character.name}`}
        />
        <ul>
          <li>Nombre:{props.character.name} </li>
          <li>Especie: {props.character.species}</li>
          <li>Planeta de origen: {props.character.origin.name}</li>
          <li>Episodios: {props.character.episodes}</li>
          <li>Estado:{props.character.status}</li>
        </ul>
      </section>
    );
  }
};

export default CardDetails;
