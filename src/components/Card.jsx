import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import CardLoader from "./CardLoader";

const Card = React.forwardRef(
  ({ image, rating, id, rank, status, ageTag, title, episodes, genres }, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef();

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        {
          rootMargin: "50px", // Preload slightly before it enters the viewport
        }
      );

      if (cardRef.current) {
        observer.observe(cardRef.current);
      }

      return () => {
        if (cardRef.current) {
          observer.unobserve(cardRef.current);
        }
      };
    }, []);

    if (!isVisible) {
      return (
        <div
          ref={cardRef}
          className="bg-gray-900 rounded-lg shadow-2xl relative p-4 max-w-xs text-white flex items-center justify-center h-80"
        >
          <CardLoader />
        </div>
      );
    }

    return (
      <Link to={`/play/${id}`}>
        <div ref={ref} className="bg-gray-900 rounded-lg shadow-2xl p-4 max-w-xs text-white">
          <div className="relative h-56 rounded-lg overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${image})`,
                filter: "blur(6px)",
              }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <img
              src={image}
              alt={title}
              className="relative z-10 w-full h-full object-contain"
            />

            <span
              className="absolute top-2 text-stone-800 left-2 text-xs uppercase font-semibold px-3 py-1 rounded backdrop-blur-sm bg-white/30"
              style={{ zIndex: 20 }}
            >
              {status}
            </span>
          </div>

          <div className="mt-4">
            <h2 className="text-md font-bold truncate">{title}</h2>
            <p className="text-gray-400 text-sm">
              {episodes} {episodes > 1 ? "episodes" : "episode"}
            </p>

            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center">
                <span className="text-yellow-400 text-lg font-bold">{rating}</span>
                <span className="ml-1 text-sm">★</span>
              </div>
              <div className="text-gray-400 text-sm">
                <span>#{rank} Ranking</span>
              </div>
            </div>

            <div className="flex flex-wrap mt-3 gap-2">
              {genres.slice(0, 3).map((genre, index) => (
                <span
                  key={index}
                  className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded"
                >
                  {genre.name}
                </span>
              ))}
              {genres.length > 3 && (
                <span className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded">
                  +{genres.length - 3}
                </span>
              )}
            </div>

            <div className="mt-3">
              <span className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded">
                {ageTag}
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }
);

export default Card;
