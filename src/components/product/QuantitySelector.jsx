import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, setQuantity } from '../../redux/productSlice';
import minusIcon from '../../assets/minus-icon.svg';
import plusIcon from '../../assets/plus-icon.svg';
import '../../style/QuantitySelector.scss';

function QuantitySelector() {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.product.quantity);

  const inputDisabled = quantity <= 1;

  const handleInput = (event) => {
    const inputValue = parseFloat(event.target.value);
    dispatch(setQuantity(isNaN(inputValue) ? 0 : inputValue));
  };

  return (
    <div className="quantity-selector">
      <label>Quantity</label>
      <div className="quantity-selector__wrapper">
        <button
          className={`quantity-selector__button quantity-selector__button--decrement ${inputDisabled ? 'quantity-selector__button--disabled' : ''}`}
          disabled={inputDisabled}
          onClick={() => dispatch(decrement())}
          aria-label="Decrement Quantity"
          aria-controls="quantity-input"
        >
          <img width="20" src={minusIcon} alt="Decrement" />
        </button>
        <input
          type="number"
          className="quantity-selector__input"
          value={quantity}
          id="quantity-input"
          onChange={handleInput}
          data-testid="quantity-input"
        />
        <button
          className="quantity-selector__button quantity-selector__button--increment"
          onClick={() => dispatch(increment())}
          aria-label="Increment Quantity"
          aria-controls="quantity-input"
        >
          <img width="20" src={plusIcon} alt="Increment" />
        </button>
      </div>
    </div>
  );
}

export default QuantitySelector;
