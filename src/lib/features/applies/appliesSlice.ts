
import { ApplyType } from '@/interfaces/apply';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ApplyType[] | null = [];

const appliesSlice = createSlice({
  name: 'applies',
  initialState,
  reducers: {
    addApply: (state, action: PayloadAction<ApplyType>) => {
      const {} = action.payload;
      state.push(action.payload);
    }
  }
});

export const { addApply } = appliesSlice.actions;
export default appliesSlice.reducer;
