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

interface AuthContextType {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  loginWithEmailAndPassword: (email: string, password: string) => Promise<any>;
  registerWithEmailAndPassword: (email: string, password: string) => Promise<any>;
  loginWithGmail: () => Promise<any>;
  logout: () => Promise<any>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);

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

  // useEffect(() => {
  //   const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     if (currentUser) {
  //       console.log('currentUser: ', currentUser);
  //       setUser(currentUser);
  //       if (currentUser) {
  //         const userInfo = {
  //           email: currentUser.email
  //         };
  //         axios.post(`${process.env.VITE_URL_API_ON_LOCAL}/auth/sign-in`, userInfo).then((res) => {
  //           if (res.data.token) {
  //             localStorage.setItem('access-token', res.data.token);
  //           }
  //         });
  //       } else {
  //         localStorage.removeItem('access-token');
  //       }
  //       setLoading(false);
  //     }
  //   });
  //   return () => {
  //     return unSubscribe();
  //   };
  // }, []);

  useEffect(() => {
    const token: string | null = localStorage.getItem('access-token');

    if (token) {
      const { id } = jwt.decode(token!) as JwtPayload
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
    loginWithGmail,
    logout
  };
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};
