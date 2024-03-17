'use client';

import { useEffect } from 'react';

import { useAuthContext } from './AuthProvider';

export const Auth = ({ accessToken }: { accessToken: string }) => {
  const { setToken } = useAuthContext();

  useEffect(() => {
    setToken(accessToken);
  }, [accessToken, setToken]);

  return null;
};
