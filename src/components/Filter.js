import FilterByName from './FilterByName';
import FilterByStatus from './FilterByStatus';
import FilterByOrder from './FilterByOrder';
import Reset from './Reset';
import FilterByNumber from './FilterByNumber';

const Filter = (props) => {
  return (
    <form className='main__form'>
      <FilterByName name={props.name} handleFilter={props.handleFilter} />
      <FilterByStatus handleFilter={props.handleFilter} />
      <FilterByOrder handleFilter={props.handleFilter} />
      <Reset resetHandler={props.resetHandler} />
      <FilterByNumber handleFilter={props.handleFilter} number={props.number} />
    </form>
  );
};

export default Filter;
