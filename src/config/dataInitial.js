const db = require('./db');

const Movie = require('../api/movies/movie.model');

async function initialData() {
  await db.sync();
  const users = await Movie.count();

  if (users > 0) {
    return;
  }

  //create default movies
  await Promise.all([
    Movie.create({
      title: 'avengers',
      rank: '4',
      description: 'a history ....'
    }),
    Movie.create({
      title: 'avengers: endgame',
      rank: '2',
      description: 'a history ....'
    }),
    Movie.create({
      title: 'iron man',
      rank: '5',
      description: 'a history ....'
    }),
    Movie.create({
      title: 'spider man',
      rank: '1',
      description: 'a history ....'
    }),
    Movie.create({
      title: 'guardians of the galaxy',
      rank: '4',
      description: 'a history ....'
    })
  ]);
}

module.exports = { initialData };
