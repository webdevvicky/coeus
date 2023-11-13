import { useParams } from "react-router-dom";
import Productdata from "../Productdata";
const Detail = () => {
  const { id } = useParams();
  const productId = id ? parseInt(id, 10) : undefined;
  const product = Productdata.find((product) => product.id === productId);

  return (
    <div className="container my-5">
      <div className="row vh- d-flex align-items-center justify-content-center">
        <div className="col-md-4 col-sm-12">
          <img
            src={product?.imgsrc}
            alt={product?.title}
            className="detail-img border"
          />
        </div>
        <div className="col-sm-12 col-md-8 border-start  px-5">
          <h4>{product?.title}</h4>
          <div className="my-3 ">
            <p>
              <i>{product?.producttype}</i>
            </p>
          </div>
          <p>{product?.description}</p>
          <button className="btn btn-info text-white border shadow">
            Make Enquiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
