const Card = ({ title, description, link, footer }) => {
  return (
    <div className='card text-center'>
      <div className='card-header'>Project</div>
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{description}</p>
        <a href={link} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>
          GitHub Repository
        </a>
      </div>
      <div className='card-footer'>{footer}</div>
    </div>
  );
};

export default Card;
