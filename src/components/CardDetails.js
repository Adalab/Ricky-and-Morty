import '../stylesheets/components/CardDetail.scss';

const CardDetails = (props) => {
  if (props.character === undefined) {
    return (
      <section>
        <h2>Usuario no encontrado</h2>
      </section>
    );
  } else {
    return (
      <section>
        <img className='card__img' src='' alt='' />
        <ul>
          <li>Nombre:{props.user.name} </li>
          <li>Especie: {props.user.species}</li>
          <li>Planeta de origen: {props.user.origin.name}</li>
          <li>Episodios: {props.user.episode.length}</li>
          <li>Estado:{props.user.status}</li>
        </ul>
      </section>
    );
  }
};

export default CardDetails;
