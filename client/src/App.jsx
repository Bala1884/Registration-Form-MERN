import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Register from './components/Register';
import Error from './components/Error';
import Success from './components/Success';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='/Success' element={<Success/>}/>
      <Route path='/Error' element={<Error/>}/>
    </Routes>
  )
}

export default App;