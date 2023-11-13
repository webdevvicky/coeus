import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div className="bg-cont">
        <div className="bg-hero row">
          <div className="col-md-6 text-sm-center text-md-start text-white p-md-5 ">
            <h1>It's time for smart living</h1>
            <hr />
            <div>
              <div>
                <p>
                  {" "}
                  Get Burglary, Fire and Flood alert on your phone <br />- not
                  just video recording
                </p>
              </div>
              <div>
                <p>
                  Save Electricity by optimally operating your lights and
                  appliances <br /> - based on your presence
                </p>
              </div>
              <div>
                <p>
                  {" "}
                  Add convenience to operate your home remotely <br /> - from
                  your mobile app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center p-5 fs-5">
        <Link
          to="http://www.google.com"
          className="text-decoration-none text-center"
        >
          Visit our Smart Home Experience Center in Chennai at{" "}
          <span>
            <i className="bi bi-geo-fill"></i>
          </span>
        </Link>
      </div>
      {/* ////////////////// card page /////////////////////////// */}
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6 card-group text-center">
            <div className="card shadow p-3 mb-5 bg-body rounded">
              <img
                src="./images/homeSecure.jpg"
                alt="Home Security"
                className="card-img shadow"
              />
              <div className="card-body">
                <h5 className="card-title text-primary">Home Security</h5>
                <p className="text-success">
                  <i>An Intelligent Home which keeps you Safe and Secure </i>
                </p>
                <p className="card-text">
                  Get alerted for a Burglary attempt, Fire and Flood on your
                  mobile phone using wireless safety devices installed in your
                  home.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 card-group text-center hover">
            <div className="card shadow-lg p-3 mb-5">
              <div className="bg-image hover-zoom">
                <img
                  src="./images/energyManage.jpg"
                  alt="energy management"
                  className="card-img shadow"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-primary">Energy Management</h5>
                <p className="text-success">
                  <i>An Automated Home which saves Energy</i>
                </p>
                <p className="card-text">
                  Our systems sense the presence of occupants inside the Living
                  Rooms, Kitchen, Toilets and intelligently switch off/on the
                  lights, fans, air conditioners, Geysers etc, thus saving power
                  other than providing data on the energy used by each
                  electrical equipment.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* second line  */}
        <div className="row mt-5">
          <div className="col-md-6 card-group text-center">
            <div className="card shadow p-3 mb-5 bg-body rounded">
              <img
                src="./images/wirelessControl.jpg"
                alt="Wireless Control"
                className="card-img shadow"
              />
              <div className="card-body">
                <h5 className="card-title text-primary">Wireless Control</h5>
                <p className="text-success">
                  <i>All wireless and requires no additional Wiring</i>
                </p>
                <p className="card-text">
                  No changes to your existing wiring and switches. Just add
                  wireless sensors and relays to start operating them remotely
                  through your Hub and control from your Android or iOS Mobile
                  phone.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 card-group text-center hover">
            <div className="card shadow-lg p-3 mb-5">
              <div className="bg-image hover-zoom">
                <img
                  src="./images/Fibaro_devices1.jpg"
                  alt="energy management"
                  className="card-img shadow"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-primary">Remote Access</h5>
                <p className="text-success">
                  <i>Convenience to access your home from anywhere</i>
                </p>
                <p className="card-text">
                  You can check the status of your electrical devices and as
                  well as control your house electrical fittings, door locks
                  including A/C from any place. As long as you’re connected to
                  the Internet you can always see what’s going on in your house.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* third line  */}
        <div className="row mt-5">
          <div className="col-md-6 card-group text-center">
            <div className="card shadow p-3 mb-5 bg-body rounded">
              <img
                src="./images/incremental.jpg"
                alt="energy management"
                className="card-img shadow"
              />
              <div className="card-body">
                <h5 className="card-title text-primary">
                  Incremental Features
                </h5>
                <p className="text-success">
                  <i>
                    Start automating your home with basic feature and add
                    features incrementally
                  </i>
                </p>
                <p className="card-text">
                  We can implement smart features in your existing home or new
                  house or apartment in one go or you could add features based
                  on your priority for security or to optimize electricity use
                  or to add convenience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 card-group text-center hover">
            <div className="card shadow-lg p-3 mb-5">
              <div className="bg-image hover-zoom">
                <img
                  src="./images/compatibility.jpg"
                  alt="energy management"
                  className="card-img shadow"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-primary">Compatibility</h5>
                <p className="text-success">
                  <i>Never get outdated as we follow Intl.standards</i>
                </p>
                <p className="card-text">
                  The smart system components we provide follows international
                  standard wireless protocol Z-wave which is designed for Home
                  automation and meets Indian RF frequency band. There are more
                  than 2100+ Z wave Certified Interoperable devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
