import "./Footer.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SocialIcons from "../ContactUs/SocialIcons";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="container-fluid footer-bg text-white">
      <div className="row justify-content-center border-bottom border-secondary">
        <div className="col-md-12 d-flex justify-content-center align-items-center py-5">
          <h5 className="px-5">Get a Free Home Automation Consultation</h5>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/contactus")}
          >
            Contact Us
          </button>
        </div>
      </div>
      <div className="py-5">
        <SocialIcons />
      </div>
      <div className="row">
        <div className="col-12 pt-2 border-top d-flex justify-content-center align-items-center">
          <div>
            <p>© 2023 Copyright: Coeus Automation (OPC) Pvt Ltd</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
