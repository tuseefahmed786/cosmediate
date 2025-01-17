import React, { useState } from 'react';

const Settings = () => {
  const [treatments, setTreatments] = useState([
    'Chemical Peels',
    'Microdermabrasion',
    'Laser Treatments',
    'Light Therapies',
  ]);

  const [newTreatment, setNewTreatment] = useState('');

  const addTreatment = () => {
    if (newTreatment) {
      setTreatments([...treatments, newTreatment]);
      setNewTreatment('');
    }
  };

  const removeTreatment = (index) => {
    setTreatments(treatments.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white p-6 rounded-lg ">
      <h2 className="text-xl font-bold mb-4">Skin improvement ({treatments.length})</h2>
      <ul className="mb-4">
        {treatments.map((treatment, index) => (
          <li
            key={index}
            className="flex items-center justify-between p-2 border-b"
          >
            {treatment}
            <button
              onClick={() => removeTreatment(index)}
              className="text-red-500 hover:text-red-700"
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Select Treatment..."
          value={newTreatment}
          onChange={(e) => setNewTreatment(e.target.value)}
          className="border rounded-lg p-2 flex-grow focus:outline-none"
        />
        <button
          onClick={addTreatment}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          +
        </button>
      </div>
      <div className="flex justify-end gap-4 mt-4">
        <button className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300">
          Cancel
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Save
        </button>
      </div>
    </div>
  );
};

export default Settings;