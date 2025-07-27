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

module.exports = { readMoviesData };