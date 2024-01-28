import { Suspense } from 'react';

import { Auth } from './Auth';
import { Home } from './Home';

type Props = {
  searchParams: { [key: string]: string | undefined };
};

export default function Page({ searchParams }: Props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {searchParams?.accessToken && <Auth accessToken={searchParams.code as string} />}
      <Home />
    </Suspense>
  );
}
