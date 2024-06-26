import React from "react";

const Footer = () => {
  return (
    <>
      <h1>Footer section...</h1>
      <div className="footer-main">
        <ul>
          <li>Term</li>
          <li>Copy Rights</li>
          <li>{new Date.now()}</li>
          <li>Etc</li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
