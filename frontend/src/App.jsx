import React from "react";
import Navbar from "./Components/Shared/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Pages/Cart/Cart";
import Order from "./Pages/Order/Order";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Shared/Footer";

const App = () => {
  return (
    <>
      <div className="app">
        {/* <ScrollToTop /> */}
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Navbar/>}> */}
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          {/* </Route> */}
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
