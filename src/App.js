import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={Signup} />
          <Route exact path='/login' Component={Login} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
