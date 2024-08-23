import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkSubmitForm } from '../../redux/productSlice';
import getPriceFormat from '../../utils/strings';
import '../../style/CartButton.scss';

function CartButton() {
  const dispatch = useDispatch();
  const price = useSelector((state) => state.product.price);
  const selectedSize = useSelector((state) => state.product.selectedSize);

  const priceText = selectedSize ? `- ${getPriceFormat(price)}` : '';

  const submitForm = () => {
    dispatch(checkSubmitForm());
  };

  return (
    <div className="cart">
      <button onClick={submitForm} className="cart__button">
        Add to cart {priceText}
      </button>
    </div>
  );
}

export default CartButton;