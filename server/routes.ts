import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertPhaseSchema, insertVideoResourceSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API Endpoints for DevOps Timeline

  // Get all phases
  app.get("/api/phases", async (req: Request, res: Response) => {
    try {
      const phases = await storage.getAllPhases();
      return res.json(phases);
    } catch (error) {
      console.error("Error fetching phases:", error);
      return res.status(500).json({ error: "Failed to fetch phases" });
    }
  });

  // Get a specific phase with its videos
  app.get("/api/phases/:id", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid phase ID" });
      }

      const phaseData = await storage.getPhaseWithVideos(id);
      if (!phaseData) {
        return res.status(404).json({ error: "Phase not found" });
      }

      return res.json(phaseData);
    } catch (error) {
      console.error("Error fetching phase:", error);
      return res.status(500).json({ error: "Failed to fetch phase" });
    }
  });

  // Create a new phase
  app.post("/api/phases", async (req: Request, res: Response) => {
    try {
      const result = insertPhaseSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ error: result.error });
      }

      const newPhase = await storage.createPhase(result.data);
      return res.status(201).json(newPhase);
    } catch (error) {
      console.error("Error creating phase:", error);
      return res.status(500).json({ error: "Failed to create phase" });
    }
  });

  // Get videos for a specific phase
  app.get("/api/phases/:id/videos", async (req: Request, res: Response) => {
    try {
      const phaseId = parseInt(req.params.id);
      if (isNaN(phaseId)) {
        return res.status(400).json({ error: "Invalid phase ID" });
      }

      const videos = await storage.getVideosByPhaseId(phaseId);
      return res.json(videos);
    } catch (error) {
      console.error("Error fetching videos:", error);
      return res.status(500).json({ error: "Failed to fetch videos" });
    }
  });

  // Create a new video resource
  app.post("/api/videos", async (req: Request, res: Response) => {
    try {
      const result = insertVideoResourceSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ error: result.error });
      }

      const newVideo = await storage.createVideoResource(result.data);
      return res.status(201).json(newVideo);
    } catch (error) {
      console.error("Error creating video resource:", error);
      return res.status(500).json({ error: "Failed to create video resource" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
