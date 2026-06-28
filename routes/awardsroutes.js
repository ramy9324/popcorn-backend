const express = require('express');
const router = express.Router();

// Sample Oscars data
const oscarsData = {
  year: 2024,
  ceremony: "96th Academy Awards",
  date: "March 10, 2024",
  location: "Dolby Theatre, Hollywood",
  categories: [
    {
      category: "Best Picture",
      winner: "Oppenheimer",
      nominees: [
        "Oppenheimer",
        "Poor Things",
        "Killers of the Flower Moon",
        "The Zone of Interest",
        "Anatomy of a Fall",
        "The Holdovers",
        "Past Lives",
        "American Fiction",
        "Maestro",
        "Barbie"
      ]
    },
    {
      category: "Best Director",
      winner: "Christopher Nolan - Oppenheimer",
      nominees: [
        "Christopher Nolan - Oppenheimer",
        "Yorgos Lanthimos - Poor Things",
        "Martin Scorsese - Killers of the Flower Moon",
        "Jonathan Glazer - The Zone of Interest",
        "Justine Triet - Anatomy of a Fall"
      ]
    },
    {
      category: "Best Actor",
      winner: "Cillian Murphy - Oppenheimer",
      nominees: [
        "Cillian Murphy - Oppenheimer",
        "Paul Giamatti - The Holdovers",
        "Leonardo DiCaprio - Killers of the Flower Moon",
        "Colman Domingo - Rustin",
        "Bradley Cooper - Maestro"
      ]
    },
    {
      category: "Best Actress",
      winner: "Emma Stone - Poor Things",
      nominees: [
        "Emma Stone - Poor Things",
        "Lily Gladstone - Killers of the Flower Moon",
        "Sandra Hüller - Anatomy of a Fall",
        "Carey Mulligan - Maestro",
        "Annette Bening - Nyad"
      ]
    }
  ]
};

// Get Oscars information
router.get('/oscars', (req, res) => {
  res.json(oscarsData);
});

// Get Calendar (upcoming releases)
router.get('/calendar', async (req, res) => {
  try {
    const Movie = require('../models/Movie');
    const upcomingMovies = await Movie.find({
      releaseDate: { $gte: new Date() }
    }).sort({ releaseDate: 1 }).limit(50);
    
    res.json(upcomingMovies);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;