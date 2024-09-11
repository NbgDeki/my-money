import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom/cjs/react-router-dom.min';

import { useAuthContext } from './hooks/useAuthContext';

// components
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Navbar from './components/Navbar';

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className='App'>
      {authIsReady && (
        <BrowserRouter>
          <Navbar></Navbar>
          <Switch>
            <Route exact path='/'>
              {user ? <Home></Home> : <Redirect to='/login'></Redirect>}
            </Route>

            <Route path='/login'>
              {user ? <Redirect to='/'></Redirect> : <Login></Login>}
            </Route>

            <Route path='/signup'>
              {user ? <Redirect to='/'></Redirect> : <Signup></Signup>}
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
