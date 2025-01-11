import React, { useState } from 'react';
import TagData from '../TagData';

function Tags({ setSelectedTags, clearAnimeList }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedTags, setSelectedTagsState] = useState([]); // Local state for selected tags
    const initialTagsToShow = 10;

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    const toggleTagSelection = (tag) => {
        setSelectedTagsState(prevSelectedTags =>
            prevSelectedTags.some(t => t.mal_id === tag.mal_id)
                ? prevSelectedTags.filter(t => t.mal_id !== tag.mal_id)
                : [...prevSelectedTags, tag]
        );
    };

    const clearFilter = () => {
        setSelectedTagsState([]); // Reset local state
        setSelectedTags([]); // Clear selected tags in parent
        clearAnimeList(); // Clear anime list and refetch data in parent
    };

    const applyFilter = () => {
        setSelectedTags(selectedTags); // Apply selected tags to parent
        clearAnimeList(); // Clear anime list and refetch data in parent
    };

    return (
        <div className="w-full col-span-full row-span-1 bg-gray-900 bg-opacity-1 backdrop-blur-sm p-4 shadow-lg flex flex-col justify-between items-center">
            <div className={`tags-list flex flex-wrap gap-2 overflow-hidden ${isExpanded ? 'expanded' : 'collapsed'}`}>
                {TagData && TagData.length > 0 && TagData.slice(0, isExpanded ? TagData.length : initialTagsToShow).map((tag) => (
                    <div
                        key={tag.mal_id}
                        className={`tag-card p-2 rounded text-white no-underline relative cursor-pointer ${selectedTags.some(t => t.mal_id === tag.mal_id) ? 'bg-gray-500' : 'bg-gray-700 hover:bg-gray-600'}`}
                        onClick={() => toggleTagSelection(tag)}
                    >
                        {tag.name}
                        {selectedTags.some(t => t.mal_id === tag.mal_id) && (
                            <span className="remove-tag absolute top-0 right-0 p-1 text-xs">✖</span>
                        )}
                    </div>
                ))}
            </div>
            <button onClick={toggleExpanded} className="mt-4 text-white">
                {isExpanded ? 'Show Less' : 'Show More'}
            </button>
            {selectedTags.length > 0 && (
                <>
                    <button onClick={applyFilter} className="mt-2 text-white bg-blue-500 hover:bg-blue-700 p-2 rounded">
                        Apply Filter
                    </button>
                    <button onClick={clearFilter} className="mt-2 text-white bg-red-500 hover:bg-red-700 p-2 rounded">
                        Clear Filter
                    </button>
                </>
            )}
        </div>
    );
}

export default Tags;
