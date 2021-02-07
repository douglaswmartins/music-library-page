import './styles/global.css';

import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="container-app">

      <Sidebar/>

      <div className="content">
        <h1>Hello App</h1>
      </div>

    </div>
  );
}

export default App;
