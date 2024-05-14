'use client';

import { YouTubeEmbed } from '@next/third-parties/google';

const BlockSectionMovie = ({ className = '', youtubeId }) => {
  return (
    <section className={`${className}`}>
      <div className='flex min-h-[30vw] w-full items-center justify-center overflow-hidden px-xl md:px-4xl'>
        <YouTubeEmbed
          videoid={youtubeId}
          class='youtube-embed'
          style='width: 80vw;'
          params='controls=1&autoplay=1&loop=1&fs=0?playsinline=1'
        />
      </div>
    </section>
  );
};

export default BlockSectionMovie;
