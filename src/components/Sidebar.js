import React from 'react';
import dashboard from '../assests/dashboard.png'
import mail from '../assests/fi-rs-envelope.png'
import Schedule from '../assests/fi-rr-calendar.png'
import Reviews from '../assests/fi-rr-comment-user.png'
import Settings from '../assests/fi-rr-settings.png'

const Sidebar = () => {
    return (
        <aside className="bg-white p-4 flex flex-col -r">
            <nav className="flex flex-col gap-4">
                {sideBarData.map((item) => (
                    <a
                        key={item.name}
                        href="#"
                        className="flex text-sm text-gray-500 justify-center flex-col items-center gap-2 p-2 hover:bg-gray-100 rounded-lg"
                    >
                        <img src={item.icon} width={20} alt={item.name} />
                        {item.name}
                    </a>
                ))}
            </nav>
        </aside>
    );
};
const sideBarData = [
    { name: 'Dashboard', icon: dashboard },
    { name: 'Inbox', icon: mail },
    { name: 'Schedule', icon: Schedule },
    { name: 'Reviews', icon: Reviews },
    { name: 'Settings', icon: Settings },
]
export default Sidebar;