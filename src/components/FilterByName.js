import '../stylesheets/components/Filter.scss';

function FilterByName(props) {
  const handleFilter = (ev) => {
    props.handleFilter({
      key: 'name',
      value: ev.target.value,
    });
  };

  return (
    <label>
      <input
        // className='add class'
        placeholder='Ej. Rick Sanchez'
        onChange={handleFilter}
        type='text'
        value={props.name}
      />
    </label>
  );
}

export default FilterByName;
