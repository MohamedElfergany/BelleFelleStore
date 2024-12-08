
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";


import Blog from "../pages/Blog";
import Products from "../pages/Products";

import Pages from "../pages/Pages";
import Shop from "../pages/Shop";
import Contant from "../pages/Contant";

const AppRoute = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contant" element={<Contant />} />
      <Route path="/pages" element={<Pages />} />
      <Route path="/shop" element={<Shop />} />
    </Route>
  )
);

export default AppRoute;
