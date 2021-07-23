import ColorizeIcon from "@material-ui/icons/Colorize";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
const Sidebar = (heading, icon, arrow) => {
  return (
    <div className="pagesection">
      <div className="sidebar">
        <ColorizeIcon className="icon bluricon" fontSize="large" />
        <div className="sidebar-container">
          <p className="headingfordesigner">SWITCH TO DESIGNER</p>
          <ArrowForwardIosIcon className="icon arrowicon" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
