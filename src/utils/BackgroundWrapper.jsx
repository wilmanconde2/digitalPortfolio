import { useLocation } from 'react-router-dom';

const BackgroundWrapper = ({ children }) => {
  const location = useLocation();

  const getBackgroundImage = () => {
    switch (location.pathname) {
      case '/about':
        return 'url(/endless-constellation.svg)';
      case '/contact':
        return 'url(/endless-constellation.svg)';
      case '/projects':
        return 'url(/endless-constellation.svg)';
      case '/':
      default:
        return 'url(/endless-constellation.svg)';
    }
  };

  return (
    <div
      style={{
        backgroundImage: getBackgroundImage(),
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundWrapper;
