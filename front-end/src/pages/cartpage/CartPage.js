import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { addToCart } from '../../actions/cartActions';
import { removeFromCart } from '../../actions/cartActions';
import { useNavigate } from 'react-router-dom';
import './CartPage.css';
const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const { cartItems } = cart;
  console.log(cartItems);
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  const checkoutHandler = () => {
    navigate('/shipping');
  };
  return (
    <div className="Cart">
      <div>
        <h1 className="name">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <div variant="info">
            Your cart is empty <Link to="/">Go Back</Link>
          </div>
        ) : (
          <ul variant="flush">
            {cartItems.map((item) => (
              <li key={item.product}>
                <div className="cartItem">
                  <div md={2}>
                    <img src={item.image} alt={item.name} fluid rounded />
                  </div>
                  <div md={3}>
                    <Link to={`/products/${item.product}`}>{item.name}</Link>
                  </div>
                  <div md={2}>${item.price}</div>
                  <div md={2}>
                    <select
                      as="select"
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div md={2}>
                    <button
                      type="button"
                      variant="light"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div md={4}>
        <div>
          <ul variant="flush">
            <li>
              <h2>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                items
              </h2>
              $
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </li>
            <li>
              <button
                type="button"
                className="btn-block"
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed To Checkout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
