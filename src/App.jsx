import { Route, Routes } from "react-router-dom";
import Button from "./components/Button";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Product from "./pages/Product";
import ShippingReturns from "./pages/ShippingReturns";
import Shop from "./pages/Shop";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shipping-returns" element={<ShippingReturns />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/butt"
            element={<Button type="gray">Subscribe</Button>}
          />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
