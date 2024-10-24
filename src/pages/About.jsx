import React from 'react';
import { NavLink } from 'react-router-dom';
import useTitulo from '../hooks/useTitulo';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  const { t } = useTranslation();
  useTitulo(t('about.title'));

  return (
    <>
      <Navbar />
      <div className='about-page'>
        <div className='about__container'>
          <div className='home'>
            <NavLink to='/'>
              <img src={'/home.png'} alt='homeIcon' />
            </NavLink>
          </div>
          <div className='name'>
            <h1>Wilman Conde</h1>
            <p>{t('about.description')}</p>
          </div>
          <div className='history'>
            <h2>{t('about.subtitle')}</h2>
            <p>{t('about.history')}</p>
          </div>
          <div className='clients'>
            <p>{t('about.clients')}</p>
          </div>
          <div className='experience'>
            <p>{t('about.experience')}</p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;
