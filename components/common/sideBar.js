import React from "react";
import ColorizeIcon from "@material-ui/icons/Colorize";
import Link from "next/link";
const Sidebar = ({ heading, to, darkBrown }) => {
  return (
    <div className="pagesection">
      <Link href={to}>
        <div className={darkBrown ? "sidebarDarkBrown" : "sidebar"}>
          <ColorizeIcon className="icon bluricon" fontSize="large" />
          <div className="sidebar-container">
            <p
              className={
                darkBrown ? "headingforDesignerGolden" : "headingfordesigner"
              }
            >
              {heading}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
