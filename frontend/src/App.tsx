import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Shop from "./pages/shop/Shop";
import Flix from "./pages/Flix";
import Food from "./pages/Food";
import Cart from "./pages/shop/Cart";

import CartIcon from "./components/CartIcon";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
};

function App() {
  const [cart, setCart] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 p-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={<Shop onAddToCart={handleAddToCart} />}
          />
          <Route path="/flix" element={<Flix />} />
          <Route path="/food" element={<Food />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
        <CartIcon itemCount={cart.length}  />
      </div>
    </div>
  );
}

export default App;
