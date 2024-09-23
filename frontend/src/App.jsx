import React, { useState } from "react";
import Navbar from "./Components/Shared/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Pages/Cart/Cart";
// import Order from "./Pages/Order/Order";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Shared/Footer";
import LoginPopup from "./Components/LoginPopup/LoginPopup";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Verify from "./Pages/Verify/Verify";
import MyOrders from "./Pages/MyOrders/MyOrders";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}
      <div className="app">
        {/* <ScrollToTop /> */}
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          {/* <Route path="/" element={<Navbar/>}> */}
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="myorders" element={<MyOrders />} />
          {/* </Route> */}
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
