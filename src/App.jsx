import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes.jsx';
import BackgroundWrapper from './utils/BackgroundWrapper.jsx'; 


const App = () => {
  return (
    <BrowserRouter>
      <BackgroundWrapper>
        <Routes />
      </BackgroundWrapper>
    </BrowserRouter>
  );
};

export default App;
