import { useContext } from "react";

import ProductDisplay from "../Products/ProductDisplay";
import Home from "../Pages/Home";
import About from "../Pages/About";
import ContactUs from "../Pages/ContactUs";
import { Route, Routes, Navigate } from "react-router-dom";
import ProductPage from "../Products/ProductPage";
import AuthForm from "../Pages/AuthForm";
import AuthContext from "../../Store/AuthContext";

export const routePath = {
  Home: "/",
  Default: "*",
  Store: "/store",
  About: "/about",
  ContactUs: "/contact-us",
  ProductPage: "/store/product",
  Login: "/login",
};

const Routers = () => {
  const authCtx = useContext(AuthContext);

  return (
    <div>
      <Routes>
        <Route path={routePath.Home} element={<Home />} />
        <Route path={routePath.Default} element={<Home />} />
        <Route
          path={routePath.Store}
          element={
            authCtx.isLoggedIn ? (
              <ProductDisplay />
            ) : (
              <Navigate to={routePath.Login} />
            )
          }
        />
        <Route path={routePath.ProductPage} element={<ProductPage />} />
        <Route path={routePath.About} element={<About />} />
        <Route path={routePath.Login} element={<AuthForm />} />
        <Route path={routePath.ContactUs} element={<ContactUs />} />
      </Routes>
    </div>
  );
};

export default Routers;
