const mongoose = require('mongoose');
require('dotenv').config();
const Movie = require('../models/Movie');

const removeDuplicates = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    const movies = await Movie.find();
    const seenTitles = new Set();
    let deletedCount = 0;

    for (const movie of movies) {
      if (seenTitles.has(movie.title.toLowerCase())) {
        await Movie.findByIdAndDelete(movie._id);
        deletedCount++;
        console.log(`🗑️  Deleted: ${movie.title}`);
      } else {
        seenTitles.add(movie.title.toLowerCase());
      }
    }

    console.log(`\n✅ Done! Deleted ${deletedCount} duplicate movies`);
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
};

removeDuplicates();