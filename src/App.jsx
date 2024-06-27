import Header from "./Components/Layout/Header";
import Hero from "./Components/Hero/Hero";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./Context/CartProvider";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);
  const showCartHandler = () => {
    setCartIsShow(true);
  };

  const hideCartHandler = (e) => {
    e.preventDefault();
    setCartIsShow(false);
  };
  return (
    <CartProvider>
      {cartIsShow && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}></Header>
      <Hero></Hero>
      <Products></Products>
    </CartProvider>
  );
}

export default App;
