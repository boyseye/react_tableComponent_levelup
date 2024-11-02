// src/redux/tableSlice.js
import { createSlice } from '@reduxjs/toolkit';
import getInitialState from './getInitialState';

export const tableSlice = createSlice({
  name: 'table',
  initialState: getInitialState('default'),  // Default to 'default' type
  reducers: {
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
