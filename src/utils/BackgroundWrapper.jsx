import { useLocation } from 'react-router-dom';

const BackgroundWrapper = ({ children }) => {
  const location = useLocation();

  const getBackgroundImage = () => {
    switch (location.pathname) {
      case '/about':
        return 'url(/goku3dEyes.jpg)';
      case '/contact':
        return 'url(/goku3dEyes.jpg)';
      case '/projects':
        return 'url(/goku3dEyes.jpg)';
      case '/':
      default:
        return 'url(/goku3dEyes.jpg)';
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
