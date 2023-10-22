import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Razzle
      <Link href="/login">로그인</Link>
    </main>
  );
}
