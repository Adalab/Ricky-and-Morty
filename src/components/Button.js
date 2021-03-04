import '../stylesheets/components/Button.scss';

const Button = (props) => {
  const handleBackClick = () => {
    props.handleBackClick();
  };

  return (
    <button onClick={handleBackClick} className='main__backUpwards'>
      Inicio de la página
    </button>
  );
};

export default Button;
