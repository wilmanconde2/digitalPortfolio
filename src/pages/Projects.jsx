import { NavLink } from 'react-router-dom';
import Card from '../components/Card.jsx';
import useTitulo from '../hooks/useTitulo.jsx';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const Projects = () => {
  const { t } = useTranslation();
  useTitulo(t('projects.title'));

  return (
    <>
      <Navbar />
      <div className='projects__container'>
        <div className='home'>
          <NavLink to='/'>
            <img src={'/home.png'} alt='homeIcon' />
          </NavLink>
        </div>
        <div className='projects__container__items'>
          <Card
            title='projects.bootcampTitle'
            description='projects.bootcampDescription'
            link='https://github.com/wilmanconde2/bc-71370-integrador_etapa4_frontendV1.1-Wilman-Conde'
            link2='https://bc-71370-integrador-etapa4-frontendv2.netlify.app/'
            footer='October 2024'
          />
          <Card
            title='projects.weatherTitle'
            description='projects.weatherDescription'
            link='https://github.com/wilmanconde2/weather-app'
            link2=''
            footer='October 2024'
          />
          <Card
            title='projects.portfolioTitle'
            description='projects.portfolioDescription'
            link='https://github.com/wilmanconde2/digitalPortfolio'
            link2='https://w34th3r-app.netlify.app/'
            footer='October 2024'
          />
          <Card
            title='projects.cordobaTitle'
            description='projects.cordobaDescription'
            link='#'
            footer='October 2024'
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
