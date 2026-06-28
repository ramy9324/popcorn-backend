const express = require('express');
const router = express.Router();
const Review = require('../models/Review');
const Movie = require('../models/Movie');

// Get all reviews for a movie
router.get('/movie/:movieId', async (req, res) => {
  try {
    console.log('📥 Fetching reviews for:', req.params.movieId);
    const reviews = await Review.find({ movie: req.params.movieId })
      .sort({ createdAt: -1 });
    console.log('✅ Found', reviews.length, 'reviews');
    res.json(reviews);
  } catch (error) {
    console.error(' Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Add a review (بدون مصادقة معقدة)
router.post('/movie/:movieId', async (req, res) => {
  try {
    console.log('📝 Adding review for:', req.params.movieId);
    const { rating, comment, username } = req.body;

    const review = new Review({
      movie: req.params.movieId,
      username: username || 'Anonymous',
      rating,
      comment,
      helpful: 0
    });

    await review.save();
    console.log('✅ Review saved:', review);

    // تحديث تقييم الفيلم
    const allReviews = await Review.find({ movie: req.params.movieId });
    const avgRating = allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length;
    
    await Movie.findByIdAndUpdate(req.params.movieId, {
      averageRating: Math.round(avgRating * 10) / 10,
      totalReviews: allReviews.length
    });

    res.status(201).json(review);
  } catch (error) {
    console.error('❌ Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Mark review as helpful
router.post('/:reviewId/helpful', async (req, res) => {
  try {
    const review = await Review.findById(req.params.reviewId);
    if (!review) return res.status(404).json({ message: 'Not found' });
    
    review.helpful += 1;
    await review.save();
    res.json(review);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;