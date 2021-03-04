import '../stylesheets/components/Card.scss';

function CharacterCard(props) {
  return (
    <article>
      <img
        src={props.character.image}
        alt={`Foto de ${props.character.name}`}
        title={`Foto de ${props.character.name}`}
      />
      <h2>Nombre:{props.character.name}</h2>
      <h3>Especie:{props.character.specie}</h3>
      <h3>Estado: {props.character.status}</h3>
    </article>
  );
}

export default CharacterCard;
