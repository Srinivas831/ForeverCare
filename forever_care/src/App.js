import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './HomeComponents/Navbar';
import AllRoutes from './HomeComponents/Routes';
import { Services } from './serviceComponents/Services';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <AllRoutes />
   {/* <Services /> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
