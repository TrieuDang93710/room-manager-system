/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any | null = {
  expertise: [],
  hobby: [],
  language: [],
  skill: [],
  experience: [],
  certificate: [],
  education: [],
  award: []
};

const resumesSlice = createSlice({
  name: 'resumes',
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
    addExperience: (state, action: PayloadAction<any>) => {
      state.experience.push(action.payload);
    },
    addCertificate: (state, action: PayloadAction<any>) => {
      state.certificate.push(action.payload);
    },
    addEducation: (state, action: PayloadAction<any>) => {
      state.education.push(action.payload);
    },
    addAward: (state, action: PayloadAction<any>) => {
      state.award.push(action.payload);
    }
  }
});

export const { addAward, addCertificate, addExperience, addExpertise, addHobby, addLanguage, addSkill, addEducation } =
  resumesSlice.actions;
export default resumesSlice.reducer;
