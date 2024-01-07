'use client';

import { forwardRef, useEffect, useRef } from 'react';
import YouTube, { YouTubeEvent, YouTubeProps } from 'react-youtube';

const YoutubePlayer = forwardRef<YouTubeEvent, { youtubeId: string }>(({ youtubeId }, ref) => {
  const opts = useRef<YouTubeProps['opts']>(null);

  useEffect(() => {
    opts.current = {
      height: '200px',
      width: '200px',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };
  }, []);

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    if (!ref || typeof ref === 'function') return;

    ref.current = event;
  };

  return (
    <>
      <div className="absolute bottom-0 left-0 -z-10 w-[200px] h-[200px] overflow-hidden bg-background"></div>
      <YouTube
        videoId={youtubeId}
        opts={opts}
        className="absolute bottom-0 left-0 -z-20 w-[200px] h-[200px] overflow-hidden"
        onReady={onPlayerReady}
      />
    </>
  );
});

YoutubePlayer.displayName = 'YoutubePlayer';

export default YoutubePlayer;
