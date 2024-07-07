import React, { useState } from "react";
import { useEffect } from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Makeup from "./Components/Makeup";
import Perfume from "./Components/Perfume";
import BoysBag from "./Components/BoysBag";
import GirlsBag from "./Components/GirlsBag";
import EarRings from "./Components/EarRings";
import Rings from "./Components/Rings";
import Bakery from "./Components/Bakery";
import Drinks from "./Components/Drinks";
import Chips from "./Components/Chips";
import Candy from "./Components/Candy";
import Cart from "./Components/Cart";
import Payment from "./Components/Payment";
import OrderConfirmed from "./Components/OrderConfirmed";
import Footer from "./Components/Footer.jsx";
export default function Layout() {
  const [cartData, setCart] = useState([]);


  const addToCart = (data) => {
    let warning =false;
    cartData.forEach((datas) => {
      if (data.Name == datas.Name) {
        warning=true;
      }
    });

    if (warning) {
      alert("Item already in Cart");
      setTimeout(()=>{
        warning=false;
      });
      return ;
    }
    alert("Item added in Cart");
    setCart((datas) => [...datas, data]);
  };

  const DeleteData = (id) => {
    const FilteredData = cartData.filter((data, index) => index != id);
    setCart([...FilteredData]);
  };

  const [total, setTotal] = useState(0);

  useEffect(() => {
    ChangePrice();
  });

  const ChangePrice = () => {
    let tot = 0;
    cartData.map((data) => (tot += data.Price * data.Quantity));
    setTotal(tot);
  };

  const QuantityChange = (item, val) => {
    let ind;

    cartData.forEach((data, index) => {
      if (data.Name == item.Name) {
        ind = index;
      }
    });

    cartData[ind].Quantity += val;

    if (cartData[ind].Quantity == 0) {
      cartData[ind].Quantity = 1;
    }

    setCart([...cartData]);
  };
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar size={cartData.length} />}>
          <Route index element={<Home />} />
          <Route path="/makeup" element={<Makeup addToCart={addToCart} />} />
          <Route path="/perfume" element={<Perfume addToCart={addToCart} />} />
          <Route path="/boysBag" element={<BoysBag addToCart={addToCart} />} />
          <Route path="/girlsBag" element={<GirlsBag addToCart={addToCart} />}/>
          <Route path="/earRings" element={<EarRings addToCart={addToCart} />} />
          <Route path="/rings" element={<Rings addToCart={addToCart} />} />
          <Route path="/bakery" element={<Bakery addToCart={addToCart} />} />
          <Route path="/drinks" element={<Drinks addToCart={addToCart} />} />
          <Route path="/chips" element={<Chips addToCart={addToCart} />} />
          <Route path="/candy" element={<Candy addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartData={cartData} DeleteData={DeleteData} total={total} QuantityChange={QuantityChange}/>}/>
          <Route path="/payment" element={<Payment/>} />
          <Route path="/order" element={<OrderConfirmed/>} />
        </Route>
      </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}
