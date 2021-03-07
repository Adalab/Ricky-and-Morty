import FilterByName from './FilterByName';
import FilterByStatus from './FilterByStatus';
import FilterByOrder from './FilterByOrder';

const Filter = (props) => {
  return (
    <form className='main__form'>
      <FilterByName name={props.name} handleFilter={props.handleFilter} />
      <FilterByStatus handleFilter={props.handleFilter} />
      <FilterByOrder handleFilter={props.handleFilter} />
    </form>
  );
};

export default Filter;
