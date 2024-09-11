import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom/cjs/react-router-dom.min';

import { useAuthContext } from './hooks/useAuthContext';

// components
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Navbar from './components/Navbar';

function App() {
  const { authIsReady } = useAuthContext();

  return (
    <div className='App'>
      {authIsReady && (
        <BrowserRouter>
          <Navbar></Navbar>
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
      )}
    </div>
  );
}

export default App;
