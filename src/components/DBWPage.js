import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { Line, Radar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, RadialLinearScale, RadarController, Title, Tooltip, Legend } from 'chart.js';
import { getDBWData } from '../services/api';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, RadialLinearScale, RadarController, Title, Tooltip, Legend);

const DBWPage = () => {
  const [dbwData, setDbwData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [interval, setInterval] = useState(1);
  const [radarData, setRadarData] = useState({
    labels: ['Vehicle Speed', 'Yaw Rate', 'Front Left Wheel Speed', 'Front Right Wheel Speed', 'Rear Left Wheel Speed', 'Rear Right Wheel Speed'],
    datasets: [
      {
        label: 'Selected Data Point',
        data: [0, 0, 0, 0, 0, 0],
        backgroundColor: 'rgba(5, 205, 92, 0.2)',
        borderColor: '#05cd5c',
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      const dbw = await getDBWData();
      console.log(dbw);
      setDbwData(dbw);
      setFilteredData(dbw);
      if (dbw.length > 0) {
        const firstDataPoint = dbw[0];
        setRadarData({
          labels: ['Vehicle Speed', 'Yaw Rate (x100)', 'Front Left Wheel Speed', 'Front Right Wheel Speed', 'Rear Left Wheel Speed', 'Rear Right Wheel Speed'],
          datasets: [
            {
              label: 'Selected Data Point',
              data: [firstDataPoint.speed, firstDataPoint.yaw_rate * 100, firstDataPoint.v_front_left, firstDataPoint.v_front_right, firstDataPoint.v_rear_left, firstDataPoint.v_rear_right],
              backgroundColor: 'rgba(5, 205, 92, 0.2)',
              borderColor: '#05cd5c',
              borderWidth: 1,
            },
          ],
        });
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setFilteredData(dbwData.filter((_, index) => index % interval === 0));
  }, [interval, dbwData]);

  const handleHover = (event, chartElement) => {
    if (chartElement.length > 0) {
      const index = chartElement[0].index;
      const dataPoint = filteredData[index];
      setRadarData({
        labels: ['Vehicle Speed', 'Yaw Rate (x100)', 'Front Left Wheel Speed', 'Front Right Wheel Speed', 'Rear Left Wheel Speed', 'Rear Right Wheel Speed'],
        datasets: [
          {
            label: 'Selected Data Point',
            data: [dataPoint.speed, dataPoint.yaw_rate * 100, dataPoint.v_front_left, dataPoint.v_front_right, dataPoint.v_rear_left, dataPoint.v_rear_right],
            backgroundColor: 'rgba(5, 205, 92, 0.2)',
            borderColor: '#05cd5c',
            borderWidth: 1,
          },
        ],
      });
    }
  };

  const chartData = {
    labels: filteredData.map(item => new Date(item.timestamp * 1000).toLocaleTimeString()),
    datasets: [
      {
        label: 'Vehicle Speed',
        data: filteredData.map(item => item.speed),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
      {
        label: 'Yaw Rate (x100)',
        data: filteredData.map(item => item.yaw_rate * 100), // *100 for better visualization
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: true,
      },
      {
        label: 'Front Left Wheel Speed',
        data: filteredData.map(item => item.v_front_left),
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
      {
        label: 'Front Right Wheel Speed',
        data: filteredData.map(item => item.v_front_right),
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
      },
      {
        label: 'Rear Left Wheel Speed',
        data: filteredData.map(item => item.v_rear_left),
        borderColor: 'rgba(255, 206, 86, 1)',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        fill: true,
      },
      {
        label: 'Rear Right Wheel Speed',
        data: filteredData.map(item => item.v_rear_right),
        borderColor: 'rgba(0, 100, 0, 1)',
        backgroundColor: 'rgba(0, 100, 0, 0.2)',
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'DBW Vehicle Data',
      },
    },
    onHover: handleHover,
  };

  return (
    <div className="min-h-screen bg-halfCustomGray text-white overflow-hidden">
      <Sidebar />
      <div className="flex flex-col items-center justify-center">
        <section className="bg-black bg-opacity-50 text-white rounded-2xl shadow-white mt-2 w-5/6 border-4 border-customWhite">
          <div className="w-full text-center p-4 mx-2">
            <h1 className="text-3xl font-bold">DBW Vehicle Speed</h1>
            <p className="mt-2">Visualizing the Drive-by-Wire (DBW) system data.</p>
          </div>
        </section>

        <section className="w-full flex justify-around py-4 space-x-1 items-end">
          <div className="w-3/5 flex flex-col items-center">
            <div className="w-full mb-4">
              <label htmlFor="interval" className="block text-white text-sm font-bold mb-2">Select Interval:</label>
              <select
                id="interval"
                className="block appearance-none w-full bg-gray-700 border border-gray-600 text-white py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-600 focus:border-gray-500"
                value={interval}
                onChange={(e) => setInterval(Number(e.target.value))}
              >
                <option value={1}>All</option>
                <option value={5}>Each 5</option>
                <option value={10}>Each 10</option>
                <option value={25}>Each 25</option>
                <option value={50}>Each 50</option>
                <option value={100}>Each 100</option>
              </select>
            </div>
            <div className="bg-white bg-opacity-50 text-customBlack p-1 rounded-2xl shadow-white w-full h-96 pl-1 mb-4 max-h-box border-4 border-customGray flex items-center justify-center">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>
          <div className="bg-white bg-opacity-50 text-customBlack p-1 rounded-2xl shadow-white w-1/3 h-460 pr-1 mb-4 max-h-box border-4 border-customGray flex items-center justify-center">
            <Radar data={radarData} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: 'Selected Data Point' } } }} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DBWPage;