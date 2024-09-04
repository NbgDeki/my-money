import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom/cjs/react-router-dom.min';

// components
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route path='/login'>
            <Login></Login>
          </Route>

          <Route path='/signup'>
            <Signup></Signup>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
