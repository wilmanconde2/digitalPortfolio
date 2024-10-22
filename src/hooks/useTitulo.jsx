import { useEffect } from 'react';

const useTitulo = (textoTitulo = 'Sin titulo') => {
  useEffect(() => {
    document.title = `Portfolio - ${textoTitulo}`;
  }, []);
};

export default useTitulo;
