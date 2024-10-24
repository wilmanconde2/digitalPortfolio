import useTitulo from '../hooks/useTitulo';
import Footer from '../components/Footer';

const NotFound = () => {
  useTitulo('Page not found');

  return (
    <>
      <div>NotFound</div>
      <Footer />
    </>
  );
};

export default NotFound;
