import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import ContactNext from './components/ContactNext';
<<<<<<< HEAD
import LeftMenuBar from './LeftMenuBar';
=======
>>>>>>> 560dde1968e1efb4d9173ed4a33d4b653c015252


function App() {
  return (
    <>
        <Routes>
<<<<<<< HEAD
          <Route path='/' element={<LeftMenuBar/>}></Route>
=======
>>>>>>> 560dde1968e1efb4d9173ed4a33d4b653c015252
          <Route path='/contact' element={<Contact />} />
          <Route path='/contactnext' element={<ContactNext />} />
        </Routes>
    </>
  );
}

export default App;