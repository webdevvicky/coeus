import "./Services.css";
const Services = () => {
  return (
    <div className="container">
      <div className="py-3">
        <h1>Our Services</h1>
      </div>
      <div className="row py-5">
        <div className="col-md-4">
          <div>
            <img
              src="./images/services/services-1.png"
              alt="services"
              className="img-fluid"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
        <div className="col-md-8">
          <div>
            <h6 className="fs-3">
              Upgrade existing home with Smart Home features
            </h6>
          </div>
          <div>
            <ul className="mt-4 list-custom">
              <li>
                We explain the features of smart home and match your needs with
                suitable solution.
              </li>
              <li>
                We design and plan wireless home automation system for Security,
                Energy management and comfort with sensor, relays, dimmers,
                automated curtains, roller shutters, camera, wireless door locks
                for your home along with a computer hub which controls them and
                connects to you and your family members mobile phones.
              </li>
              <li>
                We install and integrate the wireless sensors and actuators in
                your existing electrical system with trained electricians and
                demonstrate the system.
              </li>
              <li>
                Train your family members to operate the smart system from their
                MobileApp.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row py-5">
        <div className="col-md-8">
          <div>
            <h6 className="fs-3">
              If you are buying a new apartment or building a house
            </h6>
          </div>
          <div>
            <ul className="mt-4 list-custom">
              <li>
                We explain the features of Home automation and match with needs
                to understand the automation needs within your budget.
              </li>
              <li>
                We work with your architects and builders to additionally
                provision wireless home automation system for Security and
                Energy Management with sensor, relays, dimmers, automated
                curtains, roller shutters, camera, wireless locks along with a
                computer hub which controls and connects to you and your family
                mobile phones.
              </li>
              <li>
                We install and integrate the wireless sensors and actuators in
                your existing electrical system with trained electricians and
                demonstrate the system.
              </li>
              <li>
                After installation we provide the updated drawing of your home
                with automation.
              </li>
              <li>
                Train your family members to operate the smart system from their
                MobileApp.
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <img
              src="./images/services/servcies-2.png"
              alt="services"
              className="img-fluid"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>

      {/* table content */}
      <div>
        <div className="py-5">
          <h6 className="fs-3 pb-2"> Incremental Implementation</h6>
          <p>
            The Home automation system can be implemented in phases as listed
            below in Table starting from Rs.50,000/- based on your budget.
            Estimated cost can be provided based on your house design or after
            site visit.
          </p>
        </div>
        <div className="pb-5">
          <table className="table table-hover table-bordered border-primary text-center">
            <thead className="table-info border-primary">
              <tr>
                <th>Phases</th>
                <th>Features</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Phase 1 (Security)</td>
                <td>
                  Home automation Hub, Main Doors and Balcony Windows armed with
                  sensors, Electronic Door Lock and #4 Cameras
                </td>
              </tr>

              <tr>
                <td>Phase 2 (All Lights, Fans,Geyzer)</td>
                <td>All Lights , Fans, Geyzers under Automatic control</td>
              </tr>
              <tr>
                <td>Phase 3(AC, Curtains, TV, Audio)</td>
                <td>
                  Smart Airconditioners control, TV & Audio Smart control and
                  Smart Curtains
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Services;
