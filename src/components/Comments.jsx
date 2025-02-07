import React, { useEffect, useState } from "react";
import axios from "axios";
import Comment from "./Comment";

const Comments = ({ id }) => {
  const [data, setData] = useState([]);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}/reviews`);
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, [id]);

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="p-4 space-y-6 bg-gray-900 text-white">
      {data.map((item, index) => (
        <Comment
          key={item.mal_id}
          item={item}
          index={index}
          expanded={expanded[index]}
          toggleExpand={toggleExpand}
        />
      ))}
    </div>
  );
};

export default Comments;
