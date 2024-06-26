import React from "react";

const Footer = () => {

   const getDate = () =>{
    let d = new Date
    console.log("jhgfx",d.getFullYear);
    return d.getFullYear()
  }
  // const crt = getDate()


  return (
    <>
      <h1>Footer section...</h1>
      <div className="footer-main">
        <ul>
          <li>Term</li>
          <li>Copy Rights</li>
          <li>{getDate()}</li>
          <li>Etc</li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
