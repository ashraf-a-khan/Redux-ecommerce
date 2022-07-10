import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addItemToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeItemFromBasket: (state, action) => {
      // use the id that we passed and remove the item from basket with that id

      let copyOfBasket = state.items;

      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index !== -1) {
        //Splice the item out of the basket
        copyOfBasket.splice(index, 1);
        state.items = copyOfBasket;
      } else {
        alert('WOAH this item isnt in the basket');
      }
    },
  },
});

export const { addItemToBasket, removeItemFromBasket } = basketSlice.actions;

//Selector
export const selectItems = (state) => state.basket.items;
export const selectItemsCount = (state) => state.basket.items.length;

export default basketSlice.reducer;
