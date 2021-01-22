import { useState } from "react";
import MenuItem from "../MenuItem/MenuItem";
import { IconContext } from "react-icons";
import { FiHome, FiCalendar } from "react-icons/fi";

function Sidebar() {
  const [hover, setHover] = useState(false);

  const mouseEnterHandler = () => {
    setHover(true);
  };
  const mouseLeaveHandler = () => {
    setHover(false);
  };

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      style={{ width: `${hover ? "255px" : "74px"}` }}
      className={"sidebar-wrapper"}
    >
      <IconContext.Provider value={{ size: 24 }}>
        <nav className={`sidebar ${hover ? "" : "sidebar-collapsed"}`}>
          <MenuItem
            icon={<FiHome />}
            label={"Home"}
            location={"/home"}
            active={true}
          />
          <MenuItem
            icon={<FiCalendar />}
            label={"Calendar"}
            location={"/calendar"}
            active={false}
          />
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Sidebar;
