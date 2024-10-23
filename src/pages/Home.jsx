import React from 'react';
import { NavLink } from 'react-router-dom';
import useTitulo from '../hooks/useTitulo';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';

const Home = () => {
  const { t } = useTranslation();
  useTitulo(t('home.title'));

  return (
    <>
      <Navbar />
      <div className='home__container'>
        <div className='home__container__items container-items1'>
          <div className='item'>
            <NavLink to='/'>
              <img src={'../home.png'} alt='Home address icons created by alihmirza111 - Flaticon' />
            </NavLink>
          </div>
          <div className='item'>
            <NavLink to='/about'>
              <img src={'../user.png'} alt='User icons created by Freepik - Flaticon' />
            </NavLink>
          </div>
          <div className='item'>
            <NavLink to='/projects'>
              <img src={'../projects.png'} alt='Project icons created by dDara - Flaticon' />
            </NavLink>
          </div>
          <div className='item'>
            <NavLink to='/contact'>
              <img src={'../contact.png'} alt='Contact icons created by Cuputo - Flaticon' />
            </NavLink>
          </div>
        </div>
        <div className='home__container__items container-items2'>
          <div className='item'>
            <a href={'https://github.com/wilmanconde2'} target='_blank' rel='noopener noreferrer'>
              <img src={'../github.png'} alt='Github icons created by -Artist - Flaticon' />
            </a>
          </div>
          <div className='item'>
            <a
              href={'https://www.linkedin.com/in/wilman-conde/?originalSubdomain=co'}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={'../linkedin.png'} alt='Linkedin icons created by Smashicons - Flaticon' />
            </a>
          </div>
          <div className='item'>
            <a href={'https://x.com/WilmanConde1982'} target='_blank' rel='noopener noreferrer'>
              <img src={'../x.png'} alt='Tweet icons created by Freepik - Flaticon' />
            </a>
          </div>
          <div className='item'>
            <a></a>
            <a
              href={'https://drive.google.com/file/d/1-BUjK1gPM33Ggu-xrK2GfTirJR7r07nz/view?usp=sharing'}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={'../resume.png'} alt='Portfolio icons created by Freepik - Flaticon' />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
