import "./ContactUs.css";
import SocialIcons from "./SocialIcons";
import GoogleMap from "./GoogleMap";
const ContactUs = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="container mt-5 vh-100">
        <div className="row">
          <div className="col-sm-12 col-md-7">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="form-floating mb-3 col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput" className="text-muted">
                    Your Name
                  </label>
                </div>
                <div className="form-floating mb-3 col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Your Email</label>
                </div>
              </div>
              <div className="row">
                <div className="form-floating mb-3 col-md-6">
                  <input
                    type="tel"
                    className="form-control "
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Your Phone</label>
                </div>
                <div className="form-floating mb-3 col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Your company</label>
                </div>
              </div>
              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: "100px" }}
                ></textarea>
                <label htmlFor="floatingTextarea2">Comments</label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>

          {/* address  section */}

          <address className="col-sm-12 col-md-5 bg-contactus text-white">
            <div className="text-center my-4">
              <h2>Experience Center</h2>
            </div>
            <div>
              <ul className="address-ul align-items-center justify-content-center ">
                <li className=" d-flex ">
                  <i className="bi bi-geo-alt pe-4 fs-4 "></i>
                  <p>
                    Coeus Automation (OPC) Pvt Ltd, <br /> 4/451, 7th South
                    Cross St,
                    <br /> Sri Kapaleeswarar Nagar, Neelankarai, <br />
                    Chennai, Tamil Nadu 600041
                  </p>
                </li>
                <li className="d-flex py-4">
                  <i className="bi bi-telephone pe-4 fs-4"></i>
                  <p>+91 9840877304</p>
                </li>
                <li className="d-flex ">
                  <i className="bi bi-envelope pe-4 fs-4"></i>
                  <p>coeusautomation@gmail.com</p>
                </li>
              </ul>
              <hr />
              <div className="pb-4">
                <SocialIcons />
              </div>
            </div>
          </address>
        </div>
      </div>
      <GoogleMap />
    </div>
  );
};

export default ContactUs;
