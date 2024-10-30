import useTitulo from '../hooks/useTitulo';
import Footer from '../components/Footer.jsx';
import HomeIcon from '../components/HomeIcon.jsx';

const NotFound = () => {
  useTitulo('Page not found');

  return (
    <>
      <HomeIcon />
      <div className='container'>
        <h1>Page doesn't exist!</h1>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
