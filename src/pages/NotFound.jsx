import React from 'react'
import useTitulo from '../hooks/useTitulo';

const NotFound = () => {
  useTitulo('Not Found');

  return (
    <div>NotFound</div>
  )
}

export default NotFound