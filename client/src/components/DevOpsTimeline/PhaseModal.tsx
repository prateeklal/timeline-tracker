import React, { useState, useEffect } from 'react';
import Modal from '@/components/ui/modal';
import { Phase, VideoResource } from '@/data/phases';
import { Calendar, Target, ExternalLink, Youtube, Play, Bookmark, Loader } from 'lucide-react';
import YouTubeEmbed from '@/components/ui/youtube-embed';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useQuery } from '@tanstack/react-query';
import { fetchVideosByPhaseId } from '@/lib/api';

interface PhaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  phase: Phase | null;
}

const PhaseModal: React.FC<PhaseModalProps> = ({ isOpen, onClose, phase }) => {
  if (!phase) return null;
  
  // Fetch videos for this phase from the API
  const {
    data: videos = [],
    isLoading: isLoadingVideos,
    isError: isVideosError
  } = useQuery({
    queryKey: ['/api/phases', phase.id, 'videos'],
    queryFn: () => fetchVideosByPhaseId(phase.id),
    enabled: !!phase?.id && isOpen,
  });
  
  const [activeVideo, setActiveVideo] = useState<VideoResource | null>(null);
  
  // Update active video when videos are loaded
  useEffect(() => {
    if (videos && videos.length > 0) {
      setActiveVideo(videos[0]);
    }
  }, [videos]);

  // Create a sanitization function for links
  const sanitizeHTML = (html: string) => {
    // This is a basic approach - in production you'd use a library like DOMPurify
    return html
      .replace(/class="modal-link"/g, 'class="modal-link"')
      .replace(/<a /g, '<a rel="noopener noreferrer" target="_blank" ');
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={phase.title}
    >
      {/* Period information */}
      <div className="mb-4 flex items-center gap-2 text-sm text-card-foreground border-l-4 border-primary/30 pl-3 py-1">
        <Calendar size={16} className="text-primary" />
        <span>{phase.period}</span>
      </div>
      
      <Tabs defaultValue="details" className="mb-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="details" className="flex items-center gap-2">
            <Bookmark size={16} />
            <span>Details & Resources</span>
          </TabsTrigger>
          <TabsTrigger value="videos" className="flex items-center gap-2">
            <Youtube size={16} />
            <span>Video Tutorials</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="details" className="space-y-4 pt-4">
          {/* Focus areas */}
          <div className="bg-primary/5 p-3 rounded-md border border-primary/10">
            <h3 className="text-sm font-medium mb-2 flex items-center gap-2">
              <Target size={16} className="text-primary" />
              <span>Focus Areas</span>
            </h3>
            <p className="text-sm text-card-foreground">{phase.focus}</p>
          </div>
          
          {/* Resources and details */}
          <div>
            <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
              <ExternalLink size={16} className="text-primary" />
              <span>Resources & Details</span>
            </h3>
            <div 
              className="prose prose-sm dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: sanitizeHTML(phase.details) }} 
            />
          </div>
        </TabsContent>
        
        <TabsContent value="videos" className="pt-4">
          {isLoadingVideos ? (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader size={32} className="animate-spin text-primary mb-4" />
              <p className="text-muted-foreground">Loading video tutorials...</p>
            </div>
          ) : isVideosError ? (
            <div className="p-4 text-center text-red-500">
              Error loading videos. Please try again later.
            </div>
          ) : videos && videos.length > 0 ? (
            <div className="space-y-4">
              {/* Video player */}
              <div className="mb-4">
                {activeVideo && (
                  <YouTubeEmbed 
                    videoId={activeVideo.videoId} 
                    title={activeVideo.title} 
                  />
                )}
              </div>
              
              {/* Video info */}
              {activeVideo && (
                <div className="bg-card/30 p-3 rounded-md border border-border/30">
                  <h3 className="font-medium mb-1 text-foreground">{activeVideo.title}</h3>
                  <p className="text-sm text-muted-foreground">{activeVideo.description}</p>
                  <span className="inline-block mt-2 text-xs px-2 py-1 bg-primary/10 rounded-full text-primary">
                    {activeVideo.category}
                  </span>
                </div>
              )}
              
              {/* Video playlist */}
              <div>
                <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                  <Play size={16} className="text-primary" />
                  <span>Available Video Tutorials</span>
                </h3>
                <div className="space-y-2 max-h-[250px] overflow-y-auto pr-2">
                  {videos.map(video => (
                    <button
                      key={video.id}
                      onClick={() => setActiveVideo(video)}
                      className={`w-full text-left p-3 rounded-md text-sm transition-colors ${
                        activeVideo?.id === video.id 
                          ? 'bg-primary/20 text-foreground border border-primary/30' 
                          : 'hover:bg-card border border-border/30'
                      }`}
                    >
                      <div className="flex justify-between items-start gap-2">
                        <span className="font-medium">{video.title}</span>
                        <span className="text-xs px-1.5 py-0.5 bg-primary/10 rounded-full text-primary whitespace-nowrap">
                          {video.category}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="p-4 text-center text-muted-foreground">
              No video tutorials available for this phase.
            </div>
          )}
        </TabsContent>
      </Tabs>
    </Modal>
  );
};

export default PhaseModal;
