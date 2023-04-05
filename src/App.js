import React from 'react';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Test from './components/test';
import Account from './components/Account';
import Admin from './components/Admin';
import Landing from './components/Landing';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className='bg-purple-300'>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/test' element={<Test />} />
          <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;