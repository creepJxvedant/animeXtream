import { useState, useEffect } from "react";
import Card from "./Card";

function FavouritesAnime() {
  const [Favourites, setFavourites] = useState([]);

  useEffect(() => {
    const storedFavourites = localStorage.getItem("favoriteCards");
    if (storedFavourites) {
      setFavourites(JSON.parse(storedFavourites));
    }
  }, []);

  if (Favourites.length === 0) {
    return <></>;
  }

  return (
    <>
      {Favourites.map((anime) => (
        <Card
          key={anime.id}
          id={anime.id}
          title={anime.title}
          ageTag={anime.ageTag}
          image={anime.image}
          rank={anime.rank}
          rating={anime.rating}
          status={anime.status}
          genres={anime.genres}
          episodes={anime.episodes}
        />
      ))}
    </>
  );
}

export default FavouritesAnime;
