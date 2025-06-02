/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any | null = {
  image: [],
  contact_information: {}
};

const newsesSlice = createSlice({
  name: 'newses',
  initialState,
  reducers: {
    addImage: (state, action: PayloadAction<string>) => {
      state.image.push(action.payload);
    },
    addContactInformation: (state, action: PayloadAction<string>) => {
      state.contact_information = action.payload;
    }
  }
});

export const { addImage, addContactInformation } = newsesSlice.actions;
export default newsesSlice.reducer;
