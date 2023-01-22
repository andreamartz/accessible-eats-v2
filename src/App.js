import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
 
import PrivateRoute from './routes-nav/PrivateRoute';
import Navbar from './routes-nav/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from '.pages/Signup';
import BusinessDetails from './pages/BusinessDetails';
import UserFeedback from './pages/UserFeedback';
 



function App() {
  return (


        <div className="App">
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='business' element={<BusinessDetails />} />
          <Route 
            path='my-feedback' 
            element={
              <PrivateRoute>
                <UserFeedback />
              </PrivateRoute>
            }
          />
        </Routes>
      </main>
        </div>
  );
}

export default App;