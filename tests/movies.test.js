const request = require('supertest');

const app = require('../src/app');

describe('tests movies endpoints', () => {
  /**
   * test get all movies
   */
  it('expect json containing list of all movies', (done) => {
    request(app)
      .get('/api/movies')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  /**
   * test create movie endpoint
   */
  it('expect json containing a new movie details', (done) => {
    let newMovie = {
      title: 'jurassic ParK',
      rank: '45',
      year: '1995'
    };

    request(app)
      .post('/api/movies')
      .send(newMovie)
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});
