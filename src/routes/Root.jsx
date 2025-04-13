import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Statistics from "../pages/Statistics";
import AllProducts from "../components/categoryComponents/AllProducts";
import Accessories from "../components/categoryComponents/Accessories";
import Phones from "../components/categoryComponents/Phones";
import Laptops from "../components/categoryComponents/Laptops";
import Watches from "../components/categoryComponents/Watches";
import Error from "../pages/Error";
import ProductDetails from "../pages/ProductDetails";
import Carts from "../components/basic/Carts";
import Wishlist from "../components/basic/Wishlist";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    loader: () => fetch("../allProducts.json"),
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <AllProducts></AllProducts>,
            loader: () => fetch("../allProducts.json"),
          },
          {
            path: "laptops",
            element: <Laptops></Laptops>,
            loader: () => fetch("../laptops.json"),
          },
          {
            path: "phones",
            element: <Phones></Phones>,
            loader: () => fetch("../phones.json"),
          },
          {
            path: "watches",
            element: <Watches></Watches>,
            loader: () => fetch("../watches.json"),
          },
          {
            path: "accessories",
            element: <Accessories></Accessories>,
            loader: () => fetch("../accessories.json"),
          },
        ],
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "/dashboard",
            element: <Carts></Carts>,
          },
          {
            path: "wishlist",
            element: <Wishlist></Wishlist>,
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails></ProductDetails>,
      },
    ],
  },
]);

export default router;
