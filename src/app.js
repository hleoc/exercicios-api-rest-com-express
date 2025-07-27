const express = require('express');
const { readMoviesData } = require('./utils/fsUtils');

const app = express();

app.use(express.json());

app.get('/movies', async (req, res) => {
    const readMovies = await readMoviesData();
    res.status(200).json({ movies: readMovies });
});

module.exports = app;