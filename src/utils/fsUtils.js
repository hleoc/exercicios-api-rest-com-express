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
        const data = await fs.readFile(path.resolve(__dirname, MOVIE_DATA_PATH));
        const movieDataId = JSON.parse(data);
        const movieId = movieDataId.filter((movie) => {
            if (movie.id === id) {
                return movie;
            }
            return console.log('Id não encontrado.');
        });
        return movieId;
    } catch (err) {
        console.error(`Não foi possível ler o arquivo - ${err}`);
    }
}

module.exports = { readMoviesData, readMoviesDataId };