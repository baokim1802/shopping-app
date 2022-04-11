import { Route, Routes } from "react-router-dom";
import Button from "./components/Button";
import MainLayout from "./layouts/MainLayout";
import AccountLayout from "./layouts/AccountLayout";
import About from "./pages/about";
import Page404 from "./pages/404";
import Product from "./pages/product";
import ShippingReturns from "./pages/shipping-returns";
import ShoppingCart from "./pages/ShoppingCart";
import Home from "./pages";
import {
  ACCOUNT_ADDRESS_DETAIL_PATH,
  ACCOUNT_ADDRESS_PATH,
  ACCOUNT_ORDER_DETAIL_PATH,
  ACCOUNT_ORDER_PATH,
  ACCOUNT_PATH,
  ACCOUNT_WISHLIST_PATH,
  PRODUCT_DETAIL_PATH,
  PRODUCT_PATH,
  SHIPPING_RETURNS_PATH,
} from "./core/constants/path";
import ProductList from "./pages/product";
import ProductDetail from "./pages/product/[slug]";
import WishList from "./pages/account/wishlist";
import PersonalInfo from "./pages/account";
import OrderList from "./pages/account/order";
import OrderDetail from "./pages/account/order/[id]";
import AddressList from "./pages/account/address";
import AddressDetail from "./pages/account/address/[id]";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={PRODUCT_PATH} element={<ProductList />} />
          <Route path={PRODUCT_DETAIL_PATH} element={<ProductDetail />} />

          <Route path={ACCOUNT_PATH} element={<AccountLayout />}>
            <Route index element={<PersonalInfo />} />
            <Route path={ACCOUNT_WISHLIST_PATH} element={<WishList />} />

            <Route path={ACCOUNT_ORDER_PATH} element={<OrderList />} />
            <Route path={ACCOUNT_ORDER_DETAIL_PATH} element={<OrderDetail />} />

            <Route path={ACCOUNT_ADDRESS_PATH} element={<AddressList />} />
            <Route
              path={ACCOUNT_ADDRESS_DETAIL_PATH}
              element={<AddressDetail />}
            />
          </Route>

          <Route path={SHIPPING_RETURNS_PATH} element={<ShippingReturns />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
