import './App.css';
import Navbar from './HomeComponents/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
// import Routes from './HomeComponents/Routes';
import AllRoutes from './HomeComponents/Routes';
import Footer from './HomeComponents/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <AllRoutes />
        </div>
        {/* <Footer/> */}
      </div>
    </Router>
    
  );
}

export default App;
