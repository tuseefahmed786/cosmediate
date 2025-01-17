// App.jsx
import React, { useState, useEffect } from 'react';

const Treatment = () => {
    const [selectedSidebar, setSelectedSidebar] = useState('Treatments');
    const [selectedTreatment, setSelectedTreatment] = useState('Skin improvement');
    const sidebarItems = ['General', 'Password', 'Price', 'Treatments'];
    const [newTreatment, setNewTreatment] = useState('');
    const [treatmentDetails, setTreatmentDetails] = useState(() => {
        // Load from local storage or initialize with default data
        const savedData = localStorage.getItem('treatmentDetails');
        return savedData ? JSON.parse(savedData) : {
            'Skin improvement': ['Chemical Peels', 'Microdermabrasion', 'Laser Treatments', 'Light Therapies'],
            'Injectables': [],
            'Hair removal': [],
            'Soft surgery': [],
            'Plastic surgery': []
        };
    });

    useEffect(() => {
        localStorage.setItem('treatmentDetails', JSON.stringify(treatmentDetails));
    }, [treatmentDetails]);

    const handleAddTreatment = () => {
        if (newTreatment.trim()) {
            setTreatmentDetails((prev) => ({
                ...prev,
                [selectedTreatment]: [...prev[selectedTreatment], newTreatment.trim()]
            }));
            setNewTreatment('');
        }
    };

    const handleDeleteTreatment = (index) => {
        setTreatmentDetails((prev) => ({
            ...prev,
            [selectedTreatment]: prev[selectedTreatment].filter((_, i) => i !== index)
        }));
    };

    const handleSave = () => {
        alert('Changes saved successfully!');
    };

    return (
        <div className="flex w-full p-4 ">
            <div className='flex flex-col w-1/5 h-fit'>
                <h2 className="text-2xl font-bold mb-4">Settings</h2>

                <div className=" bg-[#F3F6FF]  rounded p-1">
                    <ul>
                        {sidebarItems.map((item) => (
                            <li
                                key={item}
                                className={`p-2 text-sm text-[#71788E] rounded cursor-pointer ${selectedSidebar === item ? 'bg-white text-[#6968EC]' : 'hover:bg-gray-100'
                                    }`}
                                onClick={() => setSelectedSidebar(item)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
            <div className="w-1/4  p-4">
                <h2 className="text-lg font-bold mb-4">Treatments</h2>
                <ul>
                    {Object.keys(treatmentDetails).map((item) => (
                        <li
                            key={item}
                            className={`p-2 rounded cursor-pointer ${selectedTreatment === item ? 'bg-[#F2F5FF] text-[#6968EC]' : 'hover:bg-gray-100'
                                }`}
                            onClick={() => setSelectedTreatment(item)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <div className=" bg-[#F9FAFF] w-2/4 rounded p-4 ml-4">
                <h2 className="text-lg font-bold mb-4">
                    {selectedTreatment} ({treatmentDetails[selectedTreatment].length})
                </h2>
                <ul className="mb-4">
                    {treatmentDetails[selectedTreatment].map((treatment, index) => (
                        <li key={index} className="flex items-center justify-between p-2 border rounded mb-2">
                            <span>{treatment}</span>
                            <button
                                className="text-red-500 hover:text-red-700"
                                onClick={() => handleDeleteTreatment(index)}
                            >
                                ✕
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center gap-2 mb-4">
                    <input
                        type="text"
                        value={newTreatment}
                        onChange={(e) => setNewTreatment(e.target.value)}
                        placeholder="Select Treatment..."
                        className="flex-grow p-2 border rounded"
                    />
                    <button 
                        className=" text-[#6968EC] border px-4 py-2 rounded"
                        onClick={handleAddTreatment}
                    >
                        +
                    </button>
                </div>
                <div className="flex justify-end gap-4 w-full">
                    <button
                        className=" text-[#6968EC] border-[#6968EC] w-2/4 px-4 py-2 rounded-xl border"
                        onClick={() => setNewTreatment('')}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-[#6968EC] text-white px-4  w-2/4 py-2 rounded-xl hover:bg-blue-600"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Treatment;
