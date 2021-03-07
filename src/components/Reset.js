import '../stylesheets/components/Reset.scss';

const Reset = (props) => {
  const handleOnClick = () => {
    props.resetHandler();
  };

  return (
    <button className='reset' onClick={handleOnClick}>
      Reset
    </button>
  );
};

export default Reset;
