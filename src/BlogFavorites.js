import { collection, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import db from './Firebase.js';
import './BlogFavorites.css'
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

            const dataFavoritos = []
            for (let index = 0; index < favorito.length; index++) {
                const options = {
                    method: 'GET',
                    url: 'https://imdb-top-100-movies.p.rapidapi.com/' + favorito[index],
                    headers: {
                        'X-RapidAPI-Key': '664874e800msh115933a969010c0p1cb578jsn139cbec4ecc5',
                        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
                    }
                };

                axios.request(options).then(function (response) {
                const response = await axios.get(options.url, {headers: options.headers})
                dataFavoritos.push(response.data)

            }
            setMovies([...dataFavoritos])
        }



        getFavorites()

        return () => { }
    }, []);

    useEffect(() => {
        console.log(movies)
    }, [movies])

    return (
        <div className="blogfavorites">
            <ul>
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
                ))}</ul>

        </div>

    );
}

export default BlogFavorites;