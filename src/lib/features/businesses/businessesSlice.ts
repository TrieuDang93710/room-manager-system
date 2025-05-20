/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any | null = {
  image: [],
  video: [],
  information: {},
  workPlace: {}
};

const businessesSlice = createSlice({
  name: 'businesses',
  initialState,
  reducers: {
    addImage: (state, action: PayloadAction<string>) => {
      state.image.push(action.payload);
    },
    addVideo: (state, action: PayloadAction<string>) => {
      state.video.push(action.payload);
    },
    addInformation: (state, action: PayloadAction<string>) => {
      state.information = action.payload;
    },
    addWorkPlace: (state, action: PayloadAction<string>) => {
      state.workPlace = action.payload;
    }
  }
});

export const { addImage, addVideo, addInformation, addWorkPlace } = businessesSlice.actions;
export default businessesSlice.reducer;
