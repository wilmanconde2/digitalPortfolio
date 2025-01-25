import { useLocation } from 'react-router-dom';

const BackgroundWrapper = ({ children }) => {
  const location = useLocation();

  const getBackgroundImage = () => {
    switch (location.pathname) {
      case '/about':
        return 'url(/confetti.svg)';
      case '/contact':
        return 'url(/confetti.svg)';
      case '/projects':
        return 'url(/confetti.svg)';
      case '/':
      default:
        return 'url(/confetti.svg)';
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
