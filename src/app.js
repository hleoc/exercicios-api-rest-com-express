const express = require('express');
const { readMoviesData, readMoviesDataId } = require('./utils/fsUtils');

const app = express();

app.use(express.json());

app.get('/movies', async (req, res) => {
    const readMovies = await readMoviesData();
    return res.status(200).json({ movies: readMovies });
});

app.get('/movies/:id', async (req, res) => {
    const { id } = req.params;
    const readMoviesId = await readMoviesDataId(Number(id));
    return res.status(200).json({ movie: readMoviesId });
});

module.exports = app;