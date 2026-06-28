const mongoose = require('mongoose');
require('dotenv').config();

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
  network: String,
  nextEpisode: Date,
  popularity: { type: Number, default: 0 }
});

const TVShow = mongoose.model('TVShow', tvShowSchema);

const tvShows = [
  {
    title: "Breaking Bad",
    year: 2008,
    genre: ["Crime", "Drama", "Thriller"],
    creator: "Vince Gilligan",
    cast: ["Bryan Cranston", "Aaron Paul", "Anna Gunn"],
    poster: "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX300.jpg",
    backdrop: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=1400&h=700",
    plot: "A high school chemistry teacher turned methamphetamine manufacturer partners with a former student to secure his family's financial future.",
    seasons: 5,
    episodes: 62,
    averageRating: 9.5,
    totalReviews: 0,
    status: "Ended",
    network: "AMC",
    popularity: 98
  },
  {
    title: "Game of Thrones",
    year: 2011,
    genre: ["Action", "Adventure", "Drama"],
    creator: "David Benioff",
    cast: ["Emilia Clarke", "Peter Dinklage", "Kit Harington"],
    poster: "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SX300.jpg",
    backdrop: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=1400&h=700",
    plot: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
    seasons: 8,
    episodes: 73,
    averageRating: 9.2,
    totalReviews: 0,
    status: "Ended",
    network: "HBO",
    popularity: 97
  },
  {
    title: "The Last of Us",
    year: 2023,
    genre: ["Action", "Adventure", "Drama"],
    creator: "Craig Mazin",
    cast: ["Pedro Pascal", "Bella Ramsey", "Anna Torv"],
    poster: "https://m.media-amazon.com/images/M/MV5BZGUzYTI3M2EtZmM0Yy00NGUyLWI4ODEtN2Q3ZGJlYzhhZjU3XkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_SX300.jpg",
    backdrop: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1400&h=700",
    plot: "After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.",
    seasons: 1,
    episodes: 9,
    averageRating: 8.8,
    totalReviews: 0,
    status: "Running",
    network: "HBO",
    nextEpisode: new Date('2025-04-13'),
    popularity: 96
  },
  {
    title: "The Wire",
    year: 2002,
    genre: ["Crime", "Drama", "Thriller"],
    creator: "David Simon",
    cast: ["Dominic West", "Lance Reddick", "Sonja Sohn"],
    poster: "https://m.media-amazon.com/images/M/MV5BZmY5ZDMxODEtNWIwOS00NjdkLTkyMjktNWRjMTIwZDIxYjBjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
    backdrop: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1400&h=700",
    plot: "The Baltimore drug scene, as seen through the eyes of drug dealers and law enforcement.",
    seasons: 5,
    episodes: 60,
    averageRating: 9.3,
    totalReviews: 0,
    status: "Ended",
    network: "HBO",
    popularity: 94
  },
  {
    title: "Stranger Things",
    year: 2016,
    genre: ["Drama", "Fantasy", "Horror"],
    creator: "The Duffer Brothers",
    cast: ["Millie Bobby Brown", "Finn Wolfhard", "Winona Ryder"],
    poster: "https://m.media-amazon.com/images/M/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_SX300.jpg",
    backdrop: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=1400&h=700",
    plot: "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
    seasons: 4,
    episodes: 34,
    averageRating: 8.7,
    totalReviews: 0,
    status: "Running",
    network: "Netflix",
    nextEpisode: new Date('2025-06-01'),
    popularity: 95
  },
  {
    title: "The Sopranos",
    year: 1999,
    genre: ["Crime", "Drama"],
    creator: "David Chase",
    cast: ["James Gandolfini", "Lorraine Bracco", "Edie Falco"],
    poster: "https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    backdrop: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1400&h=700",
    plot: "New Jersey mob boss Tony Soprano deals with personal and professional issues in his home and business life that affect his mental state.",
    seasons: 6,
    episodes: 86,
    averageRating: 9.2,
    totalReviews: 0,
    status: "Ended",
    network: "HBO",
    popularity: 93
  },
  {
    title: "The Office",
    year: 2005,
    genre: ["Comedy"],
    creator: "Greg Daniels",
    cast: ["Steve Carell", "Jenna Fischer", "John Krasinski"],
    poster: "https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4MTktYzU3ZjA5ODQ1YzU2XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg",
    backdrop: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&h=700",
    plot: "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.",
    seasons: 9,
    episodes: 201,
    averageRating: 9.0,
    totalReviews: 0,
    status: "Ended",
    network: "NBC",
    popularity: 92
  },
  {
    title: "Friends",
    year: 1994,
    genre: ["Comedy", "Romance"],
    creator: "David Crane",
    cast: ["Jennifer Aniston", "Courteney Cox", "Lisa Kudrow"],
    poster: "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
    backdrop: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1400&h=700",
    plot: "Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.",
    seasons: 10,
    episodes: 236,
    averageRating: 8.9,
    totalReviews: 0,
    status: "Ended",
    network: "NBC",
    popularity: 91
  },
  {
    title: "The Crown",
    year: 2016,
    genre: ["Biography", "Drama", "History"],
    creator: "Peter Morgan",
    cast: ["Claire Foy", "Olivia Colman", "Imelda Staunton"],
    poster: "https://m.media-amazon.com/images/M/MV5BZmY0MzBlNjctNTRmNy00Njk3LWFjMzctMWQwZDAwMGJkYzMyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
    backdrop: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1400&h=700",
    plot: "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.",
    seasons: 6,
    episodes: 60,
    averageRating: 8.6,
    totalReviews: 0,
    status: "Ended",
    network: "Netflix",
    popularity: 89
  },
  {
    title: "True Detective",
    year: 2014,
    genre: ["Crime", "Drama", "Mystery"],
    creator: "Nic Pizzolatto",
    cast: ["Matthew McConaughey", "Colin Farrell", "Mahershala Ali"],
    poster: "https://m.media-amazon.com/images/M/MV5BMmRlYmE0Y2UtZDk3Yy00YzgyLWI4ZGQtZmNlM2Y1YjA5ZmNiXkEyXkFqcGdeQXVyNTMxMjgxMzA@._V1_SX300.jpg",
    backdrop: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1400&h=700",
    plot: "Seasonal anthology series in which police investigations unearth the personal and professional secrets of those involved.",
    seasons: 4,
    episodes: 30,
    averageRating: 8.9,
    totalReviews: 0,
    status: "Running",
    network: "HBO",
    nextEpisode: new Date('2025-12-01'),
    popularity: 90
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/popcorn-db');
    console.log('✅ Connected to MongoDB');
    
    await TVShow.deleteMany({});
    console.log('🗑️ Cleared TV shows');
    
    await TVShow.insertMany(tvShows);
    console.log(`✅ Added ${tvShows.length} TV shows`);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

seed();