import { ResumeType } from '@/interfaces/resume';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ResumeType[] | null = [];

const resumesSlice = createSlice({
  name: 'resumes',
  initialState,
  reducers: {
    addResume: (state, action: PayloadAction<ResumeType>) => {
      const {} = action.payload;
      state.push(action.payload);
    }
  }
});

export const { addResume } = resumesSlice.actions;
export default resumesSlice.reducer;
