// src/redux/tableSlice.js
import { createSlice } from '@reduxjs/toolkit';
import getInitialState from './getInitialState';

export const tableSlice = createSlice({
  name: 'table',
  initialState: getInitialState('default'),  // Default to 'default' type
  reducers: {
    renderHeaders: (state) => {
      // Combine col1 and col2 arrays into a single header string
      state.headers = [...state.col1, ...state.col2].reduce((acc, value) => {
        return acc + `<th>${value}</th>`;
      }, "");
    },
    setType: (state, action) => {
      const newState = getInitialState(action.payload);  // Fetch new initial state based on type
      state.col1 = newState.col1;
      state.col2 = newState.col2;
      state.headers = "";
    },
  },
});

export const { renderHeaders, setType } = tableSlice.actions;
export default tableSlice.reducer;
