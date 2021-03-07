import '../stylesheets/components/Filter.scss';

function FilterByOrder(props) {
  const handleFilter = (ev) => {
    props.handleFilter({
      key: 'checked',
      value: ev.target.checked,
    });
  };

  return (
    <label>
      <input
        className='main__form-cbox'
        type='checkbox'
        name='Order Selection'
        title='Order Selection'
        onChange={handleFilter}
      />
      Ordenar alfabéticamente
    </label>
  );
}

export default FilterByOrder;
