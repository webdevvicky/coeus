import { useEffect, useState } from "react";
import Productdata from "./Productdata";
import Productcard from "./Productcard";

interface Props {
  id: number;
  title: string;
  imgsrc: string;
  producttype: string;
  description: string;
}

interface CategorizedProduct {
  type: string;
  products: Props[];
}

const OtherProduct = () => {
  const [products, setProducts] = useState<CategorizedProduct[]>([]); // Update the state type here
  const productTypes = ["sensor", "actors", "remote", "gateway"];

  useEffect(() => {
    // Use map to categorize products by producttype
    const categorizedProducts = productTypes.map((type) => ({
      type,
      products: Productdata.filter((product) => product.producttype === type),
    }));

    setProducts(categorizedProducts);
  }, []);
  console.log(products);
  return (
    <div className="container">
      <header>
        <h5 className="py-5">OtherProduct</h5>
      </header>
      {products.map(({ type, products }) => (
        <section key={type}>
          <h4>{type}</h4>
          <div className="row">
            {products.map((product) => (
              <div
                key={product.id}
                className="col-sm-6 col-md-4 col-lg-3 card-group my-4"
              >
                <Productcard imgsrc={product.imgsrc} title={product.title} />
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default OtherProduct;
