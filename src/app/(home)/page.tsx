'use client';

import { Suspense } from 'react';

import { Auth } from './Auth';
import { AuthHome } from './AuthHome';
import { useAuthContext } from './AuthProvider';
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
