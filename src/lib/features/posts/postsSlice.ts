import { PostType } from '@/interfaces/post';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: PostType[] | null = [];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<PostType>) => {
      const {
        title,
        company,
        type_of_post,
        duration,
        require: { sex, age, experience, quantity, description }
      } = action.payload;
      state.push({
        title,
        description,
        company,
        type_of_post,
        duration,
        require: {
          sex,
          age,
          experience,
          quantity,
          description
        }
      });
    }
  }
});

export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;
