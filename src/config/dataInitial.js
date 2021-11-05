const db = require('./db');

const Movie = require('../api/movies/movie.model');
const Actor = require('../api/actors/actor.model');
const Director = require('../api/directors/director.model');
const User = require('../api/users/user.model');

async function initialData() {
  await db.sync();
  const movies = await Movie.count();

  if (movies > 0) {
    return;
  }

  //create fake movies
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

  //create fake actors

  await Promise.all([
    Actor.create({
      name: 'iron man',
      nickname: 'dasdsadsadsadsad',
      age: '50'
    }),
    Actor.create({
      name: 'spider man',
      age: '30',
      nickname: 'dasdsadsadsadsad'
    }),
    Actor.create({
      name: 'ant man',
      age: '40',
      nickname: 'dasdsadsadsadsad'
    })
  ]);

  //create fake directors

  await Promise.all([
    Director.create({
      name: 'coppola francis',
      age: 30,
      directorYear: 1998
    }),
    Director.create({
      name: 'tarantino',
      age: 30,
      directorYear: 1998
    }),
    Director.create({
      name: 'kubrick',
      age: 40,
      directorYear: 1998
    })
  ]);

  //create fake directors

  await Promise.all([
    User.create({
      email: 'coppola francis',
      password: '123456',
      description: 'is a user'
    }),
    User.create({
      email: 'coppola francis',
      password: '123456',
      description: 'is a user'
    }),
    User.create({
      email: 'coppola francis',
      password: '123456',
      description: 'is a user'
    })
  ]);
}
module.exports = { initialData };
