import '../stylesheets/components/Filter.scss';
import PropTypes from 'prop-types';

function FilterByName(props) {
  const handleFilter = (ev) => {
    props.handleFilter({
      key: 'name',
      value: ev.target.value,
    });
  };
  const handleCleanClick = () => {
    props.handleFilter({
      key: 'name',
      value: '',
    });
    props.handleFilter({
      key: 'status',
      value: 'all',
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
      <input
        className='main__form-clean'
        type='button'
        name='cleanSearch'
        value='Reset'
        title='Borrar búsqueda'
        onClick={handleCleanClick}
      />
    </label>
  );
}
FilterByName.propTypes = {
  name: PropTypes.string,
  handleFilter: PropTypes.func,
};

export default FilterByName;
