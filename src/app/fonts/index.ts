import localFont from 'next/font/local';

const Pretendard = localFont({
  src: './PretendardVariable.woff2',
  fallback: [
    'Pretendard',
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'Roboto',
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
  variable: '--font-pretendard',
});

const Ydestreet = localFont({
  src: [
    { path: './YdestreetL.ttf', weight: '400' },
    { path: './YdestreetB.ttf', weight: '700' },
  ],
  variable: '--font-ydestreet',
});

export { Pretendard, Ydestreet };
