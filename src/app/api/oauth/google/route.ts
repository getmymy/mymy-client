import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server';

import { getToken } from '../getAuth';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code');
  console.log('code', code);
  const { accessToken } = await getToken({ auth_code: code });

  return redirect(`/?accessToken=${accessToken}`);
}
