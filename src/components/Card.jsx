import { useTranslation } from 'react-i18next';

const Card = ({ title, description, link, link2, footer }) => {
  const { t } = useTranslation();

  return (
    <div className='card text-center'>
      <div className='card-header'>{t('projects.header')}</div>
      <div className='card-body'>
        <h5 className='card-title'>{t(title)}</h5>
        <p className='card-text'>{t(description)}</p>
        <a href={link} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>
          {t('projects.repo')}
        </a>
        <a href={link2} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>
          {t('projects.netlify')}
        </a>
      </div>
      <div className='card-footer'>{t(footer)}</div>
    </div>
  );
};

export default Card;
