import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className='home__container'>
        <div className='home__container__items cItems1'>
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
        <div className='home__container__items cItems2'>
          <div className='item'>
            <NavLink>
              <img src={'../github.png'} alt='Github icons created by -Artist - Flaticon' />
            </NavLink>
          </div>
          <div className='item'>
            <NavLink to='/'>
              <img src={'../linkedin.png'} alt='Linkedin icons created by Smashicons - Flaticon' />
            </NavLink>
          </div>
          <div className='item'>
            <NavLink>
              <img src={'../x.png'} alt='Tweet icons created by Freepik - Flaticon' />
            </NavLink>
          </div>
          <div className='item'>
            <NavLink to='#'>
              <img src={'../resume.png'} alt='Portfolio icons created by Freepik - Flaticon' />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
