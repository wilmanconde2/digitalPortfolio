import { useLocation } from 'react-router-dom';

const BackgroundWrapper = ({ children }) => {
  const location = useLocation();

  const getBackgroundImage = () => {
    switch (location.pathname) {
      case '/about':
        return 'url(/blueBlackBackground.svg)';
      case '/contact':
        return 'url(/blueBlackBackground.svg)';
      case '/projects':
        return 'url(/blueBlackBackground.svg)';
      case '/':
      default:
        return 'url(/blueBlackBackground.svg)';
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
