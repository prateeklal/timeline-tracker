import express, { Express, Request, Response, NextFunction } from 'express';
import serverless from 'serverless-http';
import { users, phases, videoResources } from '@shared/schema';
import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import { eq } from 'drizzle-orm';
import ws from 'ws';

// Configure WebSocket for Neon serverless
neonConfig.webSocketConstructor = ws;

// Setup express app
const app = express();
app.use(express.json());

// Database connection
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const db = drizzle({ client: pool, schema: { users, phases, videoResources } });

// API Routes
app.get('/api/phases', async (req: Request, res: Response) => {
  try {
    const allPhases = await db.select().from(phases);
    res.json(allPhases);
  } catch (error) {
    console.error('Error fetching phases:', error);
    res.status(500).json({ error: 'Failed to fetch phases' });
  }
});

app.get('/api/phases/:id', async (req: Request, res: Response) => {
  try {
    const phaseId = parseInt(req.params.id);
    if (isNaN(phaseId)) {
      return res.status(400).json({ error: 'Invalid phase ID' });
    }

    const [phase] = await db.select().from(phases).where(eq(phases.id, phaseId));
    
    if (!phase) {
      return res.status(404).json({ error: 'Phase not found' });
    }
    
    const videos = await db.select().from(videoResources).where(eq(videoResources.phaseId, phaseId));
    res.json({ phase, videos });
  } catch (error) {
    console.error('Error fetching phase:', error);
    res.status(500).json({ error: 'Failed to fetch phase' });
  }
});

app.get('/api/phases/:id/videos', async (req: Request, res: Response) => {
  try {
    const phaseId = parseInt(req.params.id);
    if (isNaN(phaseId)) {
      return res.status(400).json({ error: 'Invalid phase ID' });
    }

    const videos = await db.select().from(videoResources).where(eq(videoResources.phaseId, phaseId));
    res.json(videos);
  } catch (error) {
    console.error('Error fetching videos:', error);
    res.status(500).json({ error: 'Failed to fetch videos' });
  }
});

app.post('/api/phases', async (req: Request, res: Response) => {
  try {
    const [newPhase] = await db.insert(phases).values(req.body).returning();
    res.status(201).json(newPhase);
  } catch (error) {
    console.error('Error creating phase:', error);
    res.status(500).json({ error: 'Failed to create phase' });
  }
});

app.post('/api/videos', async (req: Request, res: Response) => {
  try {
    const [newVideo] = await db.insert(videoResources).values(req.body).returning();
    res.status(201).json(newVideo);
  } catch (error) {
    console.error('Error creating video:', error);
    res.status(500).json({ error: 'Failed to create video' });
  }
});

// Error handler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'An unexpected error occurred' });
});

// Export the serverless handler
export const handler = serverless(app);