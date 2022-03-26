import React from 'react';

import Card from '../../components/card/Card';
import axios from 'axios';
import './ProductsPage.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { listProducts } from '../../actions/productActions';
const ProductsPage = () => {
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  if (loading) {
    return <h1>Loading</h1>;
  }
  return (
    <div>
      <div className="Products">
        {products.map((product) => (
          <Card {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
