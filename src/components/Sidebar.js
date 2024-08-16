import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const menuItem = [
        { name: "Journey Board", path: '/', className: 'journey-board' },
        { name: "Explore the world of management", path: '/zz', className: 'explore-world' },
        { name: "Technical Project Management", path: '/user', className: 'technical-project' },
        { name: "Threadbuild", path: '/chart', className: 'threadbuild' },
        { name: "Structure your pointers", path: '/comments', className: 'structure-pointers' },
        { name: "4SA Method", path: '/shopping', className: 'method' }
    ];

    return (
        <div className="container">
            <div style={{ width: isOpen ? "382px" : "132px" }} className="sidebar">
                <div className="top_section">
                    <div style={{ marginLeft: isOpen ? "332px" : "81px" }} className="bars">
                    {isOpen ? <img src='./images/arrow2.png' alt='arrow' onClick={toggle} /> : <img src='./images/arrow.png' alt='arrow' onClick={toggle} />}    
                    </div>
                </div>
                <ul className="menu-list">
                    {menuItem.map((item, index) => (
                        <li key={index} className={item.className}>
                            <NavLink 
                                to={item.path} 
                                className={`link ${item.className}`}
                                activeclassname="active"
                            >
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
                                    {item.name}
                                </div>
                            </NavLink>
                        </li>
                    ))}
                </ul>
                {isOpen ? null : (
                    <div className="box" onClick={toggle}>
                        1
                    </div>
                )} 
                {/* Small box with the number 1 inside it */}
            </div>

            <main>{children}</main>
        </div>
    );
};

export default Sidebar;
