import React from "react";
import Nav from "react-bootstrap/esm/Nav";
import { IconContext } from "react-icons";
import { FiHome, FiCalendar } from "react-icons/fi";

function Sidebar() {
  return (
    <Nav className="bg-dark flex-column sidebar">
      <IconContext.Provider value={{ size: 24 }}>
        <Nav.Item>
          <Nav.Link href="/home" active={true}>
            <FiHome />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/calendar">
            <FiCalendar />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/test123">test123</Nav.Link>
        </Nav.Item>
      </IconContext.Provider>
    </Nav>
  );
}

export default Sidebar;
