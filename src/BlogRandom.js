import React, { useState, useEffect } from 'react';
import './BlogPost.css'
import axios from 'axios';

function BlogPost() {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const random = (Math.floor(Math.random() * (100 - 0 + 1)) + 0);
        console.log(random)
        const options = {
            method: 'GET',
            url: `https://imdb-top-100-movies.p.rapidapi.com/` + ("top") + (random),
            headers: {
                'X-RapidAPI-Key': '664874e800msh115933a969010c0p1cb578jsn139cbec4ecc5',
                'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            setMovie(response.data);
        }).catch(function (error) {
            console.error(error);
        });
        console.log(options)
        return () => { }
    }, []);

    return (
        <div class="blog-post">
            <h2>{movie.title}</h2>
            <div class="blog2">

                <div class="post-image">
                    <img src={movie.image} alt={movie.title} />
                </div>
                <div class="post-details">
                    <p><strong>Descripción:</strong> {movie.description}</p>
                    <p><strong>Director:</strong> {movie.director}</p>
                    <p><strong>Genre:</strong> {movie.genre}</p>
                    <p><strong>Writers:</strong> {movie.writers}</p>
                    <p><strong>Year:</strong> {movie.year}</p>
                    <p><strong>Rating:</strong> {movie.rating}</p>
                </div>
            </div>
        </div>

    );
}

export default BlogPost;