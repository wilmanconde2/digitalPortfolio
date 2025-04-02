import { useTranslation } from 'react-i18next';
import Card from '../components/Card.jsx';
import useTitulo from '../hooks/useTitulo.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import HomeIcon from '../components/HomeIcon.jsx';

const Projects = () => {
  const { t } = useTranslation();
  useTitulo(t('projects.title'));

  return (
    <>
      <Navbar />
      <div className='projects__container'>
        <HomeIcon />
        <div className='projects__container__items'>
          <Card
            title='projects.bootcampTitle'
            description='projects.bootcampDescription'
            link='https://github.com/wilmanconde2/bc-71370-integrador_etapa4_frontendV1.1-Wilman-Conde'
            link2='https://bc-71370-integrador-etapa4-frontendv2.netlify.app/'
            footer='projects.bootcampFooter'
          />
          <Card
            title='projects.weatherTitle'
            description='projects.weatherDescription'
            link='https://github.com/wilmanconde2/weather-app'
            link2='https://w34th3r-app.netlify.app/'
            footer='projects.weatherFooter'
          />
          <Card
            title='projects.portfolioTitle'
            description='projects.portfolioDescription'
            link='https://github.com/wilmanconde2/digitalPortfolio'
            link2='https://digital-portfolio-wc.netlify.app/'
            footer='projects.portfolioFooter'
          />
          <Card
            title='projects.palindromeTitle'
            description='projects.palindromeDescription'
            link='https://github.com/wilmanconde2/palindromes'
            link2='https://palindromes-app.netlify.app/'
            footer='projects.palindromeFooter'
          />
          <Card
            title='projects.toDoListTitle'
            description='projects.toDoListDescription'
            link='https://github.com/wilmanconde2/ToDoList'
            link2='https://todolist-app-wc.netlify.app/'
            footer='projects.toDoListFooter'
          />
          <Card
            title='projects.cordobaTitle'
            description='projects.cordobaDescription'
            link='https://github.com/wilmanconde2/colegioCiudadCordoba-front'
            link2='https://colegioccc.netlify.app/'
            footer='projects.cordobaFooter'
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
