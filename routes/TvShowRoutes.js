const express = require('express');
const router = express.Router();
const TVShow = require('../models/TVShow');

// Get all TV shows
router.get('/', async (req, res) => {
  try {
    const shows = await TVShow.find().sort({ averageRating: -1 });
    res.json(shows);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get Top 250 TV Shows
router.get('/top250', async (req, res) => {
  try {
    const shows = await TVShow.find()
      .sort({ averageRating: -1, totalReviews: -1 })
      .limit(250);
    res.json(shows);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get What's on TV (currently airing)
router.get('/on-tv', async (req, res) => {
  try {
    const shows = await TVShow.find({ 
      status: 'Running',
      nextEpisode: { $lte: new Date() }
    }).sort({ nextEpisode: 1 });
    res.json(shows);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get single TV show
router.get('/:id', async (req, res) => {
  try {
    const show = await TVShow.findById(req.params.id);
    if (!show) {
      return res.status(404).json({ message: 'Show not found' });
    }
    res.json(show);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;