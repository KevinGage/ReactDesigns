import React from 'react';
import Nav from 'react-bootstrap/esm/Nav';
import { IconContext } from "react-icons";
import { FiHome, FiCalendar } from "react-icons/fi";
import './Sidebar.css'

function Sidebar() {
  return (
    <Nav className="bg-dark flex-column sidebar">
      <IconContext.Provider value={{ size: 24 }}>
        <Nav.Item class="navItem">
          <Nav.Link href="/home"><FiHome /></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home"><FiCalendar/></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">test123</Nav.Link>
        </Nav.Item>
      </IconContext.Provider>
    </Nav>
  );
}

export default Sidebar;