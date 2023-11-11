import Link from 'next/link';

import { Button, Input } from '@/components/ui';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Razzle
      <Link href="/login">로그인</Link>
      <Button>버튼</Button>
      <Input placeholder="값을 입력해주세요" />
    </main>
  );
}
