import { Link } from 'react-router-dom';

const Card = ({ title, description, link, footer }) => {
  return (
    <div className='card text-center'>
      <div className='card-header'>Project</div>
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{description}</p>
        <Link to={link} className='btn btn-primary' target='blank'>
          GitHub Repository
        </Link>
      </div>
      <div className='card-footer'>{footer}</div>
    </div>
  );
};

export default Card;
