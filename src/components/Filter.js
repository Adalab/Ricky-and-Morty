import FilterByName from './FilterByName';
import FilterByStatus from './FilterByStatus';

const Filter = (props) => {
  return (
    <form className='main__form'>
      <FilterByName handleFilter={props.handleFilter} />
      <FilterByStatus handleFilter={props.handleFilter} />
    </form>
  );
};

export default Filter;
