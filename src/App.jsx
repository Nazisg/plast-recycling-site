import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Modal from "./components/Modal";
import ContextApi from "./context-api/context";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Routers from "./routers/Routers";

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
        {isOpen ? <Modal /> : null}
      </ContextApi.Provider>
    </>
  );
}

export default App;
