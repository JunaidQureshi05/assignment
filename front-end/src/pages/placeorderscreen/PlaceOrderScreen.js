import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createOrder } from '../../actions/orderActions';
import './PlaceOrderScreen.css';
const PlaceOrderScreen = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  //   Calculate prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 100);
  cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)));
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2);
  console.log(cart);
  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    );
  };
  return (
    <>
      <div className="PlaceOrder">
        <div className="summary">
          <ul variant="flush">
            <li>
              <h2 className="name">Shipping</h2>
              <p>
                <strong>Adress:</strong>
                {cart.shippingAddress.address},{cart.shippingAddress.city},
                {cart.shippingAddress.postalCode},{cart.shippingAddress.country}
              </p>
            </li>
            <li>
              <h2 className="name">Payment Method</h2>
              <strong>Method: </strong>
              {cart.paymentMethod}
            </li>
            <li>
              <h2 className="name">Order Items</h2>
              {cart.cartItems.length === 0 ? (
                <h1 className="name">Your cart is empty</h1>
              ) : (
                <ul>
                  {cart.cartItems.map((item, index) => (
                    <li key={index}>
                      <div>
                        <div md={1}>
                          <img src={item.image} alt={item.name} fluid rounded />
                        </div>
                        <div>
                          <Link to={`/products/${item.product}`}>
                            {item.name}
                          </Link>
                        </div>
                        <div md={4}>
                          {item.qty} x ${item.price} =
                          <strong>
                            {' '}
                            ${(item.qty * item.price).toFixed(2)}
                          </strong>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
        <div className="price">
          <div>
            <ul>
              <li>
                <h2 className="name">Order Summary</h2>
              </li>
              <li>
                <div>
                  <div className="bold">Items</div>
                  <div>${cart.itemsPrice}</div>
                </div>
              </li>
              <li>
                <div>
                  <div className="bold">Shipping</div>
                  <div>${cart.shippingPrice}</div>
                </div>
              </li>
              <li>
                <div>
                  <div className="bold">Tax</div>
                  <div>${cart.taxPrice}</div>
                </div>
              </li>
              <li>
                <div>
                  <div className="bold">Total</div>
                  <div>${cart.totalPrice}</div>
                </div>
              </li>

              <li>
                <button
                  type="button"
                  className="btn-block"
                  disabled={cart.cartItems === 0}
                  onClick={placeOrderHandler}
                >
                  Place Order
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceOrderScreen;
