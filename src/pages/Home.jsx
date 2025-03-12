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
      <div className="parallax">
        <div className="texto">
          <h1>Wilman Conde</h1>
          <h2>Jr Developer</h2>
        </div>
      </div>
      <div className='home__container'>
        <div className='home__container__items container-items1'>
          <div className='item' id='home'>
            <NavLink to='/'>
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
            <a href={'https://github.com/wilmanconde2'} target='_blank' rel='noopener noreferrer'>
              <img
                src={isMobile ? '/githubBlue.png' : '/githubBlue.png'}
                alt='Github icons created by -Artist - Flaticon'
              />
              <label>GitHub</label>
            </a>
          </div>
          <div className='item' id='linkedin'>
            <a
              href={'https://www.linkedin.com/in/wilman-conde/'}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src={isMobile ? '/linkedinBlue.png' : '/linkedinBlue.png'}
                alt='Linkedin icons created by Smashicons - Flaticon'
              />
              <label>LinkedIn</label>
            </a>
          </div>
          <div className='item' id='x'>
            <a href={'https://x.com/WilmanConde1982'} target='_blank' rel='noopener noreferrer'>
              <img
                src={isMobile ? '/xBlue.png' : '/xBlue.png'}
                alt='Tweet icons created by Freepik - Flaticon'
              />
              <label>X</label>
            </a>
          </div>
          <div className='item' id='cv'>
            <a></a>
            <a
              href={
                'https://drive.google.com/file/d/1IxZRqCVIX8r76eflSrBpQ2vm2-nNyJV2/view?usp=sharing'
              }
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src={isMobile ? '/resumeBlue.png' : '/resumeBlue.png'}
                alt='Portfolio icons created by Freepik - Flaticon'
              />
              <label>{t('cv.title')}</label>
            </a>
          </div>
        </div>
      </div>
      <div className="parallax2"></div>
      <Footer />
    </>
  );
};

export default Home;
