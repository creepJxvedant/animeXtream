import React from 'react'
import { Link } from "react-router-dom";

function RecommendationCard({recommendation}){
    return (
 <Link to={`/play/${recommendation.entry.mal_id}`}><div
         key={recommendation.entry.mal_id}
              className="bg-gray-700 p-4 rounded-lg  min-w-[180px] max-h-80 overflow-hidden"
            >
                <img
                  src={recommendation.entry.images.jpg.large_image_url}
                  alt={recommendation.entry.title}
                  className="w-full object-cover rounded-lg w-50 h-40"
                 />
                <h3 className="text-pretty text-clip font-semibold mt-2">{recommendation.entry.title}</h3>
                <p className="text-sm text-gray-400">Votes: {recommendation.votes}</p>
            </div>
            </Link>     
  )
}

export default RecommendationCard;