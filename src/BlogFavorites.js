import { collection, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import db from './Firebase.js';
import './BlogList.css'
import { Link } from 'react-router-dom';

function BlogFavorites() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getFavorites = async () => {
            const querySnapshot = await getDocs(collection(db, "favorites"));
            const favorito = [];

            querySnapshot.forEach((doc) => {
                favorito.push(doc.data().movieId)
            });
            console.log(favorito)

            const dataFavoritos = favorito.map(id => {
                const options = {
                    method: 'GET',
                    url: `https://imdb-top-100-movies.p.rapidapi.com/` + id,
                    params: { id: id },
                    headers: {
                        'X-RapidAPI-Key': '664874e800msh115933a969010c0p1cb578jsn139cbec4ecc5',
                        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
                    }
                };

                axios.request(options).then(function (response) {
                    return response.data;
                }).catch(function (error) {
                    console.error(error);
                });
            })
        }

        getFavorites()

        return () => { }
    }, []);

    return (
        <div class="blog-favorites">
            {movies.map(movie => (
                <div className='container'>
                    <li key={movie.id}>
                        <div className='topNumber'>
                            <p>{movie.rank}</p>
                        </div>
                        <img src={movie.image} alt={movie.title} />
                        <div className='titulo'>
                            <Link to={`/blogpost/${movie.id}`}>{movie.title}</Link>
                        </div>
                    </li>
                </div>
            ))}
        </div>

    );
}

export default BlogFavorites;