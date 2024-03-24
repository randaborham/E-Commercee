import React from "react";
import Home from "./pages/Home";
import ProductDerails from "./pages/ProductDetails";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  HashRouter,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";

import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-hidden">
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product/:id" element={<ProductDerails />} />
        </Routes>
        <Sidebar />
        <Footer />
      </HashRouter>
    </div>
  );
};

export default App;
