/* eslint-disable @typescript-eslint/no-explicit-any */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any | null = {
  letter: [],
  applies: []
};

const appliesSlice = createSlice({
  name: 'applies',
  initialState,
  reducers: {
    addLetter: (state, action: PayloadAction<string>) => {
      state.letter.push(action.payload);
    },
    addAllApplies: (state, action: PayloadAction<string>) => {
      state.applies.push(action.payload);
    }
  }
});

export const { addLetter, addAllApplies } = appliesSlice.actions;
export default appliesSlice.reducer;
