const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  movie: {
    type: String,
    required: true
  },
  username: {
    type: String,
    default: 'Anonymous'
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 10
  },
  comment: {
    type: String,
    required: true
  },
  helpful: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Review', reviewSchema);