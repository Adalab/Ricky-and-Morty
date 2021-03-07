import '../stylesheets/components/CardDetails.scss';
import { Link } from 'react-router-dom';

const CardDetails = (props) => {
  if (props.character === undefined) {
    console.log(props);
    return (
      <section>
        <h2>Usuario no encontrado</h2>
      </section>
    );
  } else {
    return (
      <article className='main__detail'>
        <Link className='main__detail-link' title='Volver a resultados' to='/'>
          Volver
        </Link>
        <img
          className='main__detail-img'
          src={props.character.image}
          alt={`Foto de ${props.character.name}`}
        />
        <h2 className='main__detail-name'>{props.character.name}</h2>
        <ul className='main__detail-list'>
          <li className='main__detail-listItem'>
            <h2>Especie: {props.character.specie}</h2>{' '}
            <h2>Planeta de origen: {props.character.origin}</h2>{' '}
            <h2>Episodios: {props.character.episodes}</h2>{' '}
            <h2>Estado:{props.character.status}</h2>
          </li>
        </ul>
      </article>
    );
  }
};

export default CardDetails;
