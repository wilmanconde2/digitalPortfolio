import React from 'react';
import { NavLink } from 'react-router-dom';
import useEmailForm from '../hooks/useEmailForm.jsx';
import useTitulo from '../hooks/useTitulo.jsx';

const Contact = () => {
useTitulo('Contact')

  const { email, setEmail, message, setMessage, name, setName, error, sendEmail } = useEmailForm();

  return (
    <div className='contact-page'>
      <div className='contact__container'>
        <div className='home'>
          <NavLink to='/'>
            <img src={'/home.png'} alt='homeIcon' />
          </NavLink>
        </div>
        <div className='contact__container__info'>
          <h2>Summon the warrior!</h2>
          <p>
            Step into the battlefield of innovation, where your words hold the power to initiate change and create new
            alliances. Whether you're seeking to forge partnerships or share tales of your victories, your messages are
            like sacred scrolls in this domain.
          </p>
        </div>

        <form onSubmit={sendEmail} className='mb-3 form__container'>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <label htmlFor='name' className='form-label'>
            <input
              type='text'
              className='form-control'
              id='name'
              placeholder='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label htmlFor='email' className='form-label'>
            <input
              type='email'
              className='form-control'
              id='email'
              placeholder='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label htmlFor='message' className='form-label'>
            <textarea
              className='form-control'
              id='message'
              rows='3'
              placeholder='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </label>
          <button type='submit' className='btn btn-outline-primary'>
            Unleash Your Message!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
