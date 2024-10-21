import { useRoutes } from 'react-router';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import NotFound from '../pages/NotFound';

const Routes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
    {
      path: '/projects',
      element: <Projects />,
    },
    {
      path: '/*',
      element: <NotFound />,
    },
  ]);
  return routes;
};

export default Routes;
