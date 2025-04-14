import { pgTable, text, serial, integer, boolean, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// DevOps timeline schema
export const phases = pgTable("phases", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  period: text("period").notNull(),
  focus: text("focus").notNull(),
  details: text("details").notNull(),
  gradientFrom: text("gradient_from").notNull(),
  gradientTo: text("gradient_to").notNull(),
});

export const videoResources = pgTable("video_resources", {
  id: serial("id").primaryKey(),
  videoId: text("video_id").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(),
  phaseId: integer("phase_id").notNull(),
});

// Relations
export const phasesRelations = relations(phases, ({ many }) => ({
  videos: many(videoResources),
}));

export const videoResourcesRelations = relations(videoResources, ({ one }) => ({
  phase: one(phases, {
    fields: [videoResources.phaseId],
    references: [phases.id],
  }),
}));

// Insert schemas
export const insertPhaseSchema = createInsertSchema(phases).pick({
  title: true,
  period: true,
  focus: true,
  details: true,
  gradientFrom: true,
  gradientTo: true,
});

export const insertVideoResourceSchema = createInsertSchema(videoResources).pick({
  videoId: true,
  title: true,
  description: true,
  category: true,
  phaseId: true,
});

// Types
export type InsertPhase = z.infer<typeof insertPhaseSchema>;
export type Phase = typeof phases.$inferSelect;
export type InsertVideoResource = z.infer<typeof insertVideoResourceSchema>;
export type VideoResource = typeof videoResources.$inferSelect;
