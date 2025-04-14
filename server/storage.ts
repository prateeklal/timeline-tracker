import { 
  users, type User, type InsertUser,
  phases, type Phase, type InsertPhase,
  videoResources, type VideoResource, type InsertVideoResource 
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

// Extend the interface with Phase and VideoResource methods
export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Phase methods
  getAllPhases(): Promise<Phase[]>;
  getPhaseWithVideos(id: number): Promise<{ phase: Phase, videos: VideoResource[] } | undefined>;
  createPhase(phase: InsertPhase): Promise<Phase>;
  
  // Video resource methods
  getVideosByPhaseId(phaseId: number): Promise<VideoResource[]>;
  createVideoResource(video: InsertVideoResource): Promise<VideoResource>;
}

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }
  
  // Phase methods
  async getAllPhases(): Promise<Phase[]> {
    return await db.select().from(phases);
  }
  
  async getPhaseWithVideos(id: number): Promise<{ phase: Phase, videos: VideoResource[] } | undefined> {
    const [phase] = await db.select().from(phases).where(eq(phases.id, id));
    if (!phase) return undefined;
    
    const videos = await this.getVideosByPhaseId(id);
    return { phase, videos };
  }
  
  async createPhase(insertPhase: InsertPhase): Promise<Phase> {
    const [phase] = await db
      .insert(phases)
      .values(insertPhase)
      .returning();
    return phase;
  }
  
  // Video resource methods
  async getVideosByPhaseId(phaseId: number): Promise<VideoResource[]> {
    return await db
      .select()
      .from(videoResources)
      .where(eq(videoResources.phaseId, phaseId));
  }
  
  async createVideoResource(insertVideo: InsertVideoResource): Promise<VideoResource> {
    const [video] = await db
      .insert(videoResources)
      .values(insertVideo)
      .returning();
    return video;
  }
}

export const storage = new DatabaseStorage();
