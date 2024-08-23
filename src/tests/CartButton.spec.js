import React from 'react';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore} from 'redux'
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CartButton from '../components/product/CartButton';
import rootReducer from '../redux/rootReducer';

const renderWithRedux = (component, { initialState, store = createStore(rootReducer, initialState) } = {}) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe('CartButton', () => {
  it('contains price text', () => {
    const initialState = {
      product: {
        price: 170,
        quantity: 1,
        selectedSize: {
          129133: {
            price: 170,
            size: {
              id: 100684,
              name: '6',
            },
            skuId: '2178440001',
            status: 'AVAILABLE',
          },
        },
        canSubmitForm: true,
        productCode: '129133',
      },
    };

    const { getByText } = renderWithRedux(<CartButton />, { initialState });
    expect(getByText(/Add to cart - \$170.00/i)).toBeInTheDocument();
  });
});
