/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any | null = {
  expertise: [],
  hobby: [],
  language: [],
  skill: [],
  address: []
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addExpertise: (state, action: PayloadAction<string>) => {
      state.expertise.push(action.payload);
    },
    addHobby: (state, action: PayloadAction<string>) => {
      state.hobby.push(action.payload);
    },
    addLanguage: (state, action: PayloadAction<string>) => {
      state.language.push(action.payload);
    },
    addSkill: (state, action: PayloadAction<string>) => {
      state.skill.push(action.payload);
    },
    addAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    }
  }
});

export const { addExpertise, addHobby, addLanguage, addSkill, addAddress } = usersSlice.actions;
export default usersSlice.reducer;
