import React from "react";

const Comment = ({ item, index, expanded, toggleExpand }) => {
  const { reactions } = item;

  // Define a mapping of reaction types to emojis
  const reactionEmojis = {
    nice: "👍",
    love_it: "❤️",
    funny: "😂",
    confusing: "🤔",
    informative: "📚",
    well_written: "✍️",
    creative: "🎨",
  };

  return (
    <div
      key={item.mal_id}
      className="p-4 bg-gray-800 border border-gray-700 rounded-lg shadow-sm"
    >
      {/* User Info */}
      <div className="flex items-start space-x-3">
        <img
          src={item.user.images?.jpg?.image_url || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z' fill='%23000000'/%3E%3Cpath d='M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z' fill='%23000000'/%3E%3C/svg%3E"}
          alt={item.user.username}
          className="w-10 h-10 rounded-full border border-gray-600"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-yellow-500 font-semibold">
                {item.user.username}
              </span>
              <span className="ml-2 text-gray-400 text-sm">#{index + 1}</span>
            </div>
            <span className="text-gray-500 text-sm">
              {new Date(item.date).toLocaleDateString()}
            </span>
          </div>
          <p className="mt-2 text-gray-300">
            {expanded ? item.review : `${item.review.slice(0, 100)}...`}
            <button
              onClick={() => toggleExpand(index)}
              className="text-blue-500 ml-2"
            >
              {expanded ? "Show less" : "Show more"}
            </button>
          </p>
        </div>
      </div>

      {/* Reactions */}
      <div className="mt-4 flex items-center justify-between text-gray-400 text-sm">
        <div className="flex items-center space-x-4">
          {Object.entries(reactions).map(([reaction, count]) => (
            reaction !== "overall" && count > 0 && (
              <div
                key={reaction}
                className="flex items-center space-x-1 cursor-pointer hover:text-blue-500"
              >
                <span>{reactionEmojis[reaction]}</span>
                <span>{count}</span>
              </div>
            )
          ))}
        </div>
        <button className="text-blue-500 font-semibold hover:underline">
          Reply
        </button>
      </div>
    </div>
  );
};

export default Comment;
