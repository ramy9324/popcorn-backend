const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// Get all movies
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find().sort({ averageRating: -1 });
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get Top 250 Movies
router.get('/top250', async (req, res) => {
  try {
    const movies = await Movie.find()
      .sort({ averageRating: -1, totalReviews: -1 })
      .limit(250);
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get Most Popular
router.get('/popular', async (req, res) => {
  try {
    const movies = await Movie.find()
      .sort({ popularity: -1 })
      .limit(100);
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get Now Playing
router.get('/now-playing', async (req, res) => {
  try {
    const movies = await Movie.find({ isNowPlaying: true })
      .sort({ releaseDate: -1 });
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get Coming Soon
router.get('/coming-soon', async (req, res) => {
  try {
    const movies = await Movie.find({ 
      isComingSoon: true,
      releaseDate: { $gte: new Date() }
    }).sort({ releaseDate: 1 });
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get single movie
router.get('/:id', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.json(movie);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router; 