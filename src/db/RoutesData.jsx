import About from "../pages/About";
import Contact from "../pages/Contact";
import Devices from "../pages/Devices";
import Home from "../pages/Home";
import OurProducts from "../pages/OurProducts";
import Search from "../pages/Search";
import WeBuy from "../pages/WeBuy";

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