import { useEffect, useState } from "react";
import Productdata from "./Productdata";
import Productcard from "./Productcard";
import { useNavigate } from "react-router-dom";

interface Props {
  id: number;
  title: string;
  imgsrc: string;
  producttype: string;
  description: string;
}

interface CategorizedProducts {
  type: string;
  products: Props[];
}

const Product = () => {
  const [products, setProducts] = useState<CategorizedProducts[]>([]);

  useEffect(() => {
    const uniqueProductTypes = [
      ...new Set(Productdata.map((data) => data.producttype)),
    ];

    const categorizedProducts = uniqueProductTypes.map((type) => ({
      type,
      products: Productdata.filter((data) => data.producttype === type),
    }));

    setProducts(categorizedProducts);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="container">
      <header>
        <h4 className="py-5">Fibaro product</h4>
      </header>
      {products.map(({ type, products }) => (
        <div key={type}>
          <h4>{type}</h4>
          <div className="row">
            {products.map((product) => (
              <div
                onClick={() => navigate(`/fibaro/detail/${product.id}`)}
                key={product.id}
                className="col-sm-6 col-md-4 col-lg-3 card-group my-4 product-link"
              >
                <Productcard imgsrc={product.imgsrc} title={product.title} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
