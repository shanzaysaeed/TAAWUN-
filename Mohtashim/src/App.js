import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LeftMenuBar from './components/LeftMenuBar';
import VolunteerPosition1 from './components/VolunteerPosition1';
import VolunteerPosition2 from './components/VolunteerPosition2';
import VolunteerPosition0 from './components/VolunteerPosition0';
import LeftMenuBarVolunteer from './components/LeftMenuBarVolunteer';
import VolunteerForGood1 from './components/VolunteerForGood1';
import VolunteerForGood2 from './components/VolunteerForGood2';
import MapViewVolunteer from './MapViewVolunteer';
import VolunteerForGood3 from './components/VolunteerForGood3';
import CreateCampaign from './components/CreateCampaign';
import Campaigns from './components/Campaigns';
import CreateCampaignOngoing from './components/CreateCampaignOngoing';
import VolunteerPosition3 from './components/VolunteerPosition3';
import VolunteerPositionClosed from './components/VolunteerPositionClosed';
import VolunteerPositionApproved from './components/VolunteerPositionApproved';
import VolunteerPositionSeeDetailsApprovedApplication from './components/VolunteerPositionSeeDetailsApprovedApplication';
import VolunteerPositionRejected from './components/VolunteerPositionRejected';
import MapView from './components/MapView';
import DonateVolunterHistory from './components/DonateVolunterHistory';
import DonateVolunterHistory2 from './components/DonateVolunterHistory2';


function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<LeftMenuBar />} />
          <Route path='/vol0' element={<VolunteerPosition0/>}/>
          <Route path='/vol1' element={<VolunteerPosition1 />} />
          <Route path='/vol2' element={<VolunteerPosition2 />} />
          <Route path='/vol3' element={<VolunteerPosition3 />} />
          <Route path='/volClosed' element={<VolunteerPositionClosed/>}/>
          <Route path='/volApproved' element={<VolunteerPositionApproved/>}/>
          <Route path='/volPSDAA' element={<VolunteerPositionSeeDetailsApprovedApplication/>}/>
          <Route path='/volRejected' element={<VolunteerPositionRejected/>}/>

          <Route path='/mapView' element={<MapView/>}/>
          


          <Route  path='/cc2' element={<CreateCampaign/>}></Route>
          <Route path='/cc1' element={<Campaigns/>}/>
          <Route path='/ongoingC' element={<CreateCampaignOngoing/>}></Route>

          
          {/* <Route path='/' element={<LeftMenuBarVolunteer/>}></Route>
          <Route path='/vfg1' element={<VolunteerForGood1/>}></Route>
          <Route path='/vfg2' element={<VolunteerForGood2/>}></Route>
          <Route path='/vfg3' element={<VolunteerForGood3/>}/>
          <Route path='dvh' element={<DonateVolunterHistory/>}/>
          <Route path='dvh2' element={<DonateVolunterHistory2/>}/>
          <Route path='/mapviewVolunteer' element={<MapViewVolunteer/>}/> */}
        </Routes>
    </div>
  );
}

export default App;