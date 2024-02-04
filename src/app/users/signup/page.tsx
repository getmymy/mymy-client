'use client';

import { useInputState } from '@toss/react';

import { Button, Input } from '@/components/ui';

export default function SignUp() {
  // debounde 적용
  const [nickname, handleNicknameChange] = useInputState('');
  // const { data } = useMutation(['users', 'duplicate-nickname'], () => {});

  const validateNickname = (nickname: string) => {
    const regex = /^[a-zA-Z0-9-._가-힣]{1,20}$/;
    return regex.test(nickname);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      {/*  Header 컴포넌트 적용  */}
      <div className="w-full flex flex-col gap-[0.75rem]">
        <Input value={nickname} placeholder="닉네임을 입력하세요" onChange={handleNicknameChange} />
        <p className="text-xs">최대 20자의 영문, 한글, 숫자, 특수문자(-._) 사용 가능합니다.</p>
        {nickname && validateNickname(nickname) && (
          <p className="text-xs text-green font-medium">사용 가능한 닉네임입니다.</p>
        )}
        {/* <p className="text-xs text-orange font-medium">이미 사용중인 닉네임입니다.</p> */}
      </div>
      <Button className="font-secondary" disabled={!validateNickname(nickname)}>
        Create
      </Button>
    </main>
  );
}
