// // import logo from './logo.svg';
// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// // import Contact from './Contact';
// // import ContactNext from './ContactNext';
// import './App.css';
// import LeftMenuBar from './LeftMenuBar';
// import VolunteerPosition1 from './VolunteerPosition1';
// import VolunteerPosition2 from './VolunteerPosition2';
// // import ApplyForVolunteer from './ApplyForVolunteer';

// function App() {
//   return (
//     <>
//     {/* <LeftMenuBar/> */}
//     {/* <VolunteerPosition1/> */}
//     {/* <ApplyForVolunteer></ApplyForVolunteer> */}

//     <Routes>
//       <Route path='/' element={<LeftMenuBar/>}></Route>
//       <Route path='/VolunteerPosition1' element={<VolunteerPosition1 />} />
//       <Route path='/VolunteerPosition2' element={<VolunteerPosition2 />} />
//     </Routes>
//     </>
//   );
// }

// export default App;


import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LeftMenuBar from './LeftMenuBar';
// import VolunteerPosition1 from './VolunteerPosition1';
// import VolunteerPosition2 from './VolunteerPosition2';


function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<LeftMenuBar />} />
          {/* <Route path='/vol1' element={<VolunteerPosition1 />} />
          <Route path='/vol2' element={<VolunteerPosition2 />} /> */}
        </Routes>
    </div>
  );
}

export default App;