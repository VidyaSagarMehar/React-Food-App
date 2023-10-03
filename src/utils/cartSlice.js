import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: { items: [] },
	reducers: {
		addItem: (state, action) => {
			//mutating the state here
			state.items.push(action.payload);
		},
		removeItem: (state) => {
			state.items.pop();
		},
		clearCart: (state) => {
			// RTK - either mumat the existing state or return a new state.
			state.items.length = 0; //state = []
			// Or we can return [] and it will be replaced like below
			// return{item:[]}
		},
	},
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
