const db = require('../config/db');
const bcrypt = require('bcrypt');

const Movie = require('../api/movies/movie.model');
const Actor = require('../api/actors/actor.model');
const Director = require('../api/directors/director.model');
const User = require('../api/users/user.model');
const Tvshow = require('../api/tvshows/tvshow.model');
const Season = require('../api/seasons/season.model');
const Episode = require('../api/episodes/episode.model');

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

  //create fake users
  const passwordHash = bcrypt.hashSync('123456', 8);

  await Promise.all([
    User.create({
      email: 'admin@admin.com',
      password: passwordHash,
      description: 'is a admin'
    }),
    User.create({
      email: 'user@user.com',
      password: passwordHash,
      description: 'is a user'
    })
  ]);

  //create fake tvshows
  await Promise.all([
    Tvshow.create({
      title: 'tv show chernobyl',
      rank: 5,
      channel: 'hbo'
    }),
    Tvshow.create({
      title: 'tv show the sopranos',
      rank: 5,
      channel: 'amc'
    })
  ]);
  //create fake espisodes

  await Promise.all([
    Episode.create({
      title: 'episode 123',
      description: 'episode #123 about'
    }),
    Episode.create({
      title: 'episode 456',
      description: 'episode #456 about'
    })
  ]);

  //create fake seasons

  await Promise.all([
    Season.create({
      title: 'season five',
      description: 'this is a season five'
    }),
    Season.create({
      title: '7 S',
      description: 'this is a season seven'
    })
  ]);
}
module.exports = { initialData };
