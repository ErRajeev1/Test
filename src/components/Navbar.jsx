import React from "react";

const Navbar = () => {
  const listStyle = {
    padding : "2rem",
    listStyle: "none"
  }
  return (
    <>
    <div className="main" style={{display : "flex"}}>
      <h1>Navbar</h1>
      <ul style={{display : "flex", padding : "2rem"}}>
        <li style={listStyle} >Home</li>
        <li style={listStyle}>About</li>
        <li style={listStyle}>Contact</li>
        <li style={listStyle}>Help</li>
      </ul>
    </div>
    </>
  );
};

export default Navbar;
