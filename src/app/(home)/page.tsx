'use client';

import { Suspense } from 'react';

import { Auth } from '../auth/Auth';
import { useAuthContext } from '../auth/AuthProvider';
import { AuthHome } from './AuthHome';
import { NoAuthHome } from './NoAuthHome';

type Props = {
  searchParams: { [key: string]: string | undefined };
};

export default function Page({ searchParams }: Props) {
  const { isAuth } = useAuthContext();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {searchParams?.accessToken && <Auth accessToken={searchParams.accessToken} />}
      {isAuth ? <AuthHome /> : <NoAuthHome />}
    </Suspense>
  );
}
