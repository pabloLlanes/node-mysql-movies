const db = require('../config/db');
const bcrypt = require('bcrypt');

const Movie = require('../api/movies/movie.model');
const Actor = require('../api/actors/actor.model');
const Director = require('../api/directors/director.model');
const User = require('../api/users/user.model');
const Tvshow = require('../api/tvshows/tvshow.model');
const Season = require('../api/seasons/season.model');
const Episode = require('../api/episodes/episode.model');

//await foo.addBars([bar1, bar2]);

async function initialData() {
  await db.sync();
  const movies = await Movie.count();

  if (movies > 0) {
    return;
  }

  //create fake movies
  await Promise.all([
    Movie.create({
      title: 'Indiana Jones and the Temple of Doom',
      rank: '4',
      year: 1984,
      description: 'a movie...'
    }),
    Movie.create({
      title: 'Transformers ',
      rank: '2',
      year: 2007,
      description: 'a history ....'
    }),
    Movie.create({
      title: 'The Shining',
      rank: '5',
      year: 1980,
      description: 'a history ....'
    }),
    Movie.create({
      title: 'Batman',
      rank: '1',
      year: 1989,
      description: 'a history ....'
    }),
    Movie.create({
      title: 'guardians of the galaxy',
      rank: '4',
      year: 2014,
      description: 'a history ....'
    }),
    Movie.create({
      title: 'Saving Private Ryan',
      rank: '4',
      year: 1998,
      description: 'a history ....'
    }),
    Movie.create({
      title: 'Jaws',
      rank: '4',
      year: 1975,
      description: 'a history ....'
    })
  ]);

  //create fake actors
  await Promise.all([
    Actor.create({
      name: 'Jack Nicholson',
      age: 84
    }),
    Actor.create({
      name: 'Harrison Ford',
      age: 79
    }),
    Actor.create({
      name: 'Danny DeVito',
      age: 76
    }),
    Actor.create({
      name: 'Shia LaBeouf',
      age: 35
    })
  ]);

  //create fake directors
  await Promise.all([
    Director.create({
      name: 'Steven Spielberg',
      age: 74,
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
    }),
    Season.create({
      title: 'tres',
      description: 'this is a season three'
    }),
    Season.create({
      title: 'cuatro',
      description: 'this is a season four'
    })
  ]);

  /**
   * Associations
   */

  //movie add Actor
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

  movieAddActor(1, 2);
  movieAddActor(1, 3);
  movieAddActor(2, 2);
  movieAddActor(2, 4);

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

  movieAddDirector(1, 2);
  movieAddDirector(3, 1);

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
