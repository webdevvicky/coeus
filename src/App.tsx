import { Route, Routes } from "react-router-dom";
import Aboutus from "./Components/Aboutus";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import Notfound from "./Components/Notfound";
import Solution from "./Components/Solutions/Solution";
import Product from "./Components/Product/Product";
import OtherProduct from "./Components/Product/OtherProduct";
import Detail from "./Components/Product/ProductDetail/Detail";
import ContactUs from "./Components/ContactUs/ContactUs";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solutions" element={<Solution />} />
        <Route path="/fibaro">
          <Route index element={<Product />} />
          <Route path="/fibaro/detail/:id" element={<Detail />} />
        </Route>
        <Route path="/others" element={<OtherProduct />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
