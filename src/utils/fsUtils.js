const fs = require('fs').promises;
const path = require('path');

const MOVIE_DATA_PATH = '../data/movies.json';

async function readMoviesData() {
    try{
        const data = await fs.readFile(path.resolve(__dirname, MOVIE_DATA_PATH));
        const movies = JSON.parse(data);
        return movies;

    } catch (err) {
        console.error(`Não foi possível ler o arquivo - ${err}`);
    }
}

async function readMoviesDataId(id) {
    try {
        const movieDataId = await readMoviesData();
        const movieId = movieDataId.find((movie) => {
            if (movie.id === id) {
                return movie;
            }
        });
        if (!movieId) {
            return console.log('Id não encontrado.');
        }
        return movieId;
    } catch (err) {
        console.error(`Não foi possível ler o arquivo - ${err}`);
    }
}

async function createMovies(newMovie) {
    try {
        const oldData = await readMoviesData();
        const newMovieWithId = { id: Date.now(), ...newMovie };
        const allMovies = JSON.stringify([
            ...oldData,
            newMovieWithId
        ]);
        await fs.writeFile(path.resolve(__dirname, MOVIE_DATA_PATH), allMovies);
        return newMovieWithId;
    } catch (err) {
        console.error(`Não foi possível ler o arquivo - ${err.message}`);
    }
}

module.exports = { readMoviesData, readMoviesDataId, createMovies };