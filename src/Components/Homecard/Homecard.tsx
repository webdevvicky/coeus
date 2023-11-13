interface Props {
  title: string;
  imagesrc: string;
  shortline: string;
  description: string;
}
const Homecard = ({ title, imagesrc, shortline, description }: Props) => {
  return (
    <div className="card-group text-center">
      <div className="card shadow p-3 mb-5 bg-body rounded">
        <img src={imagesrc} alt={title} className="card-img shadow" />
        <div className="card-body">
          <h5 className="card-title text-primary">{title}</h5>
          <p className="text-success">
            <i>{shortline}</i>
          </p>
          <p className="card-text">{description}</p>
        </div>
      </div>
      <div className="container">
        <div className="row ">
          <div className="col-md-6">
            <Homecard
              title="helloworld"
              imagesrc="./images/logo.jpg"
              shortline="good job"
              description="you done a good job"
            />
          </div>
          <div className="col-md-6">
            <Homecard
              title="helloworld"
              imagesrc="./images/logo.jpg"
              shortline="good job"
              description="you done a good job"
            />
          </div>
        </div>
        <div className="row card-group">
          <div className="col-md-6 card-group">
            <Homecard
              title="helloworld"
              imagesrc="./images/wirelessControl.jpg"
              shortline="good job"
              description="you done a good job"
            />
          </div>
          <div className="col-md-6">
            <Homecard
              title="helloworld"
              imagesrc="./images/incremental.jpg"
              shortline="good job"
              description="you done a good job"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homecard;
