import Link from 'next/link';

import { Button, Input } from '@/components/ui';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      Razzle
      <Link href="/sign-in">가입</Link>
      <Button>버튼</Button>
      <Input placeholder="값을 입력해주세요" />
    </main>
  );
}
