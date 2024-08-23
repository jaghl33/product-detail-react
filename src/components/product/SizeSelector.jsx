import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedSize, checkSubmitForm } from '../../redux/productSlice';
import productData from '../../../product-data.json';
import '../../style/SizeSelector.scss';

function SizeSelector() {
  const dispatch = useDispatch();
  const selectedSize = useSelector((state) => state.product.selectedSize);
  const productCode = useSelector((state) => state.product.productCode);
  const canSubmit = useSelector((state) => state.product.canSubmitForm);
  const { sizes, bySize } = productData.product;

  const [localSelectedSize, setLocalSelectedSize] = useState(null);

  const selectSize = (size) => {
    if (sizes.length > 0) {
      dispatch(setSelectedSize(bySize[size]));
      dispatch(checkSubmitForm());
    }
    setLocalSelectedSize(size);
  };

  const disabledButton = (size) => (
    bySize[size][productCode].status === 'UNAVAILABLE'
  );

  const selectedButton = (size) => (
    size === localSelectedSize
  );

  const sizeNumber = selectedSize ? selectedSize.size.name : '';
  const sizeNumberText = sizeNumber ? `Size ${sizeNumber}` : 'Select size';
  const showSelectSizeError = !canSubmit;

  return (
    <fieldset className="size-selector">
      <div className="size-selector__info">
        <legend>{sizeNumberText}</legend>
        <a href="/chart">Size chart</a>
        <div aria-live="polite" className="visually-hidden">
          Selected size: {sizeNumber}
        </div>
      </div>
      <div
        className={`size-selector__container ${showSelectSizeError ? 'size-selector__container--error' : ''}`}
      >
        {sizes.map((size) => (
          <button
            aria-label={`Selected size ${size}`}
            className={`size-selector__button ${disabledButton(size) ? 'size-selector__button--disabled' : ''} ${selectedButton(size) ? 'size-selector__button--selected' : ''}`}
            disabled={disabledButton(size)}
            onClick={() => selectSize(size)}
            key={size}
            data-testid={disabledButton(size) ? 'size-selector__button--disabled' : 'size-selector__button'}
          >
            {size}
          </button>
        ))}
      </div>
      {showSelectSizeError && (
        <div className="size-selector__error-text">
          <svg width="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g>
              <path d="M15.293 16.707a1 1 0 001.414-1.414L9.121 7.707a1 1 0 10-1.414 1.414l7.586 7.586z"></path>
              <path fillRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd"></path>
            </g>
          </svg>
          Please select an available size
        </div>
      )}
    </fieldset>
  );
}

export default SizeSelector;
