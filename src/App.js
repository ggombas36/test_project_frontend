import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import IMUPage from './components/IMUPage';
import DBWPage from './components/DBWPage';

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/imu" element={<IMUPage />} />
      <Route path="/dbw" element={<DBWPage />} />
    </Routes>
  );
};

export default App;