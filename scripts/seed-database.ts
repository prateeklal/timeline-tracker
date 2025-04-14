import { db } from '../server/db';
import { phases, videoResources } from '../shared/schema';
import phases_data from '../client/src/data/phases';

async function main() {
  console.log('Seeding database...');
  
  try {
    // First, let's insert all the phases
    for (const phaseData of phases_data) {
      const { id, title, period, focus, details, gradientFrom, gradientTo, videos } = phaseData;
      
      console.log(`Inserting phase: ${title}`);
      
      // Insert the phase
      const [phase] = await db
        .insert(phases)
        .values({
          title,
          period,
          focus,
          details,
          gradientFrom,
          gradientTo
        })
        .returning();
      
      console.log(`Phase created with ID: ${phase.id}`);
      
      // If this phase has videos, insert them
      if (videos && videos.length > 0) {
        for (const video of videos) {
          console.log(`Inserting video: ${video.title}`);
          
          await db
            .insert(videoResources)
            .values({
              videoId: video.id,
              title: video.title,
              description: video.description,
              category: video.category,
              phaseId: phase.id
            });
        }
      }
    }
    
    console.log('Database seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    process.exit(0);
  }
}

main();