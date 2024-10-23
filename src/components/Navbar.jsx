import { useTranslation } from 'react-i18next';
import '../utils/i18n.jsx';

export const Navbar = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
    <div className='button-container'>

      <div className='english-button'>
        <a onClick={() => changeLanguage('en')}>
          <img src='/public/english.png' alt='English icons created by afif fudin - Flaticon' />
        </a>
      </div>
      <div className='spanish-button'>
        <a onClick={() => changeLanguage('es')}>
          <img src='/public/spanish.png' alt='Spanish icons created by Freepik - Flaticon' />
        </a>
      </div>
    </div>
    </>
  );
};

export default Navbar;
