import { NavLink } from 'react-router-dom';
import useIsMobile from '../hooks/useIsMobile';

const HomeIcon = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <div className='home'>
        <NavLink to='/'>
          <img src={isMobile ? '/homeWhite.png' : '/homeWhite.png'} alt='homeIcon' />
        </NavLink>
      </div>
    </>
  );
};

export default HomeIcon;
