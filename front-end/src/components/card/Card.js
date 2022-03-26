import React from 'react';
import Rating from '../rating/Rating';
import './Card.css';
import { Link } from 'react-router-dom';
const Card = ({ name, price, rating, brand, image, _id }) => {
  return (
    <div className="Card">
      <Link to={`products/${_id}`}>
        <img src={image} alt="" />
      </Link>
      <Link to={`products/${_id}`}>
        <h1 className="name"> {name}</h1>
      </Link>

      <span>{brand}</span>
      <div className="price-rating-container">
        <div className="price">
          Price:<span className="amount">{price}</span> /-
        </div>
        <div className="rating">
          <Rating value={rating} color="black" text="from 12 users" />
        </div>
      </div>
    </div>
  );
};

export default Card;
