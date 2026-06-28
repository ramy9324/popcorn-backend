const mongoose = require('mongoose');

const tvShowSchema = new mongoose.Schema({
  title: String,
  year: Number,
  genre: [String],
  creator: String,
  cast: [String],
  poster: String,
  backdrop: String,
  plot: String,
  seasons: Number,
  episodes: Number,
  averageRating: { type: Number, default: 0 },
  totalReviews: { type: Number, default: 0 },
  status: { type: String, enum: ['Running', 'Ended', 'Upcoming'], default: 'Running' },
  network: String,             // القناة (HBO, Netflix, etc)
  nextEpisode: Date,           // الحلقة القادمة
  popularity: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('TVShow', tvShowSchema);