import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };
const initialPriceState = { price: 0 };
const initialProductsState = { products: [] };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    decrease(state, action) {
      state.counter -= action.payload;
    },
  },
});

const priceSlice = createSlice({
  name: "price",
  initialState: initialPriceState,
  reducers: {
    increase(state, action) {
      state.price = state.price + parseFloat(action.payload);
    },
    decrease(state, action) {
      state.price -= action.payload;
    },
  },
});

const productsSlice = createSlice({
  name: "products",
  initialState: initialProductsState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
  },
});

const selectedProductsSlice = createSlice({
  name: "selectedProducts",
  initialState: {
    selectedProducts: [],
  },
  reducers: {
    addProduct(state, action) {
      const existingProduct = state.selectedProducts.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.selectedProducts.push({ ...action.payload, quantity: 1 });
      }
    },
    removeProduct(state, action) {
      state.selectedProducts = state.selectedProducts.filter(
        (product) => product.id !== action.payload.id
      );
    },
    decrementProductQuantity(state, action) {
      const existingProduct = state.selectedProducts.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity--;
      } else {
        state.selectedProducts = state.selectedProducts.filter(
          (product) => product.id !== action.payload.id
        );
      }
    },
    clearProducts(state) {
      state.selectedProducts = [];
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    price: priceSlice.reducer,
    products: productsSlice.reducer,
    selectedProducts: selectedProductsSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const priceActions = priceSlice.actions;
export const productsActions = productsSlice.actions;
export const selectedProductsActions = selectedProductsSlice.actions;

export default store;
