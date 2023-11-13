import React from "react";
import { Link } from "react-router-dom";

const SocialIcons = () => {
  return (
    <div className="row ">
      <div className="col-md-12 col-sm-4 col-lg-12 d-flex justify-content-center align-items-center  social-icons">
        <div>
          <Link to="https://www.facebook.com">
            <i className="bi bi-facebook"></i>
          </Link>
        </div>
        <div className="mx-5">
          <Link to="https://www.twitter.com">
            <i className="bi bi-twitter"></i>
          </Link>
        </div>
        <div>
          <Link to="https://www.linkedin.com">
            <i className="bi bi-linkedin"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SocialIcons;
