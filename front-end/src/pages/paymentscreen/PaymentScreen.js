import React from 'react';
import './PaymentScreen.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { savePaymentMethod } from '../../actions/cartActions';
const PaymentScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [paymentMethod, setPaymentMethod] = useState('PayPal');
  const { shippingAddress } = cart;
  if (!shippingAddress) {
    navigate('/shipping');
  }
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate('/placeorder');
  };
  return (
    <div className="Payment">
      <div className="payment-container">
        <h1>Payment Method</h1>
        <form onSubmit={submitHandler}>
          <div>
            <label as="legend">Select Method</label>
            <div>
              <input
                type="radio"
                label="PayPal or Credit Card"
                id="PayPal"
                name="paymentMethod"
                value="PayPal"
                checked
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></input>{' '}
              PayPal
            </div>
          </div>

          <button className="mt-3" type="submit" variant="primary">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentScreen;
