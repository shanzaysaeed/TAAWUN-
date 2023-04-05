import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LeftMenuBar from './components/LeftMenuBar';
import VolunteerPosition1 from './components/VolunteerPosition1';
import VolunteerPosition2 from './components/VolunteerPosition2';
import LeftMenuBarVolunteer from './components/LeftMenuBarVolunteer';
import VolunteerForGood1 from './components/VolunteerForGood1';
import VolunteerForGood2 from './components/VolunteerForGood2';

function App() {
  return (
    <div>
        <Routes>
          {/* <Route path='/' element={<LeftMenuBar />} />
          <Route path='/vol1' element={<VolunteerPosition1 />} />
          <Route path='/vol2' element={<VolunteerPosition2 />} /> */}
          <Route path='/' element={<LeftMenuBarVolunteer/>}></Route>
          <Route path='/vfg1' element={<VolunteerForGood1/>}></Route>
          <Route path='/vfg2' element={<VolunteerForGood2/>}></Route>
        </Routes>
    </div>
  );
}

export default App;