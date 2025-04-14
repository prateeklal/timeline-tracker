import React from 'react';

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId, title = 'YouTube video player' }) => {
  return (
    <div className="w-full aspect-video relative">
      <iframe
        className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;