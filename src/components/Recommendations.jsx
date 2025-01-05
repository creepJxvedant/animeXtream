import React from 'react';

const Recommendations = ({ recommendations }) => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold">Recommendations</h2>
      <div className="mt-4">
      <div className="flex overflow-x-scroll space-x-4 scroll-smooth scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 scrollbar-rounded">
      {recommendations.map((recommendation) => (
            <div
              key={recommendation.entry.mal_id}
              className="bg-gray-700 p-4 rounded-lg  min-w-[180px] max-h-80 overflow-hidden"
            >
              <a
                href={recommendation.entry.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={recommendation.entry.images.jpg.large_image_url}
                  alt={recommendation.entry.title}
                  className="w-full object-cover rounded-lg w-50 h-40"
                 />
                <h3 className="text-pretty text-clip font-semibold mt-2">{recommendation.entry.title}</h3>
                <p className="text-sm text-gray-400">Votes: {recommendation.votes}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
