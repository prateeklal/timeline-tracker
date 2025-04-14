import React from 'react';
import Timeline from './Timeline';

const DevOpsTimelineContainer: React.FC = () => {
  return (
    <div className="p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <header className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-3">
            DevOps, CI/CD & Cloud Learning Timeline
          </h1>
          <p className="text-center text-gray-600">
            Timeline starting from April 14, 2025, for a Senior Front-End Developer. Click on a phase for details.
          </p>
        </header>

        <Timeline />

        <p className="text-center text-gray-500 mt-8 text-xs">
          Note: Timelines are approximate and can be adjusted based on learning pace and depth.
        </p>
      </div>
    </div>
  );
};

export default DevOpsTimelineContainer;
