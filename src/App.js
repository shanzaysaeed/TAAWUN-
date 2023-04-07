import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import RoleProtectedRoute from './contexts/ProtectedRoute';
import Homepage from './components/Homepage';
import AdminSignin from './components/admin/AdminSignin';
import Admin from './components/admin/Admin';
import NgoLanding from './components/ngo/NgoLanding';
import NgoSignup from './components/ngo/NgoSignup';
import NgoSignin from './components/ngo/NgoSignin';
import NgoDashboard from './components/ngo/NgoDashboard';
import DonorLanding from './components/donor/DonorLanding';
import DonorSignup from './components/donor/DonorSignup';
import DonorSignin from './components/donor/DonorSignin';
import DonorDashboard from './components/donor/DonorDashboard';
import RiderLanding from './components/rider/RiderLanding';
import RiderSignup from './components/rider/RiderSignup';
import RiderSignin from './components/rider/RiderSignin';
import RiderDashboard from './components/rider/RiderDashboard';
import Test from './components/test';

function App() {
  return (
    <div className='bg-purple-300'>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/admin_signin' element={<AdminSignin />} />
          <Route path='/admin' element={<RoleProtectedRoute role='admin'><Admin /></RoleProtectedRoute>} />
          <Route path='/ngo' element={<NgoLanding />} />
          <Route path='/ngo_signin' element={<NgoSignin />} />
          <Route path='/ngo_signup' element={<NgoSignup />} />
          <Route path='/ngo_home' element={<RoleProtectedRoute role='NGO'><NgoDashboard /></RoleProtectedRoute>}/>
          <Route path='/donor' element={<DonorLanding />} />
          <Route path='/donor_signin' element={<DonorSignin />} />
          <Route path='/donor_signup' element={<DonorSignup />} />
          <Route path='/donor_home' element={<RoleProtectedRoute role='Donor'><DonorDashboard /></RoleProtectedRoute>}/>
          <Route path='/rider' element={<RiderLanding />} />
          <Route path='/rider_signin' element={<RiderSignin />} />
          <Route path='/rider_signup' element={<RiderSignup />} />
          <Route path='/rider_home' element={<RoleProtectedRoute role='Rider'><RiderDashboard /></RoleProtectedRoute>}/>
          <Route path='/test' element={<Test />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
