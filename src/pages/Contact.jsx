import React from 'react';
import { NavLink } from 'react-router-dom';
import useEmailForm from '../hooks/useEmailForm.jsx';
import useTitulo from '../hooks/useTitulo.jsx';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const Contact = () => {
  const { t } = useTranslation();
  useTitulo(t('contact.title'));

  const { email, setEmail, message, setMessage, name, setName, error, sendEmail } = useEmailForm();

  return (
    <>
      <Navbar />
      <div className='contact-page'>
        <div className='contact__container'>
          <div className='home'>
            <NavLink to='/'>
              <img src={'/home.png'} alt='homeIcon' />
            </NavLink>
          </div>
          <div className='contact__container__info'>
            <h2>{t('contact.subtitle')}</h2>
            <p>{t('contact.history')}</p>
          </div>

          <form onSubmit={sendEmail} className='mb-3 form__container'>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <label htmlFor='name' className='form-label'>
              <input
                type='text'
                className='form-control'
                id='name'
                placeholder={t('contact.name')}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label htmlFor='email' className='form-label'>
              <input
                type='email'
                className='form-control'
                id='email'
                placeholder={t('contact.email')}
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
                placeholder={t('contact.message')}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </label>
            <button type='submit' className='btn btn-outline-primary'>
              {t('contact.submit')}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
