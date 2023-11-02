import "./App.scss";
import Header from "./layout/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Routers from "./routers/Routers";
import Footer from "./layout/Footer";
import Modal from "./components/Modal";
import { useState } from "react";
import ContextApi from "./context-api/context";
import { AnimatePresence } from "framer-motion";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const contextData = { isOpen, setIsOpen };

  return (
    <>
      <ContextApi.Provider value={contextData}>
        <Router>
          <Header />
          <Routers />
          <Footer />
        </Router>
        <AnimatePresence>{isOpen ? <Modal /> : null}</AnimatePresence>
      </ContextApi.Provider>
    </>
  );
}

export default App;
