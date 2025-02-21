import React, { useState, useEffect } from 'react';
import FetchData from './FetchData';
import { useParams } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';
import Episodes from './Episodes';

const WatchNow = () => {
  const { id, episode_id } = useParams();

  const [data, setData] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response2 = await FetchData(`https://api.jikan.moe/v4/anime/${id}/episodes`);
        const response = await FetchData(`https://api.jikan.moe/v4/anime/${id}/episodes/${episode_id}`);
        if (response.data) {
          setData(response.data);
          setEpisodes(response2.data);
        } else {
          setError('No data found for this episode');
        }
      } catch (err) {
        setError(err.message || 'Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, episode_id]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <p className="text-xl text-white animate-pulse">Loading...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );

  return (
    <div className="flex flex-col sm:flex-row h-screen bg-gray-900 text-white">
      {/* Video Player Section */}
      <div className="w-full sm:w-2/3 p-6 flex flex-col items-center">
        {data ? (
          <>
            <VideoPlayer url={data.url} title={data.title} />
            <div className="mt-4 text-center">
              <h1 className="text-2xl font-bold">{data.title}</h1>
              <p className="mt-2 text-gray-400">{data.synopsis}</p>
            </div>
          </>
        ) : (
          <p className="text-xl text-gray-400">No episode data available</p>
        )}
      </div>

      {/* Episodes Sidebar */}
      <div className="w-full sm:w-1/3 bg-gray-800 p-4 sm:overflow-y-auto rounded-lg sm:rounded-none shadow-lg">
        <Episodes id={id} episodes={episodes} />
      </div>
    </div>
  );
};

export default WatchNow;
