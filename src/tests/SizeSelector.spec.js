import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore} from 'redux'
import rootReducer from '../redux/rootReducer';
import SizeSelector from '../components/product/SizeSelector';
import ProductData from '../../product-data.json';

const renderWithRedux = (component, { initialState, store = createStore(rootReducer, initialState) } = {}) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe('SizeSelector', () => {
  it('selects the first size on click element', () => {
    const initialState = {
      product: {
        sizes: ProductData.product.sizes,
        bySize: ProductData.product.bySize,
        productCode: ProductData.product.displayOptions.featuredImage.color.code,
      },
    };
    const { store, getAllByRole } = renderWithRedux(<SizeSelector />, { initialState });
    const sizeButtons = getAllByRole('button');
    fireEvent.click(sizeButtons[0]);
    const selectedSizeName = ProductData.product.bySize[sizeButtons[0].textContent][initialState.product.productCode];
    expect(store.getState().product.selectedSize).toEqual(selectedSizeName);
  });

  it('disables button if size is unavailable', () => {
    const initialState = {
      product: {
        sizes: ProductData.product.sizes,
        bySize: {
          ...ProductData.product.bySize,
          'Unavailable Size': {
            [ProductData.product.displayOptions.featuredImage.color.code]: {
              status: 'UNAVAILABLE',
            },
          },
        },
        productCode: ProductData.product.displayOptions.featuredImage.color.code,
      },
    };
    const { getAllByTestId } = renderWithRedux(<SizeSelector />, { initialState });
    const disabledButtons = getAllByTestId('size-selector__button--disabled');

    disabledButtons.forEach(button => {
      expect(button).toBeDisabled();
    });
  });
});
