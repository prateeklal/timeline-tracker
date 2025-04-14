import type { Phase, VideoResource } from '@/data/phases';

// Interface for the combined phase data with videos
export interface PhaseWithVideos {
  phase: Phase;
  videos: VideoResource[];
}

// Determine API base path based on environment (dev/prod)
const getApiBasePath = () => {
  // If running on Netlify (production), use the Netlify functions path
  if (import.meta.env.PROD) {
    return '/.netlify/functions/api';
  }
  // For development, use the regular API path
  return '/api';
};

// Fetch all phases from the API
export async function fetchAllPhases(): Promise<Phase[]> {
  const basePath = getApiBasePath();
  const response = await fetch(`${basePath}/phases`, { method: 'GET' });
  if (!response.ok) {
    throw new Error(`Failed to fetch phases: ${response.statusText}`);
  }
  return await response.json();
}

// Fetch a specific phase with its videos
export async function fetchPhaseWithVideos(id: number): Promise<PhaseWithVideos> {
  const basePath = getApiBasePath();
  const response = await fetch(`${basePath}/phases/${id}`, { method: 'GET' });
  if (!response.ok) {
    throw new Error(`Failed to fetch phase details: ${response.statusText}`);
  }
  return await response.json();
}

// Create a new phase
export async function createPhase(phase: Omit<Phase, 'id'>): Promise<Phase> {
  const basePath = getApiBasePath();
  const response = await fetch(`${basePath}/phases`, {
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
  const basePath = getApiBasePath();
  const response = await fetch(`${basePath}/phases/${phaseId}/videos`, { method: 'GET' });
  if (!response.ok) {
    throw new Error(`Failed to fetch videos: ${response.statusText}`);
  }
  return await response.json();
}

// Create a new video resource
export async function createVideoResource(video: Omit<VideoResource, 'id'>): Promise<VideoResource> {
  const basePath = getApiBasePath();
  const response = await fetch(`${basePath}/videos`, {
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