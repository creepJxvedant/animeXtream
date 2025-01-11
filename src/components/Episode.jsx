import React from 'react';
import { Link } from "react-router-dom";

const Episode = ({ id, data }) => {
  const MAX = 70;
  const episode_id = data.mal_id;
  const title = data.title || "Untitled Episode";

  const paddingLength = MAX - title.length;
  const paddedTitle = title.padEnd(paddingLength, ' ').replace(/ /g, '\u00A0');

  return (
    <Link 
      to={`/play/${id}/${episode_id}`} 
      key={episode_id} 
      className="flex items-center gap-4 bg-gray-800 p-3 rounded-lg shadow hover:bg-gray-700 transition-all duration-300"
    >
      {/* Thumbnail or Episode Number */}
      <div className="flex items-center justify-center w-12 h-12 bg-gray-700 text-white rounded-lg">
        {episode_id || "Ep"}
      </div>
      
      {/* Episode Details */}
      <div className="flex-1">
        <h3 className="text-md font-semibold text-white truncate max-w-xs">{paddedTitle}</h3>
        <p className="text-xs text-gray-400 truncate max-w-xs">{data.aired || "No airing date available"}</p>
      </div>
    </Link>
  );
};

export default Episode;
