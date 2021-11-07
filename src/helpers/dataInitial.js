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
      id: 1,
      title: 'indiana jones and the temple of doom',
      rank: '4',
      year: 1984,
      description: 'a movie...'
    }),
    Movie.create({
      id: 2,
      title: 'Transformers ',
      rank: '2',
      year: 2007,
      description: 'a history ....'
    }),
    Movie.create({
      id: 3,
      title: 'The Shining',
      rank: '5',
      year: 1980,
      description: 'a history ....'
    }),
    Movie.create({
      id: 4,
      title: 'Batman',
      rank: '1',
      year: 1989,
      description: 'a history ....'
    }),
    Movie.create({
      id: 5,
      title: 'guardians of the galaxy',
      rank: '4',
      year: 2014,
      description: 'a history ....'
    }),
    Movie.create({
      id: 6,
      title: 'Saving Private Ryan',
      rank: '4',
      year: 1998,
      description: 'a history ....'
    }),
    Movie.create({
      id: 7,
      title: 'Jaws',
      rank: '4',
      year: 1975,
      description: 'a history ....'
    })
  ]);

  //create fake actors
  await Promise.all([
    Actor.create({
      id: 1,
      name: 'Jack Nicholson',
      age: 84
    }),
    Actor.create({
      id: 2,
      name: 'Harrison Ford',
      age: 79
    }),
    Actor.create({
      id: 3,
      name: 'Danny DeVito',
      age: 76
    }),
    Actor.create({
      id: 4,
      name: 'shia labeouf',
      age: 35
    }),
    Actor.create({
      id: 5,
      name: 'megan fox',
      age: 35
    })
  ]);

  //create fake directors
  await Promise.all([
    Director.create({
      id: 1,
      name: 'steven spielberg',
      age: 74,
      directorYear: 1998
    }),
    Director.create({
      id: 2,
      name: 'tarantino',
      age: 30,
      directorYear: 1998
    }),
    Director.create({
      id: 3,
      name: 'kubrick',
      age: 40,
      directorYear: 1998
    }),

    Director.create({
      id: 4,
      name: 'Michael Bay',
      age: 56,
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
      id: 1,
      title: 'the simpsons',
      rank: 5,
      channel: 'fox'
    }),
    Tvshow.create({
      id: 2,

      title: 'the walking dead',
      rank: 5,
      channel: 'amc'
    }),
    Tvshow.create({
      id: 3,

      title: 'the sopranos',
      rank: 5,
      channel: 'hbo'
    }),
    Tvshow.create({
      id: 4,

      title: 'chernobyl',
      rank: 3,
      channel: 'hbo'
    })
  ]);

  //create fake espisodes
  await Promise.all([
    Episode.create({
      id: 1,
      title: 'special halloween XI - ep.05',
      description: 'a episode of theSimpsons'
    }),
    Episode.create({
      id: 2,
      title: 'genius homer',
      description: 'a episode of theSimpsons'
    })
  ]);

  //create fake seasons

  await Promise.all([
    Season.create({
      id: 1,
      title: 'season one - S1',
      description: 'season simpsons'
    }),
    Season.create({
      id: 2,
      title: 'season two - S2',
      description: 'season simpsons'
    }),
    Season.create({
      id: 3,
      title: 'season - sopranos 1',
      description: 'sopra season 01'
    }),
    Season.create({
      id: 4,
      title: 's02 twd',
      description: 'the walking dead - season 2'
    })
  ]);

  /**
   * Associations
   */

  //movie add Actor

  const [moviesCount, actorsCount, directorsCount, tvshowsCount] =
    await Promise.all([
      Movie.count(),
      Actor.count(),
      Episode.count(),
      Tvshow.count(),
      Season.count(),
      Episode.count()
    ]);

  console.info('total movies: ' + moviesCount);
  console.info('total actors: ' + actorsCount);
  console.info('total director: ' + directorsCount);
  console.info('total tvshows: ' + tvshowsCount);

  const movieAddActor = async (movieId, actorId) => {
    try {
      const movieFound = await Movie.findByPk(movieId);
      if (!movieFound) {
        return false;
      }

      const actorFound = await Actor.findByPk(actorId);
      if (!actorFound) {
        return false;
      }

      movieFound.addActors(actorFound);

      return true;
    } catch (error) {
      throw error;
    }
  };

  //indi jon 1 - ford  2
  movieAddActor(1, 2);
  movieAddActor(2, 4);
  movieAddActor(2, 5);
  movieAddActor(3, 1);

  //movie add Director
  const movieAddDirector = async (movieId, directorId) => {
    try {
      const movieFound = await Movie.findByPk(movieId);
      if (!movieFound) {
        return false;
      }
      const directorFound = await Director.findByPk(directorId);
      if (!directorFound) {
        return false;
      }

      movieFound.setDirector(directorFound);

      return true;
    } catch (error) {
      throw error;
    }
  };

  movieAddDirector(1, 1);
  movieAddDirector(3, 3);
  movieAddDirector(2, 4);
  movieAddDirector(6, 1);
  movieAddDirector(7, 1);

  //tvshow add season
  const tvshowAddSeason = async (tvshowId, SeasonId) => {
    try {
      const tvshowFound = await Tvshow.findByPk(tvshowId);
      if (!tvshowFound) {
        return false;
      }
      const seasonFound = await Season.findByPk(SeasonId);
      if (!seasonFound) {
        return false;
      }

      tvshowFound.addSeason(seasonFound);

      return true;
    } catch (error) {
      throw error;
    }
  };

  tvshowAddSeason(1, 1);
  tvshowAddSeason(1, 2);
  tvshowAddSeason(2, 4);
  tvshowAddSeason(3, 3);

  //season add episode & director
  const seasonAddEpisodeDirector = async (seasonId, episodeId, directorId) => {
    try {
      const seasonFound = await Season.findByPk(seasonId);
      if (!seasonFound) {
        return false;
      }
      const espisodeFound = await Episode.findByPk(episodeId);
      if (!espisodeFound) {
        return false;
      }
      const directorFound = await Director.findByPk(directorId);
      if (!directorFound) {
        return false;
      }

      seasonFound.addEpisode(espisodeFound);
      espisodeFound.setDirector(directorFound);

      return true;
    } catch (error) {
      throw error;
    }
  };

  seasonAddEpisodeDirector(1, 1, 2);
  seasonAddEpisodeDirector(1, 2, 1);
  seasonAddEpisodeDirector(2, 2, 3);
}
module.exports = { initialData };
