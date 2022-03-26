import React from 'react';
import './DetailsPage.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './DetailsPage.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails } from '../../actions/productActions';
import { addToCart } from '../../actions/cartActions';
import { useNavigate } from 'react-router-dom';
const DetailsPage = () => {
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(listProductDetails(params.id));
  }, []);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, Number(qty)));
    navigate(`/cart`);
  };
  const { name, numReviews, description, price, image, brand, category } =
    product;
  if (loading) {
    return <h1>Loading</h1>;
  }
  return (
    <div className="Details">
      <div className="img">
        <img src={image} />
      </div>

      <div className="details">
        <h1 className="name">{name}</h1>
        <p>{description}</p>
        <p>
          Price: <span className="amount">{price}</span>/-{' '}
        </p>
        <p>
          Brand: <span className="brand">{brand}</span>
        </p>
        <p>Category:{category}</p>
        <select
          as="select"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
        >
          {[...Array(product.countInStock).keys()].map((x) => (
            <option key={x + 1} value={x + 1}>
              {x + 1}
            </option>
          ))}
        </select>
        <button onClick={addToCartHandler} disabled={product.countInStock == 0}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default DetailsPage;
