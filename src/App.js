import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
 
import UserContext from './store/UserContext';
import PrivateRoute from './routes-nav/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import BusinessDetails from './pages/BusinessDetails';
import UserFeedback from './pages/UserFeedback';
 

const App = () => {
	const [currentUser, setCurrentUser] = useState(null);



  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className="container">
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
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
    </UserContext.Provider >
  );
}

export default App;