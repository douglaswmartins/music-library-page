import { BrowserRouter } from 'react-router-dom';

import './styles/global.css';

import Routes from './routes';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <div className="container-app">

        <Sidebar/>

        <div className="content">
          <Routes />
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
