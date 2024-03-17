'use client';

import React, { Dispatch, SetStateAction, createContext, useState } from 'react';

export type AuthStateType = {
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
  isAuth: boolean;
};

const AuthContext = createContext<AuthStateType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState('');
  const isAuth = !!token;

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuth,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = React.useContext(AuthContext);
  if (context === null) {
    throw new Error('usePostCreate must be used within a PostCreateProvider');
  }
  return context;
};
