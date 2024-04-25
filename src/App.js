import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Components/Home/Home';
import AddUser from './Components/AddUser/AddUser';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/signup' Component={Signup} />
          <Route exact path='/login' Component={Login} />
          <Route exact path='/add-user' Component={AddUser} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
