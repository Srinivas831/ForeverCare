import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Services } from './serviceComponents/Services';
import NavBar from './HomeComponents/Navbar';
import AllRoutes from './HomeComponents/Routes';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div>
          <AllRoutes/>
        </div>
        <Services />
      </div>
    </Router>
    
  );
}

export default App;
