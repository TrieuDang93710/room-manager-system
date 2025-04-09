/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from 'firebase/auth';
import jwt, { JwtPayload } from 'jsonwebtoken';
import axios from 'axios';

import app from '@/firebase/firebase.config';
import API_PUBLIC_URI from '@/lib/constants';
import useApiPublic from '@/hooks/useApiPublic';

interface AuthContextType {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  loginWithEmailAndPassword: (email: string, password: string) => Promise<any>;
  registerWithEmailAndPassword: (email: string, password: string) => Promise<any>;
  signIn: (email: string, password: string) => Promise<any>;
  signUp: (username: string, email: string, password: string, role?: string[]) => Promise<any>;
  loginWithGmail: () => Promise<any>;
  logout: () => Promise<any>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);
  const apiPublic = useApiPublic();

  // register and login on local
  const signIn = (email: string, password: string) => {
    setLoading(true);
    return apiPublic.post('/auth/sign-in', { email, password });
  };

  const signUp = (username: string, email: string, password: string, role?: string[]) => {
    setLoading(true);
    const body = { username: username, email: email, password: password, role: role };
    return apiPublic.post('/auth/sign-up', body);
  };

  // register and login on firebase
  const registerWithEmailAndPassword = (email: string, password: string) => {
    setLoading(true);
    const response = createUserWithEmailAndPassword(auth, email, password);
    return response;
  };

  const loginWithEmailAndPassword = (email: string, password: string) => {
    const response = signInWithEmailAndPassword(auth, email, password);
    return response;
  };

  const loginWithGmail = async () => {
    const response = await signInWithPopup(auth, googleProvider);
    return response;
  };

  const logout = () => {
    localStorage.removeItem('access-token');
    localStorage.removeItem('ally-supports-cache');
    localStorage.removeItem('refresh-token');
    return signOut(auth);
  };

  useEffect(() => {
    const token: string | null = localStorage.getItem('access-token');

    if (token) {
      const { id } = jwt.decode(token!) as JwtPayload;

      if (!id) {
        throw new Error('Not found token');
      }

      axios
        .get(`${API_PUBLIC_URI}/user/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((result) => {
          setUser(result.data.data[0]);
        })
        .catch((error) => {
          return error;
        });
    }
  }, []);
  const authInfo: AuthContextType = {
    loading,
    setLoading,
    user,
    setUser,
    loginWithEmailAndPassword,
    registerWithEmailAndPassword,
    signIn,
    signUp,
    loginWithGmail,
    logout
  };
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};
