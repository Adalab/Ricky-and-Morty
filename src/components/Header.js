import logo from '../images/logo.png';
import '../stylesheets/components/Header.scss';

function Header() {
  return (
    <header id='header' className='header'>
      <img
        className='header__logo'
        title='Logo Rick y Morty'
        alt='Logo Rick y Morty'
        src={logo}
      />
    </header>
  );
}

export default Header;
