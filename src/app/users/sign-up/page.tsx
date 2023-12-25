import { Button, Input } from '@/components/ui';

export default function SignUp() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div>앱 바</div>
      <div>
        <Input placeholder="닉네임을 입력하세요" />
        <p>최대 20자의 영문, 한글, 숫자, 특수문자(-._) 사용 가능합니다.</p>
      </div>
      <Button className="font-secondary">Create</Button>
    </main>
  );
}
