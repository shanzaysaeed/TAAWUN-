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
import Campaigns from './components/ngo/Campaigns';
import CompletedCampaigns from './components/ngo/CompletedCampaigns';
import CreateCampaign from './components/ngo/CreateCampaign';
import DonorLanding from './components/donor/DonorLanding';
import DonorSignup from './components/donor/DonorSignup';
import DonorSignin from './components/donor/DonorSignin';
import DonorDashboard from './components/donor/DonorDashboard';
import Donate1 from './components/donor/donate1';
import Donate2 from './components/donor/donate2';
import Donate3 from './components/donor/donate3';
import Donate4 from './components/donor/donate4';
import Donate5 from './components/donor/donate5';
import Donate6 from './components/donor/donate6';
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
          <Route path='/campaigns' element={<RoleProtectedRoute role='NGO'><Campaigns /></RoleProtectedRoute>}/>
          <Route path='/create_camp' element={<RoleProtectedRoute role='NGO'><CreateCampaign /></RoleProtectedRoute>}/>
          <Route path='/comp_camp' element={<RoleProtectedRoute role='NGO'><CompletedCampaigns /></RoleProtectedRoute>}/>
          <Route path='/donor' element={<DonorLanding />} />
          <Route path='/donor_signin' element={<DonorSignin />} />
          <Route path='/donor_signup' element={<DonorSignup />} />
          <Route path='/donor_home' element={<RoleProtectedRoute role='Donor'><DonorDashboard /></RoleProtectedRoute>}/>
          <Route path='/donate1' element={<RoleProtectedRoute role='Donor'><Donate1 /></RoleProtectedRoute>}/>
          <Route path='/donate2' element={<RoleProtectedRoute role='Donor'><Donate2 /></RoleProtectedRoute>}/>
          <Route path='/donate3' element={<RoleProtectedRoute role='Donor'><Donate3 /></RoleProtectedRoute>}/>
          <Route path='/donate4' element={<RoleProtectedRoute role='Donor'><Donate4 /></RoleProtectedRoute>}/>
          <Route path='/donate5' element={<RoleProtectedRoute role='Donor'><Donate5 /></RoleProtectedRoute>}/>
          <Route path='/donate6' element={<RoleProtectedRoute role='Donor'><Donate6 /></RoleProtectedRoute>}/>
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
