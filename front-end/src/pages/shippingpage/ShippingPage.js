import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './ShippingPage.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveShippingAddress } from '../../actions/cartActions';
const ShippingPage = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo: user } = userLogin;
  const navigate = useNavigate();
  //   useEffect(() => {
  //     // if (!user) {
  //     //   console.log('not user');
  //     //   navigate('/login');
  //     // }
  //   }, [userLogin]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({
        address,
        city,
        postalCode,
        country,
      })
    );
    navigate('/payment');
  };
  return (
    <div className="Form">
      <div />
      <div className="form-container">
        <h1 className="name">Shipping</h1>
        <form onSubmit={submitHandler}>
          <div className="form-group" controlId="address">
            <label>Address</label>
            <input
              type="text"
              placeholder="Enter address"
              value={address}
              required
              onChange={(e) => setAddress(e.target.value)}
            ></input>
          </div>

          <div className="form-group" controlId="city">
            <label>City</label>
            <input
              type="text"
              placeholder="Enter city"
              value={city}
              required
              onChange={(e) => setCity(e.target.value)}
            ></input>
          </div>

          <div className="form-group" controlId="postalCode">
            <label>Postal Code</label>
            <input
              type="text"
              placeholder="Enter postal code"
              value={postalCode}
              required
              onChange={(e) => setPostalCode(e.target.value)}
            ></input>
          </div>

          <div className="form-group" controlId="country">
            <label>Country</label>
            <input
              type="text"
              placeholder="Enter country"
              value={country}
              required
              onChange={(e) => setCountry(e.target.value)}
            ></input>
          </div>

          <button className="mt-2" type="submit" variant="primary">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShippingPage;
