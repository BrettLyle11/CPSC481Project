import React from 'react';
import {Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage.js'; // Fix the casing of the import statement

import LoginPage from './pages/LoginPage.js'; // Fix the casing of the import statement
import Favourites from './pages/Favourites.js';
import SearchPage from './pages/SearchPage.js';
import SearchResults from './pages/SearchResults.js'; 
import ProfilePage from './pages/ProfilePage.js'; 
import Appointment from './pages/Appointment.js';
import PropertyDetailPage from './pages/PropertyDetailpg.js';
import Fitlers from "./pages/Filters.js"



function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/favourites" element={<Favourites/>} />
      <Route path="/search" element={<SearchPage/>} />
      <Route path="/results" element={<SearchResults/>} />

      <Route path="/profile" element={<ProfilePage/>} />
      <Route path="*" element={<h1>Not Found</h1>} />

      <Route path='/details' element={<PropertyDetailPage/>} />
      <Route path='/appointment' element={<Appointment/>} />
      <Route path='/filters' element={<Fitlers/>}/>

    </Routes>
  );
}

export default App;