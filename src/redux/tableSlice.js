// src/redux/tableSlice.js
import { createSlice } from '@reduxjs/toolkit';
import getInitialState from './getInitialState';

export const tableSlice = createSlice({
  name: 'table',
  initialState: getInitialState('default'),  // Default to 'default' type
  reducers: {
    setType: (state, action) => {
      const newState = getInitialState(action.payload);  // Fetch new initial state based on type
      state.HEADER_MAIN = newState.HEADER_MAIN;
      state.HEADER_SUB = newState.HEADER_SUB;
      state.headers = "";
    },
  },
});

export const { setType } = tableSlice.actions;
export default tableSlice.reducer;
