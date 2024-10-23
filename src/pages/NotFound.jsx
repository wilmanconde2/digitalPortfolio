import React from 'react';
import useTitulo from '../hooks/useTitulo';

const NotFound = () => {
  useTitulo('Page not found');

  return <div>NotFound</div>;
};

export default NotFound;
