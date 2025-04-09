import { FieldType } from '@/interfaces/field';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: FieldType[] | null = [];

const fieldsSlice = createSlice({
  name: 'fields',
  initialState,
  reducers: {
    addField: (state, action: PayloadAction<FieldType>) => {
      const {} = action.payload;
      state.push(action.payload);
    }
  }
});

export const {addField} = fieldsSlice.actions;
export default fieldsSlice.reducer;
