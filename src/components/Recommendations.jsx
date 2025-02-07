import React from 'react';
import RecommendationCard from './RecommendationCard';

const Recommendations = ({ recommendations }) => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold">Recommendations</h2>
      <div className="mt-4">
      <div className="flex overflow-x-scroll space-x-4 scroll-smooth scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 scrollbar-rounded">
      {recommendations.map((recommendation) => (
           <RecommendationCard recommendation={recommendation}></RecommendationCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
