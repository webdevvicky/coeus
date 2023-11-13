import "./Product.css";
interface Props {
  imgsrc: string;
  title: string;
}

const Productcard = ({ imgsrc, title }: Props) => {
  return (
    <div className="card product-card shadow border-primary border">
      <div className="product-img text-center">
        <img src={imgsrc} alt={title} className="img-fluid" title={title} />
      </div>
      <div className="card-body">
        <p className="card-title text-center text-primary fs-5">{title}</p>
      </div>
    </div>
  );
};

export default Productcard;
