import { useTranslation } from 'react-i18next';
import useIsMobile from '../hooks/useIsMobile';
import '../utils/i18n.jsx';

export const Navbar = () => {
  const { i18n } = useTranslation();
  const isMobile = useIsMobile();

  // Función para alternar entre inglés y español
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className='button-container'>
      <a onClick={toggleLanguage}>
        <img
          className='language-icon'
          src={i18n.language === 'en' ? '/spanishWhite.png' : '/englishWhite.png'}
          alt='Toggle language icon'
        />
      </a>
    </div>
  );
};

export default Navbar;
