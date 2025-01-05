import React, { useState, useEffect, useRef, useCallback } from 'react';
import FetchData from './FetchData';
import Card from './Card';
import Tags from './Tags';

const AnimeList = () => {
    const [animeList, setAnimeList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const observer = useRef();
    const [selectedTags, setSelectedTags] = useState([]);
    const [isFetchingData, setIsFetchingData] = useState(false); // New state to track data fetching

    const API = `https://api.jikan.moe/v4/anime?page=${page}${selectedTags.length > 0 ? '&genres=' + selectedTags.map(tag => tag.mal_id).join(',') : ''}`;

    const loadAnime = async (page) => {
        setLoading(true);
        setIsFetchingData(true);  // Start tracking data fetching
        try {
            const data = await FetchData(API);
            setAnimeList((prev) => [...prev, ...data.data]);  // Append new data
            setHasMore(data.pagination.has_next_page);
        } catch (error) {
            console.error('Error fetching anime:', error);
        } finally {
            setLoading(false);
            setIsFetchingData(false);  // Stop tracking data fetching
        }
    };

   useEffect(() => {
        setAnimeList([]);  // Clear the anime list when the tags change
        setPage(1);  // Reset to the first page when tags change
    }, [selectedTags]);

    useEffect(() => {
        loadAnime(page);  // Fetch anime based on the updated API and page
    }, [page, selectedTags]); 

    const lastAnimeElementRef = useCallback((node) => {
        if (loading || isFetchingData) return; // Prevent observer from firing while fetching
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore) {
                setPage((prevPage) => prevPage + 1);  // Increment page number when scrolled to the bottom
            }
        });
        if (node) observer.current.observe(node);
    }, [loading, hasMore, isFetchingData]);

    return (
        <div className="bg-gray-900 max-w-screen h-full grid grid-cols-1 sm:grid-cols-2 sm:place-content-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
            <Tags setSelectedTags={setSelectedTags} />

            {animeList.map((anime, index) => {
                if (index === animeList.length - 1) {
                    return (
                        <Card
                            ref={lastAnimeElementRef}
                            key={anime.mal_id}
                            id={anime.mal_id}
                            title={anime.title}
                            ageTag={anime.rating}
                            image={anime.images.jpg.image_url}
                            rank={anime.rank}
                            rating={anime.score}
                            status={anime.status}
                            genres={anime.genres}
                            episodes={anime.episodes}
                        />
                    );
                }
                return (
                    <Card
                        key={anime.mal_id}
                        id={anime.mal_id}
                        title={anime.title}
                        ageTag={anime.rating}
                        image={anime.images.jpg.image_url}
                        rank={anime.rank}
                        rating={anime.score}
                        status={anime.status}
                        genres={anime.genres}
                        episodes={anime.episodes}
                    />
                );
            })}

            {/* Render skeleton cards only when loading and no more anime */}
            {loading &&
                animeList.length === 0 &&
                Array.from({ length: 10 }).map((_, index) => (
                    <div
                        key={`temp-card-${index}`}
                        className="temp-card animate-pulse bg-gray-700 h-64 w-full rounded-md"></div>
                ))}
        </div>
    );
};

export default AnimeList;
