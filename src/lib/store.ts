import { configureStore } from '@reduxjs/toolkit';
import postsSlice from '@/lib/features/posts/postsSlice';
import fieldsSlice from '@/lib/features/fields/fieldsSlice';
import businessesSlice from '@/lib/features/businesses/businessesSlice';
import resumesSlice from '@/lib/features/resumes/resumesSlice';
import appliesSlice from '@/lib/features/applies/appliesSlice';
import usersSlice from '@/lib/features/users/usersSlice';
import chatbotSlice from '@/lib/features/chatbot/chatbotSlice';
import newsesSlice from '@/lib/features/newses/newsesSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      posts: postsSlice,
      fields: fieldsSlice,
      businesses: businessesSlice,
      resumes: resumesSlice,
      applies: appliesSlice,
      users: usersSlice,
      chatBots: chatbotSlice,
      newses: newsesSlice
      // =====================
    }
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
