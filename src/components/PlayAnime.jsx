import { useEffect, useState } from "react";
import FetchData from './FetchData';
import Loader from './Loader';
import Recommendations from './Recommendations';
import Episodes from "./Episodes";
import Images from "./Images";
import VideoPlayer from './VideoPlayer'

const PlayAnime = ({ id }) => {
    const [anime, setAnime] = useState({});
    const [firstEpisode, setFirstEpisode] = useState(null);
    const [episodes, setEpisodes] = useState([]);
    const [recommendations, setRecommendations] = useState([]);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        if (!id) return;

        const fetchAllData = async () => {
            try {
                setLoading(true);
                const animeData = await FetchData(`https://api.jikan.moe/v4/anime/${id}`);
                setAnime(animeData.data);

                const episodesData = await FetchData(`https://api.jikan.moe/v4/anime/${id}/episodes`);
                setFirstEpisode(episodesData.data[0]);
                setEpisodes(episodesData.data);

                const recommendationsData = await FetchData(`https://api.jikan.moe/v4/anime/${id}/recommendations`);
                setRecommendations(recommendationsData.data);
            } catch (error) {
                console.error("Error fetching anime data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAllData();
    }, [id]);

    if (loading) return <Loader />;

    if (!anime || !firstEpisode) return <p>No data available</p>;

    const {
        images: animeImages,
        title,
        title_english,
        title_japanese,
        aired,
        genres,
        themes,
        trailer,
        synopsis,
        rating,
        score,
        episodes: totalEpisodes,
        duration,
        rank,
        popularity
    } = anime;

    return (
        <div className="w-full h-full bg-gray-900 text-white flex">
            {/* Main Data Section */}
            <div className="w-screen p-6 overflow-y-auto sm:w-2/3">
                {/* Header Section */}
                <div className="flex flex-col sm:flex-row">
                    <img
                        src={animeImages?.jpg?.large_image_url}
                        alt={title}
                        className="w-full sm:w-1/3 object-cover"
                    />
                    <div className="p-6 sm:w-2/3">
                        <h1 className="text-3xl font-bold">{title}</h1>
                        <p className="mt-2 text-sm text-gray-400">
                            {title_english} | {title_japanese}
                        </p>
                        <p className="mt-2 text-sm text-gray-400">{aired?.string}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {genres?.map((genre) => (
                                <span
                                    key={genre.mal_id}
                                    className="bg-blue-600 text-xs px-3 py-1 rounded-full"
                                >
                                    {genre.name}
                                </span>
                            ))}
                            {themes?.map((theme) => (
                                <span
                                    key={theme.mal_id}
                                    className="bg-purple-600 text-xs px-3 py-1 rounded-full"
                                >
                                    {theme.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Trailer Section */}
                {trailer && <VideoPlayer url={trailer.embed_url} title={title}/>}

                {/* Details Section */}
                <div className="mt-6">
                    <p className="text-gray-300">{synopsis}</p>
                    <div className="mt-4 flex flex-col sm:flex-row justify-between text-sm text-gray-400">
                        <p>
                            <strong>Rating:</strong> {rating}
                        </p>
                        <p>
                            <strong>Score:</strong> {score}
                        </p>
                        <p>
                            <strong>Episodes:</strong> {totalEpisodes}
                        </p>
                        <p>
                            <strong>Duration:</strong> {duration}
                        </p>
                        <p>
                            <strong>Rank:</strong> #{rank}
                        </p>
                        <p>
                            <strong>Popularity:</strong> #{popularity}
                        </p>
                    </div>
                </div>

                {/* Images Section */}
              
              <Images id={id}/>

                {/* Recommendations Section */}
                <Recommendations recommendations={recommendations} />
            </div>

               <Episodes id={id} episodes={episodes} />
             

        </div>
    );
};

export default PlayAnime;
