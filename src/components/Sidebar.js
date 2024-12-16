import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-20 w-full bg-customGray flex items-center justify-between px-4">
      <NavLink to="/" className="flex items-center">
        <div className="text-white font-bold text-lg flex flex-col justify-center items-start">
          <p>Sensor Data</p>
          <p>Visualization Application</p>
        </div>
      </NavLink>
      <div className="flex items-center space-x-8">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'font-bold text-white' : 'text-white hover:font-bold hover:shine')}
        >
          Home
        </NavLink>
        <NavLink
          to="/imu"
          className={({ isActive }) => (isActive ? 'font-bold text-white' : 'text-white hover:font-bold hover:shine')}
        >
          IMU Angular Velocity
        </NavLink>
        <NavLink
          to="/dbw"
          className={({ isActive }) => (isActive ? 'font-bold text-white' : 'text-white hover:font-bold hover:shine')}
        >
          DBW Vehicle Speed
        </NavLink>
      </div>
      <NavLink to="/">
        <img className="w-25 h-20 pointer-events-none" src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" />
      </NavLink>
    </div>
  );
};

export default Sidebar;