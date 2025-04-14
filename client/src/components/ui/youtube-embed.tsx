import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId, title = 'YouTube video player' }) => {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div className="w-full aspect-video relative">
      {hasError ? (
        <div 
          className="absolute inset-0 flex flex-col items-center justify-center bg-card rounded-lg border border-border"
        >
          <AlertCircle size={32} className="text-yellow-500 mb-2" />
          <h3 className="text-lg font-medium mb-1">Video Unavailable</h3>
          <p className="text-sm text-muted-foreground text-center px-4">
            This video may be private or have been removed from YouTube.
          </p>
          <a 
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-primary text-sm hover:underline"
          >
            Try watching on YouTube
          </a>
        </div>
      ) : (
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onError={handleError}
        ></iframe>
      )}
    </div>
  );
};

export default YouTubeEmbed;