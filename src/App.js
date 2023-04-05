import React from 'react';
import NgoSignin from './components/ngo/NgoSignin';
import NgoSignup from './components/ngo/NgoSignup';
import Test from './components/test';
import Account from './components/Account';
import Admin from './components/Admin';
import NgoLanding from './components/ngo/NgoLanding';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className='bg-purple-300'>
      <AuthContextProvider>
        <Routes>
          <Route path='/ngo' element={<NgoLanding />} />
          <Route path='/ngo_signin' element={<NgoSignin />} />
          <Route path='/ngo_signup' element={<NgoSignup />} />
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