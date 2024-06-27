/* eslint-disable react/prop-types */
import { useContext } from "react";
import { CartContext } from "../../Context/CartProvider";
import CartItem from "./CartItem";
import OffCanvas from "../UI/OffCanvas";
import "./Cart.css";

const Cart = (props) => {
  const { items, totalAmount, clearItem } = useContext(CartContext);
  const hasItems = items.length > 0;

  const cartItems = (
    <ul className="cart-items">
      {items.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </ul>
  );
  return (
    <OffCanvas onClose={props.onClose}>
      <div>
        <div className="cart-head">
          <h2>Sepetim</h2>
          <a href="#" className="cart-close" onClick={props.onClose}>
            X
          </a>
        </div>
        {cartItems}
        <div className="total">
          <span>Toplam Deger</span>
          <span>{totalAmount.toFixed(2)}₺</span>
        </div>
        {hasItems && (
          <div className="actions">
            <button className="cart-order">Siparis Ver</button>
            <button className="cart-clear" onClick={clearItem}>Temizle</button>
          </div>
        )}
      </div>
    </OffCanvas>
  );
};

export default Cart;
