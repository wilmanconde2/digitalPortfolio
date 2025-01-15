import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useTitulo from '../hooks/useTitulo';
import useIsMobile from '../hooks/useIsMobile';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer.jsx';

const Home = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  useTitulo(t('home.title'));

  return (
    <>
      <Navbar />
      <div className='home__container'>
        <div className='home__container__items container-items1'>
          <div className='item'>
            <NavLink to='/'>
              <img
                src={isMobile ? '/homeBlue.png' : '/homeWhite.png'}
                alt='Home address icons created by alihmirza111 - Flaticon'
              />
              <label>{t('home.title')}</label>
            </NavLink>
          </div>
          <div className='item'>
            <NavLink to='/about'>
              <img
                src={isMobile ? '/userBlue.png' : '/userWhite.png'}
                alt='User icons created by Freepik - Flaticon'
              />
              <label>{t('about.title')}</label>
            </NavLink>
          </div>
          <div className='item'>
            <NavLink to='/projects'>
              <img
                src={isMobile ? '/projectsBlue.png' : '/projectsWhite.png'}
                alt='Project icons created by dDara - Flaticon'
              />
              <label>{t('projects.title')}</label>
            </NavLink>
          </div>
          <div className='item'>
            <NavLink to='/contact'>
              <img
                src={isMobile ? '/contactBlue.png' : '/contactWhite.png'}
                alt='Contact icons created by Cuputo - Flaticon'
              />
              <label>{t('contact.title')}</label>
            </NavLink>
          </div>
        </div>
        <div className='home__container__items container-items2'>
          <div className='item'>
            <a href={'https://github.com/wilmanconde2'} target='_blank' rel='noopener noreferrer'>
              <img
                src={isMobile ? '/githubBlue.png' : '/githubWhite.png'}
                alt='Github icons created by -Artist - Flaticon'
              />
              <label>GitHub</label>
            </a>
          </div>
          <div className='item'>
            <a
              href={'https://www.linkedin.com/in/wilman-conde/?originalSubdomain=co'}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src={isMobile ? '/linkedinBlue.png' : '/linkedinWhite.png'}
                alt='Linkedin icons created by Smashicons - Flaticon'
              />
              <label>LinkedIn</label>
            </a>
          </div>
          <div className='item'>
            <a href={'https://x.com/WilmanConde1982'} target='_blank' rel='noopener noreferrer'>
              <img
                src={isMobile ? '/xBlue.png' : '/xWhite.png'}
                alt='Tweet icons created by Freepik - Flaticon'
              />
              <label>X</label>
            </a>
          </div>
          <div className='item'>
            <a></a>
            <a
              href={
                'https://drive.google.com/file/d/13gQD7yhD3VGbG0TBNWVvJeBGzKoE6szA/view?usp=drive_link'
              }
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src={isMobile ? '/resumeBlue.png' : '/homeWhite.png'}
                alt='Portfolio icons created by Freepik - Flaticon'
              />
              <label>{t('cv.title')}</label>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
