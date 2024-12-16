import React from "react";
import Sidebar from './Sidebar';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-halfCustomGray text-white overflow-hidden">
      <Sidebar />
      <div className="flex flex-col items-center justify-center">
        <section className="bg-black bg-opacity-50 text-white rounded-2xl shadow-white mt-2 w-5/6 border-4 border-customWhite">
          <div className="w-full text-center p-4 mx-2">
            <h1 className="text-4xl font-bold">Sensor Visualization Application</h1>
            <p className="mt-4">Understanding the Role of Sensors in Modern Vehicles</p>
            <p className="mt-2">
              Sensors are the bridges between a self-driving system and the real world. They provide critical data that helps vehicles navigate their surroundings safely and effectively. In this application, you’ll explore two primary sensors:
            </p>
            <ul className="mt-2 list-disc list-inside">
              <li><strong>The IMU:</strong> Tracks angular velocities and accelerations across three axes.</li>
              <li><strong>The DBW:</strong> Measures vehicle speed, wheel dynamics, and yaw rate.</li>
            </ul>
          </div>
        </section>

        <section className="w-full flex flex-wrap justify-around p-8 space-x-1">
          <div className="bg-white bg-opacity-50 text-black p-4 rounded-2xl shadow-white w-full sm:w-1/3 mb-4 sm:mb-0 max-h-box border-4 border-customGray">
            <h2 className="text-2xl font-bold">Inertial Measurement Unit (IMU)</h2>
            <p className="mt-2">
              The IMU provides data about a vehicle’s motion and orientation. It captures:
            </p>
            <ul className="mt-2 list-disc list-inside">
              <li>Angular velocities (ω) across the X, Y, and Z axes.</li>
              <li>Accelerations along the same axes.</li>
            </ul>
            <p className="mt-2">
              This data helps determine how the vehicle moves and reacts to its environment.
            </p>
          </div>
          <div className="bg-white bg-opacity-50 text-black p-4 rounded-2xl shadow-white w-full sm:w-1/3 max-h-box border-4 border-customGray">
            <h2 className="text-2xl font-bold">Drive-by-Wire (DBW) Sensor</h2>
            <p className="mt-2">
              The DBW system measures:
            </p>
            <ul className="mt-2 list-disc list-inside">
              <li>Vehicle speed (v).</li>
              <li>Individual wheel speeds.</li>
              <li>Yaw rate (ωz), describing rotation around the vertical axis.</li>
            </ul>
            <p className="mt-2">
              This sensor ensures precision in vehicle control and safety during operation.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;