import React, { useState } from 'react';
import Episode from './Episode';

const Episodes = ({ id, episodes }) => {
  const [showEpisodes, setShowEpisodes] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
     
      <button
        className="sm:hidden absolute top-30 right-4 bg-gray-800 text-blue-700 p-3 rounded-lg z-40 cursor-pointer hover:bg-blue-700 hover:text-white transition duration-300 ease-in-out shadow-md hover:shadow-lg"
        onClick={() => setShowEpisodes(!showEpisodes)}
      >
        {showEpisodes ? 'Close Episodes' : 'Show Episodes'}
      </button>

      {/* Episodes List */}
      <div
        className={`${
          showEpisodes ? 'block' : 'hidden'
        } sm:block flex-grow sm:w-1/3 w-screen top-30 absolute h-screen overflow-auto left-0 p-6 bg-gray-800 rounded-lg shadow-xl sm:h-auto sm:top-1/4 sm:static cursor-pointer transition duration-300 ease-in-out`}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-200 border-b border-gray-600 pb-2">
          Episodes
        </h2>
        <div className="flex flex-col gap-4">
          <div className="overflow-auto sm:max-h-[60rem] pr-2 scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-800">
            {episodes.slice(0, 20).map((episode) => (
              <Episode key={episode.mal_id} id={id} data={episode} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
