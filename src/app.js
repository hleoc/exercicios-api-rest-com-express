const express = require('express');
const { readMoviesData, readMoviesDataId, createMovies, updateMovie, deleteMovie } = require('./utils/fsUtils');

const app = express();

app.use(express.json());

app.get('/movies', async (req, res) => {
    const readMovies = await readMoviesData();
    return res.status(200).json({ movies: readMovies });
});

app.get('/movies/:id', async (req, res) => {
    const { id } = req.params;
    const readMoviesId = await readMoviesDataId(Number(id));
    return res.status(200).json({movie: readMoviesId });
});

app.post('/movies', async (req, res) => {
    const movie = req.body;
    const create = await createMovies(movie);
    return res.status(201).json({ movieCreated: create });
})

app.put('/movies/:id', async (req, res) => {
    const { id } = req.params;
    const movie = req.body;
    const movieUpdate = await updateMovie(Number(id), movie);
    return res.status(200).json({ updated: movieUpdate });
});

app.delete('/movies/:id', async (req, res) => {
    const { id } = req.params;
    await deleteMovie(Number(id));
    return res.status(204).end();
})

module.exports = app;