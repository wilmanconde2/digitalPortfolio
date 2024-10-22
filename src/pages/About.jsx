import React from 'react';
import { NavLink } from 'react-router-dom';
import useTitulo from '../hooks/useTitulo';

const About = () => {
  useTitulo('About');

  return (
    <>
      <div className='about-page'>
        <div className='about__container'>
          <div className='home'>
            <NavLink to='/'>
              <img src={'/home.png'} alt='homeIcon' />
            </NavLink>
          </div>
          <div className='name'>
            <h1>Wilman Conde</h1>
            <p>Meet the warrior behind this portfolio</p>
          </div>
          <div className='history'>
            <h2>Guardian of Code</h2>
            <p>
              My journey in web development is fueled by the raw power of the tools and languages I master, with
              JavaScript as the energy I harness in every challenge. I push frameworks like React.js and Next.js to
              their peak, building powerful, resilient sites that serve as strongholds for users in the digital world.
              The principles of the Jamstack help me create fast, secure, and dynamic experiences, while my design
              instincts ensure that each project is a balanced fusion of functionality and craftsmanship. Join me as I
              continue to face new challenges, evolving with each one, shaping the future of the web like a true
              warrior.
            </p>
          </div>
          <div className='clients'>
            <p>1 Client</p>
          </div>
          <div className='experience'>
            <p>1 Year Experience</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
