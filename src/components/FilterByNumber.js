const FilterByNumber = (props) => {
  const handleFilter = (ev) => {
    props.handleFilter({
      key: 'number',
      value: ev.target.value,
    });
  };

  return (
    <label htmlFor='userSearch'>
      Número de episodio
      <input
        placeholder='0'
        onChange={handleFilter}
        type='number'
        value={props.number}
      />
    </label>
  );
};

export default FilterByNumber;
