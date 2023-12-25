import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server';

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  console.log('google searchParams', searchParams);
  console.log(request.nextUrl);
  return redirect('/');
}
