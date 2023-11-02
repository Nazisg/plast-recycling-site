import WeBuy from "../pages/WeBuy";
import Devices from "../pages/Devices";
import OurProducts from "../pages/OurProducts";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Home from "../pages/Home";
import Search from "../pages/Search";

const RoutesData = [
  { path: "/", element: <Home /> },
  { path: "/we-buy", element: <WeBuy /> },
  { path: "/our-products", element: <OurProducts /> },
  { path: "/devices", element: <Devices /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/search", element: <Search /> },
];
export default RoutesData;
