const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: Number, required: true },
  genre: { type: String, required: true },
  director: { type: String, required: true },
  cast: [String],
  poster: String,
  backdrop: String,
  plot: String,
  duration: { type: String, default: "2h 0m" },
  averageRating: { type: Number, default: 0 },
  totalReviews: { type: Number, default: 0 },
  popularity: { type: Number, default: 0 },
  isNowPlaying: { type: Boolean, default: false },
  isComingSoon: { type: Boolean, default: false },
  releaseDate: Date,
  boxOffice: String,
  awards: [String],
  imdbID: String
}, { 
  timestamps: true 
});

module.exports = mongoose.model('Movie', movieSchema); 