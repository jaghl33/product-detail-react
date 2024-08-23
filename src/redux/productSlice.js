import { createSlice } from '@reduxjs/toolkit';
import ProductData from '../../product-data.json';

const { displayOptions } = ProductData.product;
const productCode = displayOptions.featuredImage.color.code;

const initialState = {
  price: 170,
  quantity: 1,
  selectedSize: null,
  canSubmitForm: true,
  productCode: productCode,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    increment: (state) => {
      state.quantity += 1;
      productSlice.caseReducers.updatePrice(state);
    },
    decrement: (state) => {
      if (state.quantity > 1) {
        state.quantity -= 1;
        productSlice.caseReducers.updatePrice(state);
      }
    },
    setQuantity: (state, action) => {
      state.quantity = action.payload;
    },
    setSelectedSize: (state, action) => {
      state.selectedSize = action.payload[state.productCode];
      productSlice.caseReducers.updatePrice(state);
      productSlice.caseReducers.checkSubmitForm(state);
    },
    updatePrice: (state) => {
      if (state.selectedSize && state.selectedSize.price) {
        state.price = state.selectedSize.price * state.quantity;
      }
    },
    checkSubmitForm: (state) => {
      state.canSubmitForm = !!state.selectedSize;
    },
  },
});

export const { increment, decrement, setQuantity, setSelectedSize, updatePrice, checkSubmitForm } = productSlice.actions;
export default productSlice.reducer;
