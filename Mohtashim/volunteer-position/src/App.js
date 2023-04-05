import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import ContactNext from './components/ContactNext';
import LeftMenuBar from './LeftMenuBar';


function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<LeftMenuBar/>}></Route>
          <Route path='/contact' element={<Contact />} />
          <Route path='/contactnext' element={<ContactNext />} />
        </Routes>
    </>
  );
}

export default App;