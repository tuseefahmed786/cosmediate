import React from 'react';
import profile from '../assests/Rectangle 12.png'
import notification from '../assests/Group 72 (1).png'

const Header = () => {
  return (
    <header className="bg-white  p-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold mb-6">Cosmediate</h2>
      <input
        type="text"
        placeholder="Search"
        className="border rounded-lg p-2 w-1/3 focus:outline-none"
      />
      <div className="flex items-center gap-4">
        <img
            src={notification}
            alt="Profile"
            className="w-6 h-6 rounded-full"
            />
        <div className="flex items-center gap-2">
          <img
            src={profile}
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <p className="font-medium">Tim Bouwman</p>
            <p className="text-sm text-gray-500">Aéstec Amsterdam</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;