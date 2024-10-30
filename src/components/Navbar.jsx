import { useTranslation } from 'react-i18next';
import useIsMobile from '../hooks/useIsMobile';
import '../utils/i18n.jsx';

export const Navbar = () => {
  const { i18n } = useTranslation();
  const isMobile = useIsMobile();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div className='button-container'>
        <div className='english-button'>
          <a onClick={() => changeLanguage('en')}>
            <img
              className='english'
              src={isMobile ? '/englishBlue.png' : '/englishWhite.png'}
              alt='English icons created by afif fudin - Flaticon'
            />
          </a>
        </div>
        <div className='spanish-button'>
          <a onClick={() => changeLanguage('es')}>
            <img
              className='spanish'
              src={isMobile ? '/spanishBlue.png' : '/spanishWhite.png'}
              alt='Spanish icons created by Freepik - Flaticon'
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
