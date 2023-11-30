'use client';

import { Button } from '@/components/common';

export default function Home() {
  const handleLoginWithGoogle = () => {
    location.href = `${process.env.NEXT_PUBLIC_API_URL}/public/v1/login?service_type=GOOGLE`;
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div>로고</div>
      서비스 소개
      <Button onClick={handleLoginWithGoogle}>Google로 시작하기</Button>
    </main>
  );
}
