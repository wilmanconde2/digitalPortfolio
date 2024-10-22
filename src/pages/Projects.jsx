import { NavLink } from 'react-router-dom';
import Card from '../components/Card.jsx';
import useTitulo from '../hooks/useTitulo.jsx';

const Projects = () => {
  useTitulo('Contact');

  return (
    <>
      <div className='projects__container'>
        <div className='home'>
          <NavLink to='/'>
            <img src={'/home.png'} alt='homeIcon' />
          </NavLink>
        </div>
        <div className='projects__container__items'>
          <Card
            title='Bootcamp'
            description='This web application is an interactive platform for managing products. It allows users to create, edit, and delete product listings while offering a user-friendly experience. Products can be organized by categories, tracked, and updated in real-time. The interface is responsive and works across various devices, making it a practical solution for businesses or individuals needing to manage inventories or product catalogs efficiently. It simplifies the process of handling and updating product information, ensuring smooth workflows and better organization.'
            link='https://github.com/wilmanconde2/bc-71370-integrador_etapa4_frontendV1.1-Wilman-Conde'
            footer='October 2024'
          />
          <Card
            title='Real time Weather'
            description='This project is a Weather Application built with React, designed to provide users with real-time weather information based on their selected city. It features a clean and interactive user interface with components that enhance usability and functionality.'
            link='https://github.com/wilmanconde2/project-real-time-weather'
            footer='October 2024'
          />
          <Card
            title='City Cordoba School'
            description='Full website under construction'
            link='#'
            footer='October 2024'
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
