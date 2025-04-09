import { BusinessType } from '@/interfaces/business';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: BusinessType[] | null = [];

const businessesSlice = createSlice({
  name: 'businesses',
  initialState,
  reducers: {
    addBusiness: (state, action: PayloadAction<BusinessType>) => {
      const {} = action.payload;
      state.push(action.payload);
    }
  }
});

export const { addBusiness } = businessesSlice.actions;
export default businessesSlice.reducer;
