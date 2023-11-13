const Solution = () => {
  return (
    <div className="container">
      <div className="py-4">
        <h1>Our Solutions</h1>
      </div>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-8">
          <h5 className="fs-2">Energy Optimization</h5>
          <p>
            <small>
              {" "}
              Proximity sensors/ Motion sensors/ Wireless controlled Relays/ Two
              way wireless relays/ Curtain Motors/ energy optimization settings
              on Mobile App.
            </small>
          </p>
        </div>
      </div>
      <div className="row pt-5">
        <div className="col-md-4">
          <div>
            <img
              src="./images/solution/coeus_SMART.jpg"
              alt="smart"
              style={{ width: "100%", height: "100%" }}
            />
            <img
              src="./images/solution/solutions-1.png"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
        <div className="col-md-8">
          <ul className="list-custom">
            <li>
              Our solution is based on optimally placing motion sensor and
              occupancy sensors in rooms, Lobbies, walkways, entrances to detect
              the occupancy, motion and switch on lights and fans only when the
              room is occupied and switch off when there is no occupant in the
              room for long time.
            </li>
            <li>
              Sense Outdoor light to turn your lights in the Garden/Compound
              Area when it gets Dark and Turn off by Bed time or at Sunrise time
            </li>
            <li>
              Turn your lighting needs during predefined times(Turn On the
              Living room, Bed, Kitchen, walkway lights based on default setting
              in the evening and turn off by a schedule time or at scheduled
              time if no one is present)
            </li>
            <li>
              Switch off appliances/lights/geysers/AC remotely if they are left
              on by mistake
            </li>
            <li>Turn off unwanted lights when there is a power failure</li>
            <li>
              Remotely control the Lights (When you are way from home, Control
              your home from Abroad or other Area within your city)
            </li>
            <li>Dim for ambience/mode setting</li>
            <li>Schedule your Lights on/off- Alarm/Timer</li>
            <li>
              Set Rules(Switch of the lights when the door is closed or turn off
              all lights by 11pm)
            </li>
            <li>Set Scenarios for Party, Movie Watching, Day or Night</li>
            <li>
              Get Alerts on your mobile app when there is an unauthorized use.
            </li>
          </ul>
        </div>
      </div>

      {/* second box  home security*/}

      <div className="container pt-5">
        <div>
          <h5 className="fs-2">Home Security</h5>
          <p className="text-small">
            <small>
              Occupancy Sensors/ Motion Sensor /Camera/Flood Sensor/ Smoke
              Sensor/Door Lock/Vibration sensor/ Garage Door controller/ Panic
              Button
            </small>
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <ul className="list-custom">
              <li>
                Motion Sensors automatically sends alert if there is an abnormal
                movement in your home.
              </li>
              <li>
                Sensors detect Door/Window opening & send Email/SMS alerts
              </li>
              <li>
                Switches on lights based on time and preset conditions on door
                open/close
              </li>
              <li>
                Detect window glass break with vibration sensors and send alert
                on your phone.
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <div>
              <img
                src="./images/solution/coeus_SENSOR.jpg"
                alt="sensor"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
        <div className="row py-4">
          <div className="col-md-4">
            <div>
              <img
                src=".\images\solution\coeus_24X7.jpg"
                alt="24/7 solution"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
          <div className="col-md-8">
            <ul className="list-custom">
              <li>
                Camera automatically captures & transmits picture of intruder
                via Email
              </li>
              <li>
                Pan & Tilt/Fixed Cameras to monitor elderly, kids, household
                help
              </li>
              <li>
                Night Vision Cameras that can take good pictures even in total
                darkness
              </li>
              <li>Check on your home from anywhere in the world</li>
              <li>Outdoor Camera for 24*7 Monitoring</li>
              <li>
                Detect Smoke and send fire alert on your mobile and turn on
                alarms, Turn off mains power except emergency lights.
              </li>
              <li>Operate your Alarm Sirens during Emergency</li>
            </ul>
          </div>
        </div>
        {/* next card */}
        <div className="row py-4">
          <div className="col-md-8">
            <ul className="list-custom">
              <li>
                Door Locks can be remotely unlocked using Web Browser or Phones
                (Ex. If your child or spouse had forgotten to carry keys, you
                can remotely open the door lock).
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <div>
              <img
                src="\images\solution\doorLock.jpg"
                alt="door lock"
                style={{ width: "70%", height: "70%" }}
              />
            </div>
          </div>
        </div>
        {/* next card vdp */}
        <div className="row py-4">
          <div className="col-md-4">
            <div>
              <img
                src="\images\solution\coeus_CCTV.jpg"
                alt="vdp"
                style={{ width: "70%", height: "70%" }}
              />
            </div>
          </div>
          <div className="col-md-8">
            <ul className="list-custom">
              <li>
                Video Door Phone Solutions with two way communication (Can be
                activated on pressing the calling bell, no need to have separate
                cameras).
              </li>
            </ul>
          </div>
        </div>
        {/* next card mobile phone access */}
        <div className="row py-5">
          <div className="col-md-8">
            <ul className="list-custom">
              <li>Access your logs to see when & who opened the Door Lock.</li>
            </ul>
          </div>
          <div className="col-md-4">
            <div>
              <img
                src="\images\solution\mobile.jpg"
                alt="mobile"
                style={{ width: "70%", height: "70%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
