import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import VideoList from './components/Videos/VideoList';

// import 'bootswatch/dist/pulse/bootstrap.min.css';
// import 'react-toastify/dist/ReactToastify.css';
import './css/index.css'

import NavBar from './components/Navbar/NavBar';
import { ToastContainer } from 'react-toastify';
import VideoForm from './components/Videos/VideoForm';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>

    <NavBar/>
    <div className="container-routes">

    <Routes>
    <Route path='/' element={<VideoList/>}/>
    <Route path='/new-video' element={<VideoForm/>}/>
    <Route path='/update/:id' element={<VideoForm/>}/>
    </Routes>
    </div>
    <ToastContainer/>
   
    </BrowserRouter>
    
  </React.StrictMode>
);

