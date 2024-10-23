import { useTranslation } from 'react-i18next';

const Card = ({ title, description, link, footer }) => {
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
      </div>
      <div className='card-footer'>{footer}</div>
    </div>
  );
};

export default Card;
