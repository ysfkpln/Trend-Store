import { useContext } from "react";
import "./CartItem.css";
import { CartContext } from "../../Context/CartProvider";

const CartItem = (props) => {
  const { removeItem } = useContext(CartContext);
  return (
    <li className="cart-item">
      <div className="cart-item-img">
        <img src={props.product.img} alt={props.product.name} />
      </div>
      <div className="cart-item-info">
        <div className="cart-item-text">
          <b>cart item name</b>
          <div>
            <span>₺{props.product.price} x </span>
            <span className="cart-item-amount">{props.product.amount}</span>
          </div>
        </div>
        <a
          href="/"
          className="cart-item-remove"
          onClick={(e) => {
            e.preventDefault();
            removeItem(props.product.id);
          }}
        >
          X
        </a>
      </div>
    </li>
  );
};

export default CartItem;

import PropTypes from "prop-types";

CartItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
};
