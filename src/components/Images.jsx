import React, { useEffect, useState } from 'react';
import FetchData from './FetchData';

function Images({ id }) {
    const [images, setImages] = useState([]);
     
    useEffect(() => {
        const fetchData = async () => {
            const response = await FetchData(`https://api.jikan.moe/v4/anime/${id}/pictures`);
            setImages(response.data);
        };

        fetchData();
    }, [id]);

    return (
        <div className="mt-6">
            <h2 className="text-2xl font-bold">Images</h2>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.jpg.large_image_url}
                        alt={`Anime Image ${index + 1}`}
                        className="w-full object-cover rounded-lg"
                    />
                ))}
            </div>
        </div>
    );
}

export default Images;