'use server';
import { SignUpFormSate, SignUpFormSchema } from '../types/signUp';
import { API_PUBLIC_URI } from '../constants';
import { HttpStatusCode } from 'axios';
import { redirect } from 'react-router-dom';

export const signUp = async (state: SignUpFormSate, formData: FormData): Promise<SignUpFormSate> => {
  const validationFields = SignUpFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password')
  });

  if (!validationFields.success) {
    return {
      errors: validationFields.error.flatten().fieldErrors
    };
  }

  const response = await fetch(`${API_PUBLIC_URI}/user/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/json'
    },
    body: JSON.stringify(validationFields.data)
  });

  if (response.status === HttpStatusCode.Created) {
    redirect('sign-in');
  } else
    return {
      message: response.status === 500 ? 'The user is already existed' : response.statusText
    };
};
