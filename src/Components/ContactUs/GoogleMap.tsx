import React from "react";

const GoogleMap = () => {
  return (
    <div className="container  ">
      <div className="row">
        <div
          className="col-12 text-center "
          style={{
            position: "relative",
            paddingBottom: "75%",
            height: "0",
            overflow: "hidden",
          }}
        >
          <iframe
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "50%",
            }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.394376722004!2d80.25340147420455!3d12.94659731542772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d2040e46b5b%3A0xf3e18d18e7ebc797!2sCOEUS%20AUTOMATION!5e0!3m2!1sen!2sin!4v1699233849555!5m2!1sen!2sin"
            width="600"
            height="200"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;
