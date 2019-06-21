import React from "react";

const Header = props => {
  return (
    <div id="header" className="header">
      {props.children}
    </div>
  );
};

export default Header;
