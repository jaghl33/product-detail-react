import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore} from 'redux'
import rootReducer from '../redux/rootReducer';
import QuantitySelector from '../components/product/QuantitySelector';

const renderWithRedux = (component, { initialState, store = createStore(rootReducer, initialState) } = {}) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe('QuantitySelector', () => {
  it('disables the decrement button when quantity is 1 or less', () => {
    const { getByLabelText } = renderWithRedux(<QuantitySelector />, {
      initialState: { product: { quantity: 1 } },
    });
    const decrementButton = getByLabelText('Decrement Quantity');
    expect(decrementButton).toBeDisabled();
  });

  it('decrements the quantity when the decrement button is clicked', () => {
    const { getByLabelText, store } = renderWithRedux(<QuantitySelector />, {
      initialState: { product: { quantity: 2 } },
    });
    const decrementButton = getByLabelText('Decrement Quantity');
    fireEvent.click(decrementButton);
    expect(store.getState().product.quantity).toBe(1);
  });

  it('increments the quantity when the increment button is clicked', () => {
    const { getByLabelText, store } = renderWithRedux(<QuantitySelector />, {
      initialState: { product: { quantity: 1 } },
    });
    const incrementButton = getByLabelText('Increment Quantity');
    fireEvent.click(incrementButton);
    expect(store.getState().product.quantity).toBe(2);
  });

  it('updates the quantity when a number is typed in the input field', async () => {
    const { getByTestId, store } = renderWithRedux(<QuantitySelector />, {
      initialState: { product: { quantity: 1 } },
    });
    const input = getByTestId('quantity-input');
    fireEvent.change(input, { target: { value: '5' } });
    expect(store.getState().product.quantity).toBe(5);
  });

  it('binds the input field value to the quantity in the store', () => {
    const { getByTestId, store } = renderWithRedux(<QuantitySelector />, {
      initialState: { product: { quantity: 10 } },
    });
    const input = getByTestId('quantity-input');
    expect(input.value).toBe('10');
    expect(store.getState().product.quantity).toBe(10);
  });
});
