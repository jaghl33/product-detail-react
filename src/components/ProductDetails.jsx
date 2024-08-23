import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import QuantitySelector from './product/QuantitySelector';
import SizeSelector from './product/SizeSelector';
import MemberRewardNote from './product/MemberRewardNote';
import CartButton from './product/CartButton';
import productData from '../../product-data.json';
import getPriceFormat from '../utils/strings';
import { updatePrice, checkSubmitForm } from '../redux/productSlice';
import '../style/ProductDetails.scss';

function ProductDetails() {
  const dispatch = useDispatch();
  const price = useSelector((state) => state.product.price);
  const { title } = productData.product;

  useEffect(() => {
    dispatch(updatePrice());
    dispatch(checkSubmitForm());
  }, [dispatch]);

  const priceText = getPriceFormat(price);

  return (
    <div className="product-detail">
      <h1 className="product-detail__title">{title}</h1>
      <h2 className="product-detail__price">{priceText}</h2>
      <div>
        <SizeSelector />
        <QuantitySelector />
        <MemberRewardNote />
        <CartButton />
      </div>
      <div className="product-detail__policy">
        <a href="">REI return policy</a>
      </div>
    </div>
  );
}

export default ProductDetails;