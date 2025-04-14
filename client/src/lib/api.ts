import type { Phase, VideoResource } from '@/data/phases';

// Interface for the combined phase data with videos
export interface PhaseWithVideos {
  phase: Phase;
  videos: VideoResource[];
}

// Fetch all phases from the API
export async function fetchAllPhases(): Promise<Phase[]> {
  const response = await fetch('/api/phases', { method: 'GET' });
  if (!response.ok) {
    throw new Error(`Failed to fetch phases: ${response.statusText}`);
  }
  return await response.json();
}

// Fetch a specific phase with its videos
export async function fetchPhaseWithVideos(id: number): Promise<PhaseWithVideos> {
  const response = await fetch(`/api/phases/${id}`, { method: 'GET' });
  if (!response.ok) {
    throw new Error(`Failed to fetch phase details: ${response.statusText}`);
  }
  return await response.json();
}

// Create a new phase
export async function createPhase(phase: Omit<Phase, 'id'>): Promise<Phase> {
  const response = await fetch('/api/phases', {
    method: 'POST',
    body: JSON.stringify(phase),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error(`Failed to create phase: ${response.statusText}`);
  }
  return await response.json();
}

// Fetch videos for a specific phase
export async function fetchVideosByPhaseId(phaseId: number): Promise<VideoResource[]> {
  const response = await fetch(`/api/phases/${phaseId}/videos`, { method: 'GET' });
  if (!response.ok) {
    throw new Error(`Failed to fetch videos: ${response.statusText}`);
  }
  return await response.json();
}

// Create a new video resource
export async function createVideoResource(video: Omit<VideoResource, 'id'>): Promise<VideoResource> {
  const response = await fetch('/api/videos', {
    method: 'POST',
    body: JSON.stringify(video),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error(`Failed to create video: ${response.statusText}`);
  }
  return await response.json();
}