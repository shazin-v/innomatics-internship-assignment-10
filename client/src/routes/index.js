import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import SignUp from "../pages/SignUp";
import PageNotFound from "../pages/404";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Dashboard from "../pages/admin/dashboard";
import App from "../App";
import Success from "../pages/Success";
import Cancel from "../pages/Cancel";
import AllUsers from "../pages/admin/AllUsers";
import AllOrders from "../pages/admin/AllOrders";
import AllProduct from "../pages/admin/AllProduct";
import OrderPage from "../pages/OrderPage";
const Layout = () => (
  <>
    {/* <div className="bg-[#111827]"> */}
    <div className="">
      <Navbar />
      <main className="flex-grow">
        {" "}
        {/* Content here */}
        <Outlet />
      </main>
      <Footer />
    </div>
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Layout />, // Layout wraps the Navbar and children
    element: <App />, // Layout wraps the Navbar and children
    children: [
      {
        path: "*",
        element: <PageNotFound></PageNotFound>,
      },
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login", // No need to prefix with "/"
        element: <Login />,
      },
      {
        path: "signup", // No need to prefix with "/"
        element: <SignUp />,
      },
      {
        path: "about", // No need to prefix with "/"
        element: <About />,
      },
      {
        path: "contact", // No need to prefix with "/"
        element: <Contact />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "success",
        element: <Success />,
      },
      {
        path: "cancel",
        element: <Cancel />,
      },
      {
        path: "order",
        element: <OrderPage />,
      },
      {
        path: "admin-dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "all-users",
            element: <AllUsers />,
          },
          {
            path: "all-products",
            element: <AllProduct />,
          },
          {
            path: "all-orders",
            element: <AllOrders />,
          },
        ],
      },
    ],
  },
]);

export default router;