/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any | null = {
  histories: ['Bạn muốn tìm thông tin gì?'],
  selectedHistoryValue: ''
};

const searchHistorySlice = createSlice({
  name: 'histories',
  initialState,
  reducers: {
    addHistory: (state, action: PayloadAction<string>) => {
      state.histories.push(action.payload);
    },
    addSelectedHistoryValue: (state, action: PayloadAction<string>) => {
      state.selectedHistoryValue = action.payload;
    }
  }
});

export const { addHistory, addSelectedHistoryValue } = searchHistorySlice.actions;
export default searchHistorySlice.reducer;
