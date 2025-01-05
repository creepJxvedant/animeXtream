import React from 'react';
import Comments from '../components/Comments';
import Header from '../components/Header';
import PlayAnime from '../components/PlayAnime';
import { useParams, useNavigate } from "react-router-dom";
import Home from './Home';

function Play() {
    const { id } = useParams();
    const navigate = useNavigate();

     
    if (!id) {
        return <Home />;
    }

    return (
        <>
            <Header />
            <PlayAnime id={id} />
            <Comments id={id} />
        </>
    );
}

export default Play;
