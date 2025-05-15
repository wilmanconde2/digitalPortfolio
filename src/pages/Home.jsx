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
      <div className='parallax'>
        <div className='texto'>
          <h1>Wilman Conde</h1>
          <h2>Jr Developer</h2>
        </div>
      </div>
      <div className='home__container'>
        <div className='home__container__items container-items1'>
          <div className='item' id='home'>
            <NavLink to='/' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img
                src={isMobile ? '/homeBlue.png' : '/homeBlue.png'}
                alt='Home address icons created by alihmirza111 - Flaticon'
              />
              <label>{t('home.title')}</label>
            </NavLink>
          </div>
          <div className='item' id='about'>
            <NavLink to='/about'>
              <img
                src={isMobile ? '/userBlue.png' : '/userBlue.png'}
                alt='User icons created by Freepik - Flaticon'
              />
              <label>{t('about.title')}</label>
            </NavLink>
          </div>
          <div className='item' id='projects'>
            <NavLink to='/projects'>
              <img
                src={isMobile ? '/projectsBlue.png' : '/projectsBlue.png'}
                alt='Project icons created by dDara - Flaticon'
              />
              <label>{t('projects.title')}</label>
            </NavLink>
          </div>
          <div className='item' id='contact'>
            <NavLink to='/contact'>
              <img
                src={isMobile ? '/contactBlue.png' : '/contactBlue.png'}
                alt='Contact icons created by Cuputo - Flaticon'
              />
              <label>{t('contact.title')}</label>
            </NavLink>
          </div>
        </div>
        <div className='home__container__items container-items2'>
          <div className='item' id='github'>
            <a href={t('social.github.link')} target='_blank' rel='noopener noreferrer'>
              <img src={isMobile ? '/githubBlue.png' : '/githubBlue.png'} alt='GitHub icons' />
              <label>{t('social.github.name')}</label>
            </a>
          </div>

          <div className='item' id='linkedin'>
            <a href={t('social.linkedin.link')} target='_blank' rel='noopener noreferrer'>
              <img
                src={isMobile ? '/linkedinBlue.png' : '/linkedinBlue.png'}
                alt='LinkedIn icons'
              />
              <label>{t('social.linkedin.name')}</label>
            </a>
          </div>

          <div className='item' id='x'>
            <a href={t('social.x.link')} target='_blank' rel='noopener noreferrer'>
              <img src={isMobile ? '/xBlue.png' : '/xBlue.png'} alt='X icons' />
              <label>{t('social.x.name')}</label>
            </a>
          </div>

          <div className='item' id='cv'>
            <a href={t('cv.link')} target='_blank' rel='noopener noreferrer'>
              <img
                src={isMobile ? '/resumeBlue.png' : '/resumeBlue.png'}
                alt='Portfolio icons created by Freepik - Flaticon'
              />
              <label>{t('cv.title')}</label>
            </a>
          </div>
        </div>
      </div>
      <div className='parallax2'></div>
      <Footer />
    </>
  );
};

export default Home;
