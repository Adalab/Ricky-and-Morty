const FilterByStatus = (props) => {
  const handleFilter = (e) => {
    props.handleFilter({
      key: 'status',
      value: e.target.value,
    });
  };
  return (
    <label htmlFor='status'>
      Estado:
      <select
        className='form__input-text'
        name='status'
        id='status'
        onChange={handleFilter}
        value={props.status}
      >
        <option value='all'>All</option>
        <option value='Alive'>Alive</option>
        <option value='Dead'>Dead</option>
        <option value='unknown'>unKnown</option>
      </select>
    </label>
  );
};
export default FilterByStatus;
