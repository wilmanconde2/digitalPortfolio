import useTitulo from '../hooks/useTitulo';
import Footer from '../components/Footer.jsx';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  useTitulo('Page not found');

  return (
    <>
      <div className='home'>
        <NavLink to='/'>
          <img src={'/home.png'} alt='homeIcon' />
        </NavLink>
      </div>
      <div className='container'>
        <h1>Page doesn't exist!</h1>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
