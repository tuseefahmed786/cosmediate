import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SettingsContent from './components/Settings';
import './index.css'; // or './App.css'
import Treatment from './components/Treatment';

const App = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <div className="flex flex-col flex-grow">
        <Header />

        <div className="flex">
      <Sidebar />
          <Treatment />
        </div>
      </div>
    </div>
  );
};

export default App;
