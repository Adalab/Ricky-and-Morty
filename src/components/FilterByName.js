import '../stylesheets/components/Filter.scss';

function FilterByName(props) {
  const handleFilter = (ev) => {
    props.handleFilter({
      key: 'name',
      value: ev.target.value,
    });
  };

  return (
    <label className='main__form-label' htmlFor='userSearch'>
      Introduce el nombre del personaje que quieras encontrar:
      <input
        className='main__form-input'
        placeholder='Ej. Rick Sanchez'
        onChange={handleFilter}
        type='text'
        value={props.name}
      />
    </label>
  );
}

export default FilterByName;
