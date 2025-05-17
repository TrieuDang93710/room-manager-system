/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any | null = {
  messageResponse: [],
  query: []
};

const chatbotSlice = createSlice({
  name: 'businesses',
  initialState,
  reducers: {
    addMessageResponse: (state, action: PayloadAction<string>) => {
      state.messageResponse.push(action.payload);
    },
    addQuery: (state, action: PayloadAction<string>) => {
      state.query.push(action.payload);
    }
  }
});

export const { addMessageResponse, addQuery } = chatbotSlice.actions;
export default chatbotSlice.reducer;
