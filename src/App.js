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
import DonationApp from './components/ngo/DonationApp';
import NonCash from './components/ngo/NonCash';
import DonorLanding from './components/donor/DonorLanding';
import DonorSignup from './components/donor/DonorSignup';
import DonorSignin from './components/donor/DonorSignin';
import DonorDashboard from './components/donor/DonorDashboard';
import Donate1 from './components/donor/donate1';
import Donate2 from './components/donor/donate2';
import Donate3 from './components/donor/donate3';
import Donate4 from './components/donor/donate4';
import Donate5 from './components/donor/donate5';
import Donate51 from './components/donor/donate51';
import Donate6 from './components/donor/donate6';
import RiderLanding from './components/rider/RiderLanding';
import RiderSignup from './components/rider/RiderSignup';
import RiderSignin from './components/rider/RiderSignin';
import RiderDashboard from './components/rider/RiderDashboard';
import VolunteerForGood1 from './components/donor/VolunteerForGood1';
import VolunteerForGood2 from './components/donor/VolunteerForGood2';
import VolunteerForGood3 from './components/donor/VolunteerForGood3';
import DonateVolunterHistory from './components/donor/DonateVolunterHistory';
import DonateVolunterHistory2 from './components/donor/DonateVolunterHistory2';
import VolunteerPosition0 from './components/ngo/VolunteerPosition0';
import VolunteerPosition1 from './components/ngo/VolunteerPosition1';
import VolunteerPosition2 from './components/ngo/VolunteerPosition2';
import VolunteerPosition3 from './components/ngo/VolunteerPosition3';
import VolunteerPositionApproved from './components/ngo/VolunteerPositionApproved';
import VolunteerPositionRejected from './components/ngo/VolunteerPositionRejected';
import VolunteerPositionSeeDetailsApprovedApplication from './components/ngo/VolunteerPositionSeeDetailsApprovedApplication';
import SettingsDonor from './components/donor/SettingsDonor';
import SettingsNGO from './components/ngo/SettingsNGO';
import Collaboration from './components/ngo/Collaboration';
import Collaboration1 from './components/ngo/Collaboration1';
import VolunteerPositionClosed from './components/donor/VolunteerPositionClosed';
import DonationHistory from './components/ngo/DonationHistory';
import MapView from './components/ngo/MapView';
import DMapView from './components/donor/MapView';

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
          <Route path='/apps' element={<RoleProtectedRoute role='NGO'><DonationApp /></RoleProtectedRoute>}/>
          <Route path='/noncash_apps' element={<RoleProtectedRoute role='NGO'><NonCash /></RoleProtectedRoute>}/>
          <Route path='/campaigns' element={<RoleProtectedRoute role='NGO'><Campaigns /></RoleProtectedRoute>}/>
          <Route path='/create_camp' element={<RoleProtectedRoute role='NGO'><CreateCampaign /></RoleProtectedRoute>}/>
          <Route path='/comp_camp' element={<RoleProtectedRoute role='NGO'><CompletedCampaigns /></RoleProtectedRoute>}/>
          <Route path='/vol0' element={<RoleProtectedRoute role='NGO'><VolunteerPosition0 /></RoleProtectedRoute>}/>
          <Route path='/vol1' element={<RoleProtectedRoute role='NGO'><VolunteerPosition1 /></RoleProtectedRoute>}/>
          <Route path='/vol2' element={<RoleProtectedRoute role='NGO'><VolunteerPosition2 /></RoleProtectedRoute>}/>
          <Route path='/vol3' element={<RoleProtectedRoute role='NGO'><VolunteerPosition3 /></RoleProtectedRoute>}/>
          <Route path='/volApproved' element={<RoleProtectedRoute role='NGO'><VolunteerPositionApproved /></RoleProtectedRoute>}/>
          <Route path='/volRejected' element={<RoleProtectedRoute role='NGO'><VolunteerPositionRejected /></RoleProtectedRoute>}/>
          <Route path='/volPSDAA' element={<RoleProtectedRoute role='NGO'><VolunteerPositionSeeDetailsApprovedApplication /></RoleProtectedRoute>}/>
          <Route path='/volClosed' element={<RoleProtectedRoute role='NGO'><VolunteerPositionClosed /></RoleProtectedRoute>}/>
          <Route path='/settingsNGO' element={<RoleProtectedRoute role='NGO'><SettingsNGO /></RoleProtectedRoute>}/>
          <Route path='/collab' element={<RoleProtectedRoute role='NGO'><Collaboration /></RoleProtectedRoute>}/>
          <Route path='/collab1' element={<RoleProtectedRoute role='NGO'><Collaboration1 /></RoleProtectedRoute>}/>
          <Route path='/donHistory' element={<RoleProtectedRoute role='NGO'><DonationHistory /></RoleProtectedRoute>}/>

          <Route path='/ngo_map' element={<RoleProtectedRoute role='NGO'><MapView/></RoleProtectedRoute>}/>


          <Route path='/donor' element={<DonorLanding />} />
          <Route path='/donor_signin' element={<DonorSignin />} />
          <Route path='/donor_signup' element={<DonorSignup />} />
          <Route path='/donor_home' element={<RoleProtectedRoute role='Donor'><DonorDashboard /></RoleProtectedRoute>}/>
          <Route path='/donate1' element={<RoleProtectedRoute role='Donor'><Donate1 /></RoleProtectedRoute>}/>
          <Route path='/donate2' element={<RoleProtectedRoute role='Donor'><Donate2 /></RoleProtectedRoute>}/>
          <Route path='/donate3' element={<RoleProtectedRoute role='Donor'><Donate3 /></RoleProtectedRoute>}/>
          <Route path='/donate4' element={<RoleProtectedRoute role='Donor'><Donate4 /></RoleProtectedRoute>}/>
          <Route path='/donate5' element={<RoleProtectedRoute role='Donor'><Donate5 /></RoleProtectedRoute>}/>
          <Route path='/donate5_1' element={<RoleProtectedRoute role='Donor'><Donate51 /></RoleProtectedRoute>}/>
          <Route path='/donate6' element={<RoleProtectedRoute role='Donor'><Donate6 /></RoleProtectedRoute>}/>
          <Route path='/donor_map' element={<RoleProtectedRoute role='Donor'><DMapView /></RoleProtectedRoute>}/>
          
          <Route path='/rider' element={<RiderLanding />} />
          <Route path='/rider_signin' element={<RiderSignin />} />
          <Route path='/rider_signup' element={<RiderSignup />} />
          <Route path='/rider_home' element={<RoleProtectedRoute role='Rider'><RiderDashboard /></RoleProtectedRoute>}/>

          <Route path='vfg1' element= {<RoleProtectedRoute role='Donor'> <VolunteerForGood1/> </RoleProtectedRoute>}/>
          <Route path='vfg2' element= {<RoleProtectedRoute role='Donor'> <VolunteerForGood2/> </RoleProtectedRoute>}/>
          <Route path='vfg3' element= {<RoleProtectedRoute role='Donor'> <VolunteerForGood3/> </RoleProtectedRoute>}/>

          <Route path='dvh' element= {<RoleProtectedRoute role='Donor'> <DonateVolunterHistory/> </RoleProtectedRoute>}/>
          <Route path='dvh2' element= {<RoleProtectedRoute role='Donor'> <DonateVolunterHistory2/> </RoleProtectedRoute>}/>

          <Route path='/settingsDonor' element= {<RoleProtectedRoute role='Donor'> <SettingsDonor/> </RoleProtectedRoute>}/>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;



